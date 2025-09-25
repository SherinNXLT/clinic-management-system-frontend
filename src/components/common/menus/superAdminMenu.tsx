import { LayoutDashboard, Users, Settings } from "lucide-react";
import type { MenuItem } from "../types/menu";

export const superAdminMenu: MenuItem[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    label: "Users",
    icon: Users,
    path: "/users",
  },
  {
    label: "Settings",
    icon: Settings,
    path: "/settings",
  },
];
