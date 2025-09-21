export interface Block {
  id: string;
  name: string;
  duration: number;
  tasks: Task[];
  complteted: boolean;
}

export interface Task {
  id: string;
  name: string;
  duration: number;
  completed: boolean;
}
