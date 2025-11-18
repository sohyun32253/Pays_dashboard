import { useEffect, useState } from "react";
import { api } from "../../api/client";
import { createInvoices } from "../../utils/createInvoices";
import StatusBadge from "../../styles/StatusBadge";
import Pagination from "../../components/pagination";
import type { Invoice } from "../../utils/createInvoices";

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const itemsPerPage = 10; 

  useEffect(() => {
    async function fetchPayments() {
      try {
        const res = await api.get("/payments/list");
        const payments = res.data.data;

        const generatedInvoices = createInvoices(payments);
        setInvoices(generatedInvoices);
      } finally {
        setLoading(false);
      }
    }

    fetchPayments();
  }, []);

  if (loading) return <div>로딩중...</div>;

  const pageCount = Math.ceil(invoices.length / itemsPerPage);

  const start = page * itemsPerPage;
  const end = start + itemsPerPage;

  const currentItems = invoices.slice(start, end);

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
