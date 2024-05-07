import { expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import * as jestDom from '@testing-library/jest-dom';
import RedBook from "../components/RedBook"; // Adjust path based on your location
import { book_red } from "../assets/images"; // Assuming it's an image import

expect.extend(jestDom);
test('renders RedBook component with image', () => {
  render(<RedBook />);

  const image = screen.getByAltText('book');

  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', book_red); // Verify src matches imported image
  expect(image).toHaveAttribute('width', '500');  // Check if width attribute is set
});