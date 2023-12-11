const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen relative">
      <main className=" bg-gradient-to-tr from-cyan-500 to-purple-700 h-screen">
        {children}
      </main>
    </div>
  );
};

export default LandingLayout;
