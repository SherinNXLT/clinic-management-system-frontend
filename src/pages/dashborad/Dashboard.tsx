import CommonMenu from "../../components/common/CommonMenu"
import DashboardLayout from "../../components/layout/DashboardLayout"
import Home from "../../components/ui/dashboard/super_admin/Home"


const Dashboard = () => {
    return (
        <DashboardLayout >
            <div className="w-full h-full flex bg-blue-50">
                <CommonMenu />
                <Home />
            </div>
        </DashboardLayout>
    )
}

export default Dashboard