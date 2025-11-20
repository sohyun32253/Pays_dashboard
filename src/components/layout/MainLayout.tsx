import { Outlet, NavLink } from "react-router-dom";
import dashboardIcon from "../../assets/dashboard_icon.svg"
import transactionIcon from "../../assets/transaction_icon.svg"
import merchantsIcon from "../../assets/merchants_icon.svg"
import invoicesIcon from "../../assets/invoices_icon.svg"

export default function MainLayout() {
  return (
  <div className="flex min-h-screen">
    {/* Sidebar */}
    <aside className="w-[280px] fixed inset-y-0 left-0 bg-gray-900 text-white p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-6 px-3">BrunchPay Admin</h1>

      <nav className="mt-6">
        <NavLink to="/" className="flex items-center gap-3 py-3 px-2 hover:bg-gray-700 rounded">
          <img src={dashboardIcon}/>
          <div className="text-lg font-bold">대시보드</div>
        </NavLink>
        <NavLink to="/transactions" className="flex items-center gap-3 py-3 px-2 hover:bg-gray-700 rounded">
          <img src={transactionIcon}/>
          <div className="text-lg font-bold">거래 내역</div>
        </NavLink>
        <NavLink to="/merchants" className="flex items-center gap-3 py-3 px-2 hover:bg-gray-700 rounded">
          <img src={merchantsIcon}/>
          <div className="text-lg font-bold">가맹점 정보</div>
        </NavLink>
        <NavLink to="/invoices" className="flex items-center gap-3 py-3 px-2 hover:bg-gray-700 rounded">
          <img src={invoicesIcon}/>
          <div className="text-lg font-bold">인보이스 관리</div>
        </NavLink>
      </nav>
    </aside>

    {/* Main */}
    <main className="flex-1 ml-[300px] min-h-screen px-5 py-8">
      <div className="mx-auto">
        <Outlet />
      </div>
    </main>
  </div>
  );
}
