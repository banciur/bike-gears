import * as React from "react";
import { Button, Input, InputGroup, InputGroupAddon } from "reactstrap";

interface ListWithActionOnSideProps {
  header: string;
  arrayToDisplay: string[];
  clickHandlerGenerator: (index: number) => () => void;
  side: "left" | "right";
}

export const ListWithActionOnSide: React.FunctionComponent<ListWithActionOnSideProps> = ({
  header,
  arrayToDisplay,
  clickHandlerGenerator,
  side,
}) => (
  <>
    <h4>{header}</h4>
    {arrayToDisplay.map((element, index) => (
      <InputGroup key={index} size="sm" className="mb-2">
        {side === "left" && (
          <InputGroupAddon addonType="prepend">
            <Button onClick={clickHandlerGenerator(index)}>{"\u21d0"}</Button>
          </InputGroupAddon>
        )}
        <Input value={element} readOnly tabIndex={-1} />
        {side === "right" && (
          <InputGroupAddon addonType="prepend">
            <Button onClick={clickHandlerGenerator(index)}>{"\u21d2"}</Button>
          </InputGroupAddon>
        )}
      </InputGroup>
    ))}
  </>
);
