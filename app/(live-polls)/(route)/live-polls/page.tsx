import PollData from "@/components/PollData";

const LivePolls = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="mb-8 space-y-4 mt-2 border-4 bg-white w-11/12 p-8 rounded-2xl">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Your live polls.
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          See the performance of your polls.
        </p>
      </div>
      <div>
        <div className="text-center">
          <section>
            <PollData />
          </section>
        </div>
      </div>
    </div>
  );
};

export default LivePolls;
