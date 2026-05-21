import { useEffect, useState } from "react";
import { getInvoices } from "../../api/dashboardApi";
import StatusBadge from "../../styles/StatusBadge";
import Pagination from "../../components/pagination";
import type { Invoice } from "../../utils/createInvoices";

export default function InvoicesPage() {
  const [data, setData] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);

  const itemsPerPage = 10; 

  useEffect(() => {
    async function fetchInvoices() {
      try {
        const data = await getInvoices();
        setData(data); 
      } catch (err) {
        console.error("API Error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchInvoices();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const start = page * itemsPerPage;
  const end = start + itemsPerPage;

  const currentItems = data.slice(start, end);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">인보이스 관리</h1>

      <table className="w-full">
        <thead className="font-bold">
          <tr>
            <th>Invoice Code</th>
            <th>Merchant</th>
            <th>Period</th>
            <th>Total Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((item) => (
            <tr key={item.invoiceCode} className="border-b">
              <td>{item.invoiceCode}</td>
              <td>{item.mchtCode}</td>
              <td>{item.period}</td>
              <td>{item.totalAmount.toLocaleString()} {item.currency}</td>
              <td>
                <StatusBadge status={item.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="py-8 flex justify-center">
        <Pagination
          pageCount={pageCount}
          onPageChange={(pageIndex) => setPage(pageIndex)}
        />
      </div>
    </div>
  );
}
