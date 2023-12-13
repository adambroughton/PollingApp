"use client";

import React, { useState } from "react";

const CreatePoll = () => {
  interface PollData {
    PollID: number;
    PollQuestion: string;
    PollAnswers: string[];
    Votes: number[];
    PollTotalResponses: number;
  }

  const initialPollData: PollData = {
    PollID: 0,
    PollQuestion: "", // Set the initial value to an empty string
    PollAnswers: ["", ""],
    Votes: [0, 0],
    PollTotalResponses: 0,
  };

  const [pollData, setPollData] = useState<PollData>(initialPollData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { value, name } = e.target;

    if (name === "PollQuestion") {
      setPollData((prevData) => ({
        ...prevData,
        PollQuestion: value,
      }));
    } else {
      const newPollAnswers = [...pollData.PollAnswers];
      newPollAnswers[index] = value;

      setPollData((prevData) => ({
        ...prevData,
        PollAnswers: newPollAnswers,
      }));
    }
  };

  const handleAddAnswer = () => {
    if (pollData.PollAnswers.length >= 4) {
      alert("The maximum number of options has been reached (4 options).");
    } else {
      setPollData((prevData) => ({
        ...prevData,
        PollAnswers: [...prevData.PollAnswers, ""],
        Votes: [...prevData.Votes, 0],
      }));
    }
  };

  const handleRemoveAnswer = (index: number) => {
    if (pollData.PollAnswers.length > 2) {
      const newPollAnswers = [...pollData.PollAnswers];
      const newVotes = [...pollData.Votes];
      newPollAnswers.splice(index, 1);
      newVotes.splice(index, 1);
      setPollData((prevData) => ({
        ...prevData,
        PollAnswers: newPollAnswers,
        Votes: newVotes,
      }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if at least two options are provided
    if (pollData.PollAnswers.length < 2) {
      alert("Please provide at least two options.");
      return;
    }

    // TODO: Handle form submission logic
    console.log("Poll Data Submitted:", pollData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md border-4">
      <form onSubmit={handleFormSubmit}>
        <label className="block mb-4 text-left">
          <span className="text-gray-700">Poll Question:</span>
          <input
            type="text"
            name="PollQuestion"
            value={pollData.PollQuestion}
            placeholder="Enter your question"
            onChange={(e) => handleInputChange(e, 0)} // Assuming the question is at index 0
            className="form-input mt-1 block w-full p-1 border-2 rounded"
          />
        </label>

        {pollData.PollAnswers.map((option, index) => (
          <div key={index} className="flex mb-4">
            <label className="block flex-1 text-left mr-2">
              <span className="text-gray-700">{`Option ${index + 1}:`}</span>
              <input
                type="text"
                name={`PollAnswers-${index}`}
                value={option}
                onChange={(e) => handleInputChange(e, index)}
                className="form-input mt-1 block w-full p-1 border-2 rounded"
              />
            </label>
            {index >= 2 && (
              <button
                type="button"
                onClick={() => handleRemoveAnswer(index)}
                className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <div className="flex justify-between items-end">
          <button
            type="button"
            onClick={handleAddAnswer}
            className="self-start bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600"
          >
            Add Option
          </button>
          <button
            type="submit"
            className="self-end bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
          >
            Create Poll
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePoll;
