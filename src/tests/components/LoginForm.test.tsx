import { render, screen } from "@testing-library/react";
import LoginForm from "@/components/LoginForm";

describe("LoginForm", () => {
  it("renders a heading", () => {
    render(<LoginForm />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
