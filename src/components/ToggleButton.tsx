import { Switch } from "@chakra-ui/core";
import React from "react";

export interface ToggleButtonProps {
  on?: boolean;
  toggle?: (event: React.MouseEvent<any, MouseEvent>) => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ on, toggle, ...props }) => {
  return <Switch isChecked={on} onChange={toggle} {...props}></Switch>;
};
