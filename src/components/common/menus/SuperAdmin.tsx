import { superAdminMenu } from "./superAdminMenu";

interface Props {
  expanded: boolean;
}

const SuperAdmin: React.FC<Props> = ({ expanded }) => {
  return (
    <nav className="p-4">
      <ul className="space-y-3">
        {superAdminMenu.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.label}
              className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-blue-50 transition"
            >
              <Icon size={22} className="text-blue-500 shrink-0" />
              <span
                className={`pl-3 font-medium transition-all duration-300 ${
                  expanded ? "opacity-100" : "opacity-0 w-0"
                }`}
              >
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SuperAdmin;
