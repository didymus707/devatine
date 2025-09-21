import React, { useState } from "react";
import type { Block, Task } from "./types";
import { Add } from "./primitives/icons";

export const BlockForm = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
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
    };
  };

  return (
    <>
      <div className="block-form-container">
        <div className="block-form-card mx-auto border-gray-50">
          <div className="form-head">
            <div
              className="flex bg-black p-3 rounded-lg mt-2 align-center"
              onClick={() => {}}
            >
              <Add size="1.4em" color={"white"} classNames={["mr-4"]} />
              <p className="text-md text-white pr-2">
                Create Your First Time Block
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="block-name">Session Name</label>
              <input
                type="text"
                id="block-name"
                value={sessionName}
                onChange={(e) => setSessionName(e.target.value)}
                placeholder="e.g., Morning Study Block,Study Session"
              />
            </div>

            <div className="duration-wrapper flex space-between">
              <div className="hours">
                <label htmlFor="total-session-duration">Total Hours</label>
                <input
                  type="number"
                  id="total-session-duration"
                  min="0"
                  max="23"
                  value={sessionHours}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSessionHours(val === "" ? undefined : Number(val));
                  }}
                />
              </div>
              <div className="minutes">
                <label htmlFor="total-session-minutes">Total Minutes</label>
                <input
                  type="number"
                  id="total-session-minutes"
                  min="0"
                  max="59"
                  value={sessionMinutes}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSessionMinutes(val === "" ? undefined : Number(val));
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
