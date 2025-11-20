import { useEffect, useState } from "react";
import StatusBadge from "../../styles/StatusBadge";
import { api } from "../../api/client";
import Pagination from "../../components/pagination";
import type { Payment } from "../../types/payment";

export default function TransactionsPage() {
  const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(0);
  const itemsPerPage = 10; 

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

  // 날짜 포맷 함수
  function formatDate(dateStr: string) {
    const date = new Date(dateStr);

    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");

    const hh = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");

    return `${y}-${m}-${d} ${hh}:${mm}`;
  }

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = data.slice(start, end);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">거래 내역</h1>
      <table className="w-full">
        <thead>
          <tr className="font-bold">
            <th>ID</th>
            <th>Date</th>
            <th>Store</th>
            <th>Amount</th>
            <th>Pay Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.paymentCode} className="p-4">
              <td>{item.paymentCode}</td>
              <td className="p-3">{formatDate(item.paymentAt)}</td>
              <td>{item.mchtCode}</td>
              <td>
                {Number(item.amount).toLocaleString()} {item.currency}
              </td>
              <td>{item.payType}</td>
              <td>
                <StatusBadge status={item.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="py-8">
        <Pagination
          pageCount={pageCount}
          onPageChange={(pageIndex) => setPage(pageIndex)}
        />
      </div>
    </div>
  );
}
