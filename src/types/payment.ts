export interface Payment {
  paymentCode: string;
  mchtCode: string;
  amount: number;
  currency: string;
  payType: string;
  status: string;
  paymentAt: string;
}

export interface Merchant{
  mchtCode: string;
  mchtName: string;
  status: string;
  bizType: string;
}