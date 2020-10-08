import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import { Toggle, ToggleOff, ToggleOn } from "./components/Toggle";
import { ToggleButton } from "./components/ToggleButton";

export default function App() {
  return (
    <ThemeProvider>
      <div>
        <Toggle>
          <ToggleOn>The button is on</ToggleOn>
          <ToggleOff>The button is on</ToggleOff>
          <ToggleButton></ToggleButton>
        </Toggle>
      </div>
    </ThemeProvider>
  );
}
