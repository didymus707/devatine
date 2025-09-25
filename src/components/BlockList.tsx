import React, { useState } from "react";
import type { Block, Task } from "./types";

export const BlockList = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);

const addTasksToBlock = (blockId: string, task: Task) => {
    setBlocks((prevBlock) =>
      prevBlock.map((block) =>
        block.id === blockI
          ? { ...block, tasks: [...block.tasks, task] }
          : block
      )
    );
  };

  return (
    <>
      <div className="block-list-container">

      </div>
    </>
  );
};
