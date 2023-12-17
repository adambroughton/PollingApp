"use client";
import { PollVoteRequest } from "@/app/types";
import React, { useState, useEffect } from "react";

const PollData = () => {
  const [items, setItems] = useState([] as PollData[]);
  const url = "http://13.40.182.181:8080/polldata";

  useEffect(() => {
    fetch(url)
      .then((results) => {
        return results.json();
      })
      .then((data: PollData[]) => {
        setItems(data.reverse());
      });
  }, []);

  function vote(
    ID: number,
    Answer: "PollAnswer1" | "PollAnswer2" | "PollAnswer3" | "PollAnswer4"
  ) {
    const requestBody: PollVoteRequest = {
      PollID: ID,
      UsersAnswer: Answer,
    };

    const url = "http://13.40.182.181:8080/uservote";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    }).then(() => {
      window.location.reload();
    });
  }

  function votePercentage(item: PollData, answer: string) {
    const totalVotes =
      parseInt(item.Ans1Votes) +
      parseInt(item.Ans2Votes) +
      parseInt(item.Ans3Votes) +
      parseInt(item.Ans4Votes);

    if (isNaN(totalVotes) || totalVotes === 0) {
      return "0";
    } else {
      return ((parseInt(answer) / totalVotes) * 100).toFixed(0);
    }
  }

  return (
    <div className="flex content-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        {items.map((item) => (
          <div
            className="mb-4 mt-2 border-4 bg-white m-4 px-8 pt-6 pb-6 rounded-2xl flex flex-col justify-between"
            key={item.PollID}
          >
            <div className="flex flex-col h-full">
              <h2 className="font-bold flex-grow">{item.PollQuestion}</h2>
              <ul className="flex-col pt-2 list-none text-left text-sm flex-grow">
                <li
                  onClick={() => {
                    vote(parseInt(item.PollID), "PollAnswer1");
                  }}
                  className="flex hover:cursor-pointer hover:bg-emerald-300 justify-between items-end border-2 border-emerald-400 bg-emerald-100 m-2 rounded-lg p-2"
                >
                  {item.PollAnswer1}
                  <div className="self-end">
                    {votePercentage(item, item.Ans1Votes)}%
                  </div>
                </li>
                <li
                  onClick={() => {
                    vote(parseInt(item.PollID), "PollAnswer2");
                  }}
                  className="flex hover:cursor-pointer hover:bg-cyan-300 justify-between items-end border-2 border-cyan-400 bg-cyan-100 m-2 rounded-lg p-2"
                >
                  {item.PollAnswer2}
                  <div className="self-end">
                    {votePercentage(item, item.Ans2Votes)}%
                  </div>
                </li>
                {item.PollAnswer3 && (
                  <li
                    onClick={() => {
                      vote(parseInt(item.PollID), "PollAnswer3");
                    }}
                    className="flex hover:cursor-pointer hover:bg-blue-300 justify-between items-end border-2 border-blue-400 bg-blue-100 m-2 rounded-lg p-2"
                  >
                    {item.PollAnswer3}
                    <div className="self-end">
                      {votePercentage(item, item.Ans3Votes)}%
                    </div>
                  </li>
                )}
                {item.PollAnswer4 && (
                  <li
                    onClick={() => {
                      vote(parseInt(item.PollID), "PollAnswer4");
                    }}
                    className="flex hover:cursor-pointer hover:bg-violet-300  justify-between items-end border-2 border-violet-400 bg-violet-100 m-2 rounded-lg p-2"
                  >
                    {item.PollAnswer4}
                    <div className="self-end">
                      {votePercentage(item, item.Ans4Votes)}%
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <div className="flex pt-4 font-light text-xs justify-between items-end">
              <p className="self-start">ID: {item.PollID}</p>
              <p className="self-end">
                Total Votes:{" "}
                {item.Ans1Votes +
                  item.Ans2Votes +
                  item.Ans3Votes +
                  item.Ans4Votes}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PollData;

type PollData = {
  PollID: string;
  PollQuestion: string;
  PollAnswer1: string;
  Ans1Votes: string;
  PollAnswer2: string;
  Ans2Votes: string;
  PollAnswer3: string;
  Ans3Votes: string;
  PollAnswer4: string;
  Ans4Votes: string;
  PollTotalResponses: string;
};
