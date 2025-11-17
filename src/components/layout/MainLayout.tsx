import { Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-lg font-bold mb-6">BrunchPay Admin</h1>

        <nav className="space-y-2 justify-between">
          <NavLink to="/" end className="block hover:underline">
            대시보드
          </NavLink>
          <NavLink to="/transactions" className="block hover:underline">
            거래 내역
          </NavLink>
          <NavLink to="/merchants" className="block hover:underline">
            가맹점 정보
          </NavLink>
           <NavLink to="/invoices" className="block hover:underline">
            인보이스 관리
          </NavLink>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
