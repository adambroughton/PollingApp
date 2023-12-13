const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-400 to-cyan-400 min-h-screen">
      <main>{children}</main>
    </div>
  );
};

export default LandingLayout;
