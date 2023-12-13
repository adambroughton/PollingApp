import TopPerformer from "@/components/TopPerformer";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 space-y-4 mt-2 border-4 bg-white w-11/12 p-8 rounded-2xl">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Welcome to your dashboard.
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Create polls quickly and easily.
        </p>
        <div className="text-2xl md:text-4xl font-bold text-center">
          <Button className=" bg-green-600">
            <a href="/create-poll">Create Poll</a>
          </Button>
        </div>
      </div>
      <div className="mb-8 space-y-4 mt-2 w-11/12 p-8 rounded-2xl">
        <div>
          <section>
            <div>
              <TopPerformer />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
