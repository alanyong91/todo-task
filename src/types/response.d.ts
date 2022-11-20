// LOGIN
type LoginBodyType = {
  userId: string;
  name: string;
}

interface LoginResponseType {
  image: string;
  token: {
    name: string;
    token: string;
  }
}

// TASK
type TaskType = {
  _id: string;
  name: string;
  completed: boolean
}

// FETCH DASHBOARD
interface DashboardResponseType {
  latestTasks: TaskType[];
  tasksCompleted: number;
  totalTasks: number;
}

// FETCH TASKS
type TasksResponseType = {
  tasks: TaskType[]
}

// ADD TASK
type AddTasksBodyType = {
  name: string;
}

type AddTaskResponseType = {
  task: TaskType
}

// UPDATE TASK
type UpdateTasksBodyType = {
  name?: string;
  completed?: boolean
}

type UpdateTaskResponseType = {
  task: TaskType
}

// DELETE TASK
type DeleteTaskResponseType = {
  task: TaskType
}