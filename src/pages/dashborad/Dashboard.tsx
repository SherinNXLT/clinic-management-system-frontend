import Super_Admin_Menu from "../../components/common/Super_Admin_Menu"
import DashboardLayout from "../../components/layout/DashboardLayout"
import Home from "../../components/ui/dashboard/super_admin/Home"


const Dashboard = () => {
    return (
        <DashboardLayout >
            <div className="w-full h-full flex bg-blue-50">
                <Super_Admin_Menu />
                <Home />
            </div>
        </DashboardLayout>
    )
}

export default Dashboard