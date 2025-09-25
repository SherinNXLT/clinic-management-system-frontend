import { Shield, X } from "lucide-react";
import { useState, useEffect } from "react";
import SuperAdmin from "./menus/SuperAdmin";

const CommonMenu: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Desktop collapse
  const [isMobileOpen, setIsMobileOpen] = useState(false); // Mobile sidebar
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size (mobile vs desktop)
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      {/* Mobile Trigger */}
      {isMobile && (
        <button
          className="fixed top-4 right-4 z-50 p-1 rounded-md bg-white shadow-md"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <Shield className="text-blue-500" size={24} />
        </button>
      )}

      {/* Mobile Overlay */}
      {isMobile && isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-50 h-screen overflow-hidden bg-white shadow-md flex flex-col
          transition-all duration-500 ease-in-out
          ${isMobile ? (isMobileOpen ? "w-full" : "w-[0]") : isCollapsed ? "lg:w-[64px]" : "lg:w-[240px]"}
        `}
      >
        {/* Header */}
        <div className="flex overflow-hidden items-center justify-between p-4 border-b">
          <div
            className="flex items-center cursor-pointer"
            onClick={() =>
              isMobile ? setIsMobileOpen((prev) => !prev) : setIsCollapsed((prev) => !prev)
            }
          >
            <Shield className="text-blue-500 shrink-0" size={28} />
            <h2
              className={`text-lg font-bold overflow-hidden pl-2 whitespace-nowrap lg:block transition-opacity duration-300 ${
                isCollapsed ? "opacity-0 w-0" : "opacity-100"
              }`}
            >
              Clinic System
            </h2>
          </div>

          {/* Close for Mobile */}
          {isMobile && isMobileOpen && (
            <button
              className="lg:hidden"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          )}
        </div>

        {/* Menu */}
        <SuperAdmin expanded={isMobile ? isMobileOpen : !isCollapsed} />
      </aside>
    </>
  );
};

export default CommonMenu;
