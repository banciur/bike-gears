// TODO: I need better name for it :)
import * as React from "react";

interface ClickableSomethingProps {
  arrayToDisplay: string[];
  clickHandlerGenerator: any;
}

export const ClickableSomething: React.FunctionComponent<ClickableSomethingProps> = ({
  arrayToDisplay,
  clickHandlerGenerator,
}) => (
  <>
    {arrayToDisplay.map((element, index) => (
      <div key={index} onClick={clickHandlerGenerator(index)}>
        {element}
      </div>
    ))}
  </>
);
