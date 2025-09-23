import React, { useState } from "react";
import type { Block, Task } from "./types";
import { Add } from "./primitives/icons";
import TaskForm from "./taskform";

export const BlockForm = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [sessionEnded, setSessionEnded] = useState<boolean>(false);
  const [sessionName, setSessionName] = useState<string | undefined>("");
  const [sessionHours, setSessionHours] = useState<number | undefined>(
    undefined
  );
  const [sessionMinutes, setSessionMinutes] = useState<number | undefined>(
    undefined
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission

    const totalDuration = sessionHours! * 60 + (sessionMinutes || 0);
    const newBlock: Block = {
      id: crypto.randomUUID(),
      name: sessionName || "Untitled Block",
      duration: totalDuration,
      tasks: tasks,
      completed: sessionEnded,
    };
    setBlocks([...blocks, newBlock]);
    setSessionName("");
    setSessionHours(undefined);
    setSessionMinutes(undefined);
    setTasks([]);
    setSessionEnded(false);
  };

  const addTasksToBlock = (blockId: string, task: Task) => {
    setBlocks((prevBlock) =>
      prevBlock.map((block) =>
        block.id === blockId
          ? { ...block, tasks: [...block.tasks, task] }
          : block
      )
    );
  };

  return (
    <>
      <div className="block-form-container">
        <div className="block-form-wrapper flex justify-center">
          <div className="bock-form-card border-2 border-gray-200 rounded-xl p-6 w-1/2">
            <div className="form-header my-4">
              <div className="flex rounded-lg items-center" onClick={() => {}}>
                <Add size="1.4em" color={"black"} classNames={["mr-4"]} />
                <p className="text-xl">Create Your First Time Block</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="block-name-wrapper flex flex-col">
                  <label htmlFor="block-name" className="text-md font-medium">
                    Session Name
                  </label>
                  <input
                    type="text"
                    id="block-name"
                    value={sessionName}
                    onChange={(e) => setSessionName(e.target.value)}
                    placeholder="e.g., Morning Study Block, Evening Rroutine"
                    className="bg-gray-100 rounded-md p-2 mt-1"
                  />
                </div>
              </div>

              <div className="duration-wrapper flex justify-between w-full my-4">
                <div className="hours flex flex-col w-[49%]">
                  <label htmlFor="total-session-duration">Total Hours</label>
                  <input
                    min="0"
                    max="23"
                    type="number"
                    value={sessionHours}
                    id="total-session-duration"
                    className="bg-gray-100 rounded-md p-2 mt-1"
                    placeholder="2"
                    onChange={(e) => {
                      const val = e.target.value;
                      setSessionHours(val === "" ? undefined : Number(val));
                    }}
                  />
                </div>
                <div className="minutes flex flex-col w-[49%]">
                  <label htmlFor="total-session-minutes">Total Minutes</label>
                  <input
                    type="number"
                    id="total-session-minutes"
                    min="0"
                    max="59"
                    value={sessionMinutes}
                    className="bg-gray-100 rounded-md p-2 mt-1"
                    placeholder="0"
                    onChange={(e) => {
                      const val = e.target.value;
                      setSessionMinutes(val === "" ? undefined : Number(val));
                    }}
                  />
                </div>
              </div>

              <>
                {blocks.map((block) => (
                  <div className="blocklist-wrapper" key={block.id}></div>
                ))}
              </>

              <div className="start-session">
                <button className="start-session-btn" type="submit">
                  Create Session
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
