"use client";

import React, { useState, useEffect } from "react";

interface PollItem {
  pollID: number;
  pollQuestion: string;
  pollAnswer1: string;
  ans1Votes: number;
  pollAnswer2: string;
  ans2Votes: number;
  pollAnswer3: string;
  ans3Votes: number;
  pollAnswer4: string;
  ans4Votes: number;
  pollTotalResponses: number;
}

const TopPerformer: React.FC = () => {
  const [topItem, setTopItem] = useState<PollItem | null>(null);
  const url = "http://13.40.182.181:8080/polldata";

  useEffect(() => {
    fetch(url)
      .then((results) => results.json())
      .then((data: PollItem[]) => {
        const maxResponsesItem = data.reduce((maxItem, currentItem) => {
          return currentItem.pollTotalResponses > maxItem.pollTotalResponses
            ? currentItem
            : maxItem;
        }, data[0]);

        setTopItem(maxResponsesItem);
      });
  }, []);

  if (!topItem) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex content-center justify-center">
        <div className="">
          <div
            className="mb-4 mt-2 border-4 border-rose-500 bg-white m-4 px-8 pt-6 pb-6 rounded-2xl flex flex-col justify-between"
            key={topItem.pollID}
          >
            <h1 className="text-xl text-center font-bold decoration-4 pb-4">
              Top Performer:
            </h1>
            <div className="flex flex-col h-full">
              <h2 className="font-bold flex-grow">{topItem.pollQuestion}</h2>
              <ul className="flex-col pt-2 list-none text-left text-sm flex-grow">
                <li className="flex justify-between items-end border-2 border-emerald-400 bg-emerald-100 m-2 rounded-lg p-2">
                  {topItem.pollAnswer1}
                  <div className="self-end">
                    {(
                      (topItem.ans1Votes / topItem.pollTotalResponses) *
                      100
                    ).toFixed(0)}
                    %
                  </div>
                </li>
                <li className="flex justify-between items-end border-2 border-cyan-400 bg-cyan-100 m-2 rounded-lg p-2">
                  {topItem.pollAnswer2}
                  <div className="self-end">
                    {(
                      (topItem.ans2Votes / topItem.pollTotalResponses) *
                      100
                    ).toFixed(0)}
                    %
                  </div>
                </li>
                <li className="flex justify-between items-end border-2 border-blue-400 bg-blue-100 m-2 rounded-lg p-2">
                  {topItem.pollAnswer3}
                  <div className="self-end">
                    {(
                      (topItem.ans3Votes / topItem.pollTotalResponses) *
                      100
                    ).toFixed(0)}
                    %
                  </div>
                </li>
                <li className="flex justify-between items-end border-2 border-violet-400 bg-violet-100 m-2 rounded-lg p-2">
                  {topItem.pollAnswer4}
                  <div className="self-end">
                    {(
                      (topItem.ans4Votes / topItem.pollTotalResponses) *
                      100
                    ).toFixed(0)}
                    %
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex pt-4 font-light text-xs justify-between items-end">
              <p className="self-start">ID: {topItem.pollID}</p>
              <p className="self-end">
                Total Votes: {topItem.pollTotalResponses}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPerformer;
