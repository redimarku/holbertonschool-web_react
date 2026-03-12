import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

test("renders notifications title", () => {
    render(<Notifications />);
    const title = screen.getByText(/here is the list of notifications/i);
    expect(title).toBeInTheDocument();
});

test("renders close button", () => {
    render(<Notifications />);
    const button = screen.getByRole("button", { name: /close/i });
    expect(button).toBeInTheDocument();
});

test("renders 3 list items", () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
});

test("clicking close button logs to console", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(<Notifications />);
    const button = screen.getByRole("button", { name: /close/i });
    fireEvent.click(button);
    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");
    consoleSpy.mockRestore();
});