import AdminTopBar from "@/components/Topbar/AdminTopBar"
import { Outlet } from "react-router-dom"

const AdminLayout = () => {
    return (
        <div className="flex justify-start items-center flex-col">
            <AdminTopBar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout