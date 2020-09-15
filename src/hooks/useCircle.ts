import { useCallback, useReducer, useRef } from "react";

const isColor = (strColor: string) => {
  const colorString = strColor.toLowerCase();
  const s = new Option().style;
  s.color = colorString;
  return s.color === colorString;
};

type CircleState = {
  color: string;
  error: string;
};

type CircleActions = { type: string; value: string };

const circleReducer = (state: CircleState, action: CircleActions) => {
  switch (action.type) {
    case "show": {
      let color = action.value;
      if (isColor(color)) return { ...state, color, error: "" };
      return { ...state, error: "Invalid Color!" };
    }
    default:
      return state;
  }
};

const initialCircleState: CircleState = {
  color: "black",
  error: "",
};

export default function useInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [state, dispatch] = useReducer(circleReducer, initialCircleState);

  return {
    color: state.color,
    error: state.error,
    bindInput: {
      ref: inputRef,
      onKeyPress: useCallback(
        (event: any) => {
          if (event.key === "Enter") {
            dispatch({ type: "show", value: inputRef!.current!.value });
            inputRef!.current!.value = "";
            inputRef?.current?.focus();
          }
        },
        [dispatch]
      ),
    },
  } as const;
}
