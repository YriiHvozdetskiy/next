import { useEffect, useState } from "react";

import { useStore } from "@/zustand/store";

// https://youtu.be/fZPgBnL2x-Q?list=PLghXKtwd8hBUWmvfi3JeN7gGvgWFu8t7q

export const Task = ({ title }) => {
  const [color, setColor] = useState("gray");
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title),
  );

  const possible = ["bg-gray-400", "bg-green-400", "bg-red-400"];

  useEffect(() => {
    if (task.state === "Planned") setColor("gray");
    if (task.state === "Ongoing") setColor("red");
    if (task.state === "Done") setColor("green");
  }, []);

  return (
    <>
      <div
        className={
          "bg-white  justify-between rounded-sm min-h-[5rem] text-black p-0.5 flex flex-col"
        }
      >
        {title}
        <div className={"flex justify-between"}>
          <div></div>
          <div className={`text-sm p-1 bg-${color}-400 rounded`}>
            {task.state}
          </div>
        </div>
      </div>
    </>
  );
};
