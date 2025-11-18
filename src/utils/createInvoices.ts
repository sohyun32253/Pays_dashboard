import type { Payment } from "../types/payment";

export interface Invoice {
  invoiceCode: string;
  mchtCode: string;
  period: string;
  totalAmount: number;
  currency: string;
  status: string;
}

export function createInvoices(payments: Payment[]): Invoice[] {
  const invoicesMap = new Map<string, Invoice>();

  payments.forEach((payment) => {
    const mchtCode = payment.mchtCode;
    const date = new Date(payment.paymentAt);
    const period = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    const key = `${mchtCode}_${period}`;

    if (!invoicesMap.has(key)) {
      invoicesMap.set(key, {
        invoiceCode: `INV-${period.replace("-", "")}-${mchtCode}`,
        mchtCode,
        period,
        totalAmount: 0,
        currency: "KRW",
        status: getRandomStatus(),
      });
    }

    const invoice = invoicesMap.get(key)!;
    invoice.totalAmount += Number(payment.amount);
  });

  return Array.from(invoicesMap.values());
}

function getRandomStatus() {
  const statuses = ["SUCCESS", "PENDING", "FAILED"];
  return statuses[Math.floor(Math.random() * statuses.length)];
}
