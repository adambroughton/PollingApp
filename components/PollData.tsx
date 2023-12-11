"use client";
import React, { useState, useEffect } from "react";

const PollData = () => {
  const [items, setItems] = useState([]);
  const url = "http://localhost:5041/polldata";

  useEffect(() => {
    fetch(url)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className="flex content-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        {items.map((item: any) => (
          <div
            className="mb-4 mt-2 border-4 bg-white m-4 px-8 pt-6 pb-6 rounded-2xl flex flex-col justify-between"
            key={item.pollID}
          >
            <div className="flex flex-col h-full">
              <h2 className="font-bold flex-grow">{item.pollQuestion}</h2>
              <ul className="flex-col pt-2 list-none text-left text-sm flex-grow">
                <li className="flex justify-between items-end border-2 border-emerald-400 bg-emerald-100 m-2 rounded-lg p-2">
                  {item.pollAnswer1}
                  <div className="self-end">
                    {(
                      (parseInt(item.ans1Votes, 10) /
                        parseInt(item.pollTotalResponses, 10)) *
                      100
                    ).toFixed(0)}
                    %
                  </div>
                </li>
                <li className="flex justify-between items-end border-2 border-cyan-400 bg-cyan-100 m-2 rounded-lg p-2">
                  {item.pollAnswer2}
                  <div className="self-end">
                    {(
                      (parseInt(item.ans2Votes, 10) /
                        parseInt(item.pollTotalResponses, 10)) *
                      100
                    ).toFixed(0)}
                    %
                  </div>
                </li>
                <li className="flex justify-between items-end border-2 border-blue-400 bg-blue-100 m-2 rounded-lg p-2">
                  {item.pollAnswer3}
                  <div className="self-end">
                    {(
                      (parseInt(item.ans3Votes, 10) /
                        parseInt(item.pollTotalResponses, 10)) *
                      100
                    ).toFixed(0)}
                    %
                  </div>
                </li>
                <li className="flex justify-between items-end border-2 border-violet-400 bg-violet-100 m-2 rounded-lg p-2">
                  {item.pollAnswer4}
                  <div className="self-end">
                    {(
                      (parseInt(item.ans4Votes, 10) /
                        parseInt(item.pollTotalResponses, 10)) *
                      100
                    ).toFixed(0)}
                    %
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex pt-4 font-light text-xs justify-between items-end">
              <p className="self-start">ID: {item.pollID}</p>
              <p className="self-end">Total Votes: {item.pollTotalResponses}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PollData;
