"use client";
import { PollData } from "@/app/types";

const CreatePoll = () => {
  function handleFormSubmit(e: any) {
    e.preventDefault();

    const requestBody: PollData = {
      PollQuestion: e.target.elements.PollQuestion.value,
      PollAnswer1: e.target.elements.PollAnswer1.value,
      PollAnswer2: e.target.elements.PollAnswer2.value,
      PollAnswer3: e.target.elements.PollAnswer3.value,
      PollAnswer4: e.target.elements.PollAnswer4.value,
    };

    //redundant
    if (
      requestBody.PollQuestion == undefined ||
      requestBody.PollAnswer1 == undefined ||
      requestBody.PollAnswer2 == undefined
    ) {
      return;
    }

    const url = "http://13.40.182.181:8080/addpolldata";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    window.location.href = "/live-polls";
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md border-4">
      <form onSubmit={handleFormSubmit}>
        <label className="block mb-4 text-left">
          <span className="text-gray-700">New Poll</span>
          <input
            type="text"
            name="PollQuestion"
            required
            placeholder="Enter your question"
            className="form-input mt-1 block w-full p-1 border-2 rounded"
          />
        </label>

        <div className="flex mb-4">
          <label className="block flex-1 text-left mr-2">
            <input
              name="PollAnswer1"
              type="text"
              required
              placeholder="Option 1"
              className="form-input mt-1 block w-full p-1 border-2 rounded"
            />
          </label>
        </div>
        <div className="flex mb-4">
          <label className="block flex-1 text-left mr-2">
            <input
              name="PollAnswer2"
              type="text"
              required
              placeholder="Option 2"
              className="form-input mt-1 block w-full p-1 border-2 rounded"
            />
          </label>
        </div>
        <div className="flex mb-4">
          <label className="block flex-1 text-left mr-2">
            <input
              name="PollAnswer3"
              type="text"
              placeholder="Option 3 (optional)"
              className="form-input mt-1 block w-full p-1 border-2 rounded"
            />
          </label>
        </div>
        <label className="block flex-1 text-left mr-2">
          <input
            name="PollAnswer4"
            type="text"
            placeholder="Option 4 (optional)"
            className="form-input mt-1 block w-full p-1 border-2 rounded"
          />
        </label>
        <button
          type="submit"
          className="self-end bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
        >
          Create Poll
        </button>
      </form>
    </div>
  );
};

export default CreatePoll;
