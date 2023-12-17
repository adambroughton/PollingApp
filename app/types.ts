export type PollData = {
  PollID?: string;
  PollQuestion: string;
  PollAnswer1: string;
  Ans1Votes?: string;
  PollAnswer2: string;
  Ans2Votes?: string;
  PollAnswer3: string;
  Ans3Votes?: string;
  PollAnswer4: string;
  Ans4Votes?: string;
  PollTotalResponses?: string;
};

export type PollVoteRequest = {
  PollID: number;
  UsersAnswer: string;
};
