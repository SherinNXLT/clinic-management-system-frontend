import { ChevronLeft, ChevronRight, ShieldPlus } from "lucide-react";
import { useEffect, useState } from "react";
import SuperAdmin from "./menus/SuperAdmin";
import useIsMobile from "../../utils/ResponsiveChecking";

const CommonMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const isMobile = useIsMobile(768); // 768px = Tailwind md breakpoint
  useEffect(() => {
    isMobile ? setIsOpen(false) : setIsOpen(true);
  }, [isMobile])
  
  return (
    <div
      className={`${
        isOpen ? "w-[90%] md:w-[20%]" : "w-0"
      } fixed left-0 md:relative  min-h-screen transition-all duration-500  bg-white shadow-[4px_0_5px_#012f7563]`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-5 top-0 bg-white cursor-pointer rounded-lg shadow-md"
      >
        {isOpen ? (
          <ChevronLeft strokeWidth={2.25} />
        ) : (
          <ChevronRight strokeWidth={2.25} />
        )}
      </button>
      {/* Logo */}
      <div className="w-full p-2 overflow-hidden flex items-center">
        <ShieldPlus size={30} strokeWidth={2} className="text-blue-800" />
        <h1 className="text-black/90 font-bold pl-2 text-xl">Clinic System</h1>
      </div>
      <p className="bg-black/20 p-[1px]"></p>
      {/* menus */}
      <div className="w-full overflow-hidden">
        <SuperAdmin />
      </div>
    </div>
  );
};

export default CommonMenu;
