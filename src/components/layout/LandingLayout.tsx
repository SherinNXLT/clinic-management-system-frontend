import type { ReactNode } from "react";
import MainLayout from "./MainLayout";

interface LandingLayout {
    children: ReactNode;
}
const LandingLayout = ({ children }: LandingLayout) => {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    );
};

export default LandingLayout;