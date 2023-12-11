import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const CreatePollLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen relative">
      <div className="hidden h-screen md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72 bg-gradient-to-tr from-emerald-500 to-cyan-500 h-screen">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default CreatePollLayout;
