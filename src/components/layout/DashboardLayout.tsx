import type { ReactNode } from "react";
import MainLayout from "./MainLayout";

interface DashboardLayout {
    children: ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayout) => {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    );
};

export default DashboardLayout;