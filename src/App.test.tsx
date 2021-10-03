import { render } from "@testing-library/react";

import App from "./App";

test("renders learn react link", () => {
  const { getByLabelText } = render(<App />);
  const inputElement = getByLabelText(/^Name \(/) as HTMLInputElement;

  expect(inputElement.value).toBe("Foo");

  expect(inputElement).toBeInTheDocument();
});
