import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/Navbar";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-[120px]" />

        <div className="absolute top-40 right-0 h-[450px] w-[450px] rounded-full bg-cyan-300/20 blur-[120px]" />

        <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-indigo-300/20 blur-[120px]" />
      </div>

      <Navbar />

      <main className="max-w-7xl mx-auto px-6">
        <Outlet />
      </main>
    </div>
  );
}
