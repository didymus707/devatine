import React, { useState } from "react";
import { Add } from "./primitives/icons";
import type { Block, Task } from "../types";
import TaskForm from "./taskform";

interface BlockFormProps {
  addBlock: (newBlock: Block) => void;
}

export const BlockForm: React.FC<BlockFormProps> = ({
  addBlock,
}: BlockFormProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showTask, setShowTask] = useState<boolean>(false);
  const [sessionEnded, setSessionEnded] = useState<boolean>(false);
  const [sessionName, setSessionName] = useState<string | undefined>("");
  const [sessionHours, setSessionHours] = useState<string | undefined>(
    undefined
  );
  const [sessionMinutes, setSessionMinutes] = useState<string | undefined>(
    undefined
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission

    const blockId = crypto.randomUUID();

    const tasksWithBlockId = tasks.map((task) => ({ ...task, id: blockId }));

    const totalDuration =
      Number(sessionHours)! * 60 + (Number(sessionMinutes) || 0);
    const newBlock: Block = {
      id: blockId,
      name: sessionName || "Untitled Block",
      duration: totalDuration,
      tasks: tasksWithBlockId,
      completed: sessionEnded,
    };

    addBlock(newBlock);
    // reset form fields
    setSessionName("");
    setSessionHours("");
    setSessionMinutes("");
    setTasks([]);
    setShowTask(false);
    setSessionEnded(false);
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
                    onChange={(e) => setSessionHours(e.target.value || "")}
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
                    onChange={(e) => setSessionMinutes(e.target.value || "")}
                  />
                </div>
              </div>

              <div className="tasks-choice-container flex justify-between items-center">
                <div className="task-setup">
                  <p className="text-md text-lg font-medium">Task Setup</p>
                  <span className="text-sm text-gray-500">Add tasks later</span>
                </div>

                <div className="toggle-switch w-[23%] flex justify-between items-center text-md">
                  <label htmlFor="switch-tasks">Add later</label>
                  <input
                    type="checkbox"
                    id="switch-tasks"
                    role="switch"
                    checked={showTask}
                    onChange={() => setShowTask(!showTask)}
                    className="relative h-6 w-12 appearance-none rounded-full bg-neutral-300 transition-colors duration-300 
                              before:pointer-events-none before:absolute before:h-6 before:w-6 before:rounded-full before:content-['']
                              after:absolute after:z-[2] after:mt-[0.1rem] after:ml-[0.1rem]
                              after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform after:duration-300 after:content-['']
                            checked:bg-black checked:after:translate-x-6
  "
                  />
                  <label htmlFor="switch-tasks">Add now</label>
                </div>
              </div>

              <div className="tasks-container">
                <div className="tasks-wrapper">
                  {showTask && <TaskForm setTasks={setTasks} />}
                </div>

                <div className="tasklist-wrapper">
                  {tasks.length > 0 && (
                    <>
                      <ul className="tasklist">
                        {tasks.map((task) => (
                          <li key={task.id}>{task.name}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>

              <div className="create-session-container mt-4">
                <div className="create-session-container w-full">
                  <button
                    type="submit"
                    disabled={
                      !sessionName || (!sessionHours && !sessionMinutes)
                    }
                    className="create-session-btn bg-black text-white text-md p-2 rounded-lg w-full disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed"
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
