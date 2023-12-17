import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CreatePoll from "./create-poll";

jest.mock("node-fetch");

describe("CreatePoll component", () => {
  it("should submit form successfully", async () => {
    const mockFetch = jest.fn(() => Promise.resolve());
    (global as any).fetch = mockFetch;

    const { getByLabelText, getByText } = render(<CreatePoll />);

    // Fill in the form
    fireEvent.change(getByLabelText("New Poll"), {
      target: { value: "Test question" },
    });
    fireEvent.change(getByLabelText("Option 1"), {
      target: { value: "Option 1" },
    });
    fireEvent.change(getByLabelText("Option 2"), {
      target: { value: "Option 2" },
    });

    // Submit the form
    fireEvent.submit(getByText("Create Poll"));

    // Wait for fetch to be called and form submission to complete
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        "http://0.0.0.0:8080/addpolldata",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            PollQuestion: "Test question",
            PollAnswer1: "Option 1",
            PollAnswer2: "Option 2",
            PollAnswer3: "",
            PollAnswer4: "",
          }),
        }
      );
    });

    // Check if the page is redirected
    expect(window.location.href).toBe("/live-polls");
  });
});
