import {
  CalendarDays,
  ChevronDown,
  LayoutDashboard,
  LogOut,
  NotepadTextDashed,
  ScrollText,
  Settings,
  UserRoundCog,
  Users,
} from "lucide-react";
import { useState } from "react";

const SuperAdmin: React.FC = () => {
  const [dropOpen, setDropOpen] = useState(false);
  return (
    <div className="w-full flex flex-col justify-start gap-y-2 p-1 overflow-hidden">
      <div className="w-full p-2 cursor-pointer text-black/80 flex items-center justify-start hover:shadow-[0_3px_3px_var(--bkShadow)]">
        <LayoutDashboard className="h-10" strokeWidth={2} />
        <p className="text-md font-semibold pl-2">Dashboard</p>
      </div>

      <div
        onClick={() => setDropOpen(!dropOpen)}
        className="w-full mt-2 px-2 py-3 cursor-pointer bg-blue-600 rounded-lg flex items-center justify-between"
      >
        <span className="flex items-center">
          <Users className="text-white h-5" strokeWidth={2.5} />
          <p className="text-white pl-2 text-wrap text-sm">Patient Management</p>
        </span>
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

      <div className="w-full p-2 cursor-pointer text-black/80 flex items-center justify-start hover:shadow-[0_3px_3px_var(--bkShadow)]">
        <UserRoundCog strokeWidth={2.5} />
        <p className="text-md font-semibold pl-2">User Management</p>
      </div>

      <div className="w-full p-2">
        <p className="uppercase text-sm font-light tracking-wide text-black/50 my-2">
          reposrts & settings
        </p>
      </div>

      <div className="w-full p-2 cursor-pointer text-black/80 flex items-center justify-start hover:shadow-[0_3px_3px_var(--bkShadow)]">
        <NotepadTextDashed strokeWidth={2.5} />
        <p className="text-md font-semibold pl-2">Clinic Reports</p>
      </div>

      <div className="w-full p-2 cursor-pointer text-black/80 flex items-center justify-start hover:shadow-[0_3px_3px_var(--bkShadow)]">
        <ScrollText strokeWidth={2.5} />
        <p className="text-md font-semibold pl-2">Reports</p>
      </div>

      <div className="w-full p-2 cursor-pointer text-black/80 flex items-center justify-start hover:shadow-[0_3px_3px_var(--bkShadow)]">
        <Settings strokeWidth={2.5} />
        <p className="text-md font-semibold pl-2">Settings</p>
      </div>
      <p className="p-[1px] bg-black/20 w-full"></p>
      <div className="w-full p-2">
        <p className="bg-red-200 flex items-center gap-2 cursor-pointer hover:bg-red-500 transition-all duration-300 hover:text-white text-red-500 p-2 rounded-lg">
          <LogOut className="h-5" strokeWidth={2.5} />
          LogOut
        </p>
      </div>
    </div>
  );
};

export default SuperAdmin;
