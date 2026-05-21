import type { Payment, Merchant, Invoice } from "../types/payment";
import { mockMerchants } from "../data/mockMerchants";
import { mockPayments } from "../data/mockPayments";
import { mockInvoices } from "../data/mockInvoices";

export const getPayments = async (): Promise<Payment[]> => {
  return mockPayments;
};

export const getMerchants = async (): Promise<Merchant[]> => {
  return mockMerchants;
};

export const getInvoices = async (): Promise<Invoice[]> => {
  return mockInvoices;
};
