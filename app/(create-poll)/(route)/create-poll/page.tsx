import CreatePoll from "@/components/create-poll";

const CreatePollPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 space-y-4 mt-2 border-4 bg-white w-11/12 p-8 rounded-2xl">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Create a poll.
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Follow the instructions below to start a poll.
        </p>
      </div>
      <div className="mb-8 space-y-4 mt-2  w-11/12 p-8 rounded-2xl">
        <div className="text-center">
          <CreatePoll />
        </div>
      </div>
    </div>
  );
};

export default CreatePollPage;
