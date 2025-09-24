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
      tasks: tasks || [],
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
                  <label htmlFor="block-name" className="text-lg font-medium">
                    Session Name
                  </label>
                  <input
                    type="text"
                    id="block-name"
                    value={sessionName}
                    onChange={(e) => setSessionName(e.target.value)}
                    placeholder="e.g., Morning Study Block, Evening Rroutine"
                    className="bg-gray-100 rounded-md p-2 mt-2 focus:border-4 focus:border-gray-300 focus:outline-gray-300"
                  />
                </div>
              </div>

              <div className="duration-wrapper flex justify-between w-full my-8 text-lg font-medium">
                <div className="hours flex flex-col w-[49%] ">
                  <label htmlFor="total-session-duration">Total Hours</label>
                  <input
                    min="0"
                    max="23"
                    type="number"
                    value={sessionHours}
                    id="total-session-duration"
                    className="bg-gray-100 rounded-md p-2 mt-2 focus:border-4 focus:border-gray-300 focus:outline-gray-300"
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
                    className="bg-gray-100 rounded-md p-2 mt-2 focus:border-4 focus:border-gray-300 focus:outline-gray-300"
                    placeholder="0"
                    onChange={(e) => {
                      const val = e.target.value;
                      setSessionMinutes(val === "" ? undefined : Number(val));
                    }}
                  />
                </div>
              </div>

              {/* if no block exist, add the tasks, then on creating a block, 
              add block id into the tasks associated with it */}
              {blocks.length === 0 && (
                <TaskForm
                  blockId={blocks[0]?.id || ""}
                  addTasks={addTasksToBlock}
                />
              )}

              {/* if a block exist, add the task to the block */}
              <>
                {blocks.map((block) => (
                  <div className="blocklist-wrapper" key={block.id}>
                    <TaskForm blockId={block.id} addTasks={addTasksToBlock} />
                  </div>
                ))}
              </>

              <div className="create-session-container mt-4">
                <div className="create-session-container w-full">
                  <button
                    type="submit"
                    disabled={
                      !sessionName || (!sessionHours && !sessionMinutes)
                    }
                    className="create-session-btn bg-black text-white text-md p-2 rounded-lg w-full disabled:bg-gray-500 disabled:cursor-not-allowed"
                  >
                    Create Session
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
