import { Shield} from "lucide-react";
import { useState } from "react";
import SuperAdmin from "./menus/SuperAdmin";

const CommonMenu: React.FC = () => {
  const [openWeb, setOpenWeb] = useState<boolean>(true);

  return (
    <div
      className={`${
        openWeb ? "w-[250px]" : "w-[50px]"
      } bg-white shadow-md h-screen flex flex-col  transition-all duration-700 ease-in-out`}
    >
      {/* Logo / Toggle */}
      <div onClick={() => setOpenWeb(!openWeb)} className={`cursor-pointer flex items-center p-4 mb-6 transition-border duration-700 `}>
        <Shield
          className="text-blue-500 shrink-0"
          size={28}
          strokeWidth={2}
        />
        <h2
          className={`text-lg font-bold pl-2 whitespace-nowrap transition-opacity duration-700 ${
            openWeb ? "opacity-100" : "opacity-0"
          }`}
        >
          Clinic System
        </h2>
      </div>
      <div className={`w-full ${openWeb?"border-b-1":"border-none"}`}></div>

      {/* Menu Items */}
      <SuperAdmin openWeb={openWeb} />
    </div>
  );
};

export default CommonMenu;
