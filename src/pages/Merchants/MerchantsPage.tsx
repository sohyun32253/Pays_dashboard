import { useEffect, useState } from "react";
import { api } from "../../api/client";

export default function TransactionsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

useEffect(() => {
  async function fetchPayments() {
    try {
      const res = await api.get("/merchants/list")
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

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">가맹점 정보</h1>

      <pre className="bg-gray-100 p-4 rounded-md">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
