import { useEffect, useState } from "react";
import { api } from "../../api/client";
import Pagination from "../../components/pagination";
import type { Merchant } from "../../types/payment";
import StatusBadge from "../../styles/StatusBadge";
export default function TransactionsPage() {
  const [data, setData] = useState<Merchant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);
  const itemsPerPage = 10; 

  useEffect(() => {
    async function fetchPayments() {
      try {
        const res = await api.get("/merchants/list");
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

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = data.slice(start, end);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">가맹점 정보</h1>
      <table className="w-full text-center">
        <thead>
          <tr className="font-bold">
            <th>Store Code</th>
            <th>Store Name</th>
            <th>Status</th>
            <th>Business Type</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.mchtCode} className="p-4">
              <td>{item.mchtCode}</td>
              <td>{item.mchtName}</td>
              <td><StatusBadge status={item.status} /></td>
              <td>{item.bizType}</td>
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
