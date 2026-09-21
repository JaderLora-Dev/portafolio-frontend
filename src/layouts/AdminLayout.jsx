import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar.jsx";

function AdminLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
