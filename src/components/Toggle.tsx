import React, { isValidElement } from "react";
import { Switch } from "@chakra-ui/core";

export interface ToggleSwitchProps {
  on?: boolean;
  children: string;
}

// Wrap in fragments to return a string as a temporary fix for this issue: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20544
export const ToggleOn: React.FC<ToggleSwitchProps> = ({ on, children }) => {
  return <>{on ? children : null}</>;
};

export const ToggleOff: React.FC<ToggleSwitchProps> = ({ on, children }) => {
  return <>{on ? null : children}</>;
};

export type ToggleChildProps = ToggleSwitchProps | ToggleButtonProps;

export interface ToggleProps {
  children: React.ReactElement<ToggleChildProps> | React.ReactElement<ToggleChildProps>[];
}

export interface ToggleButtonProps {
  on?: boolean;
  toggle?: (event: React.MouseEvent<any, MouseEvent>) => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ on, toggle, ...props }) => {
  return <Switch isChecked={on} onChange={toggle} {...props}></Switch>;
};

export const Toggle: React.FC<ToggleProps> = ({ children }) => {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  const newChildren = React.Children.map(
    children,
    (child: React.ReactElement<ToggleChildProps>) => {
      if (isValidElement(child)) {
        return typeof child.type === "string" ? child : React.cloneElement(child, { on, toggle });
      }
      return null;
    }
  );
  return <>{newChildren}</>;
};
