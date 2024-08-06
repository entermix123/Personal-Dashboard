import { cleanup } from "@testing-library/react"
import { afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

afterEach(() => {                   // after every test call this function
    cleanup();                      // cleans up any leftover resources
});