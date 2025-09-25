import { LayoutDashboard } from "lucide-react";

interface MenuOptions {
  openWeb: boolean;
}
const SuperAdmin: React.FC<MenuOptions> = ({ openWeb }) => {
  return (
    <ul className="w-full overflow-hidden space-y-4  p-4">
      <li className="flex items-center text-md font-semibold cursor-pointer hover:text-blue-600">
        <LayoutDashboard
          size={22}
          className="text-blue-500 cursor-pointer shrink-0"
        />

        <span
          className={`pl-3 transition-opacity duration-700`}
        >
          Dashboard
        </span>
      </li>
    </ul>
  );
};

export default SuperAdmin;
