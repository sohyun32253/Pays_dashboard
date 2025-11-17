import { useRoutes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import TransactionsPage from "../pages/Transactions/TransactionsPage";
import MerchantsPage from "../pages/Merchants/MerchantsPage";
import InvoicesPage from "../pages/Invoices/InvoicesPage";
export default function AppRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <DashboardPage /> },
        { path: "transactions", element: <TransactionsPage /> },
        { path: "merchants", element: <MerchantsPage /> },
        { path: "invoices", element: <InvoicesPage /> },
      ],
    },
  ]);
}
