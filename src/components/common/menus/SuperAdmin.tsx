import {
  CalendarDays,
  ChevronDown,
  LayoutDashboard,
  Users,
} from "lucide-react";
import { useState } from "react";

const SuperAdmin: React.FC = () => {
  const [dropOpen, setDropOpen] = useState(false);
  return (
    <div className="w-full p-1 overflow-hidden">
      <div className="w-full p-2 cursor-pointer text-black/80 flex items-center justify-start hover:shadow-[0_3px_3px_var(--bkShadow)]">
        <LayoutDashboard className="h-10" strokeWidth={2} />
        <p className="text-md font-semibold pl-2">Dashboard</p>
      </div>

      <div
        onClick={() => setDropOpen(!dropOpen)}
        className="w-full mt-2 px-2 py-3 cursor-pointer bg-blue-600 rounded-lg flex items-center justify-between"
      >
        <Users className="text-white h-5" strokeWidth={2.5} />
        <p className="text-white text-wrap text-sm">Patient Management</p>
        <ChevronDown
          className={`transition-all duration-500 text-white h-5 ${
            dropOpen ? "rotate-90" : "rotate-0"
          }`}
          strokeWidth={2.5}
        />
      </div>
      <div
        className={`transition-all duration-500 ${
          dropOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        } rounded-lg  bg-white shadow-[0_0_5px_var(--bkShadow)] flex flex-col justify-center gap-1 p-2 overflow-hidden w-full`}
      >
        <p className="pl-4 cursor-pointer hover:shadow-[0_3px_3px_var(--bkShadow)]">
          New Patient
        </p>
        <p className="pl-4 cursor-pointer hover:shadow-[0_3px_3px_var(--bkShadow)]">
          Follow up
        </p>
        <p className="pl-4 cursor-pointer hover:shadow-[0_3px_3px_var(--bkShadow)]">
          Pharmacy List
        </p>
        <p className="pl-4 cursor-pointer hover:shadow-[0_3px_3px_var(--bkShadow)]">
          Recent Visits
        </p>
      </div>
      <div className="w-full p-2 cursor-pointer text-black/80 flex items-center justify-start hover:shadow-[0_3px_3px_var(--bkShadow)]">
        <CalendarDays strokeWidth={2.5} />
        <p className="text-md font-semibold pl-2">Appointments</p>
      </div>
    </div>
  );
};

export default SuperAdmin;
