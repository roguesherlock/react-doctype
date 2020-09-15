import React from "react";

import userCircle from "../hooks/useCircle";

export default function Circle(props: any) {
  const { color, error, bindInput } = userCircle();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="max-w-md w-full">
        <div>
          <input
            placeholder="Enter color name to change circle's color"
            className="mt-4 border border-gray-300 bg-transparent shadow rounded-md p-4 max-w-md w-full mx-auto text-xl focus:outline-none focus:border-gray-500"
            {...bindInput}
          />
        </div>
        {error && (
          <p className="text-red-500">
            <i>{error}</i>
          </p>
        )}
      </div>
      <div
        className="mt-8 flex h-32 w-32 rounded-full"
        style={{ backgroundColor: color }}
      ></div>
      <p className="mt-2 text-sm text-gray-500">Current Color: {color}</p>
    </div>
  );
}
