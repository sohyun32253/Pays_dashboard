import { useEffect, useState } from "react";
import { api } from "../../api/client";
import type { Payment } from "../../types/payment";
import PaymentsCardUi from "../../styles/PaymentsCardUi";
import CircleIcon from "../../assets/card_circle_icon.svg";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function DashboardPage() {
  const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // 1) API 요청
  useEffect(() => {
    async function fetchPayments() {
      try {
        const res = await api.get("/payments/list");
        setData(res.data.data);
      } catch (err) {
        console.error("API Error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPayments();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;

  // 2) 상태별 수치 계산
  const total = data.length;
  const success = data.filter((p) => p.status === "SUCCESS").length;
  const failed = data.filter((p) => p.status === "FAILED").length;
  const cancelled = data.filter((p) => p.status === "CANCELLED").length;

  const totalAmount = data.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  const formattedAmount = totalAmount.toLocaleString("ko-KR", {
    style: "currency",
    currency: "KRW",
  });

  // 3) 카드 매핑
  const cards = [
    { color: "blue", value: total },
    { color: "purple", value: success },
    { color: "orange", value: failed },
    { color: "gray", value: cancelled },
  ] as const;

  // 4) Status UI 
  const statusConfig = [
    { key: "SUCCESS", label: "Success", color: "#7F3DFF" },
    { key: "FAILED", label: "Failed", color: "#FF7A00" },
    { key: "CANCELLED", label: "Cancelled", color: "#9CA3AF" },
  ] as const;

  const statusCount = {
    SUCCESS: success,
    FAILED: failed,
    CANCELLED: cancelled,
  };

  const percent = (count: number) =>
    total === 0 ? 0 : Math.round((count / total) * 100);

  // 5) 파이 차트 데이터
  const pieData = {
    labels: ["Success", "Failed", "Cancelled"],
    datasets: [
      {
        data: [success, failed, cancelled],
        backgroundColor: ["#7F3DFF", "#FF7A00", "#9CA3AF"],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  // 6) 최근 거래 내역 정렬
  const latestPayments = [...data].sort(
    (a, b) =>
      new Date(b.paymentAt).getTime() -
      new Date(a.paymentAt).getTime()
  );

  function formatDate(dateStr: string) {
    const date = new Date(dateStr);

    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");

    const hh = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");

    return `${y}-${m}-${d} ${hh}:${mm}`;
  }

  // 7) 결제 수단 차트 데이터
  const device = data.filter((p) => p.payType === "DEVICE").length;
  const mobile = data.filter((p) => p.payType === "MOBILE").length;
  const online = data.filter((p) => p.payType === "ONLINE").length;
  const billing = data.filter((p) => p.payType === "BILLING").length;
  const vact = data.filter((p) => p.payType === "VACT").length;

  const payTypeData = {
    labels: ["DEVICE", "MOBILE", "ONLINE", "BILLING", "VACT"],
    datasets: [
      {
        label: "Payment Types",
        data: [device, mobile, online, billing, vact],
        backgroundColor: [
          "#ffe641",
          "#FF7A00",
          "#7F3DFF",
          "#41c6ff",
          "#3b82f6",
        ],
        borderRadius: 6,
        barThickness: 65,
      },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-10">대시보드</h1>
      {/* Payments Status */}
      <div className="flex justify-between mb-8">
        {cards.map((card) => (
          <PaymentsCardUi
            key={card.color}
            color={card.color}
            value={card.value}
          />
        ))}
      </div>

      <div className="flex justify-between mb-8">
        {/* Wallet Balance */}
        <div className="p-12 w-[42%] bg-blue-900 text-white rounded-2xl">
          <div className="mb-10">
            <img src={CircleIcon} alt="" />
          </div>

          <span className="text-[28px] font-bold">{formattedAmount}</span>
          <p className="mt-5">Wallet Balance</p>
        </div>

        {/* Status + Chart */}
        <div className="p-6 w-[55%] bg-white rounded-2xl shadow-lg">
          <h2 className="text-[22px] font-bold mb-4">Status</h2>

          <div className="flex justify-between items-center">
            {/* Status 리스트 */}
            <div>
              {statusConfig.map((item) => (
                <div key={item.key} className="py-3 w-[300px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-[20px] h-[20px] rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <p className="text-lg">{item.label}</p>
                    </div>

                    <span className="text-lg text-gray-400">
                      {percent(statusCount[item.key])}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 도넛 차트 */}
            <div className="w-[220px] h-[220px]">
              <Doughnut
                data={pieData}
                options={{
                  plugins: { legend: { display: false } },
                  cutout: "55%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        {/* Latest Transactions */}
        <div className="p-7 w-[48%] bg-white rounded-2xl shadow-lg">
          <h2 className="text-[22px] font-bold mb-4">Latest Transactions</h2>

          <table className="w-full">
            <thead>
              <tr>
                <th className="text-lg p-3">ID</th>
                <th className="text-lg p-3">Date</th>
                <th className="text-lg p-3">Amount</th>
              </tr>
            </thead>

            <tbody>
              {latestPayments.slice(0, 4).map((p) => (
                <tr key={p.paymentCode}>
                  <td className="p-3">{p.paymentCode}</td>
                  <td className="p-3">{formatDate(p.paymentAt)}</td>
                  <td className="p-3">
                    {Number(p.amount).toLocaleString()} {p.currency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Payments Trend */}
        <div className="p-7 w-[48.5%] bg-slate-900 rounded-2xl text-white">
          <h2 className="text-[22px] font-bold mb-4">Payments Trend</h2>

          <Bar
            data={payTypeData}
            options={{
              plugins: {
                legend: { display: false },
              },
              scales: {
                x: {
                  ticks: {
                    color: "#FFFFFF",
                    font: { size: 16 },
                  },
                  grid: { display: false },
                },
                y: {
                  ticks: {
                    color: "#b0b0b0",
                  },
                  grid: {
                    color: "rgba(205, 205, 205, 0.2)",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
