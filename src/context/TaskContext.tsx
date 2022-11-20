import React, { useState, useEffect, useContext } from "react";

import TaskModal from "../components/TaskModal";

import {
  fetchDashboard,
  fetchTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../utils/api";

export const TaskContext = React.createContext<TaskContextProps>({
  tasks: [],
  latestTasks: [],
  taskCompleted: 0,
  totalTasks: 0,
  modal: {
    open: false,
    task: null,
  },
  onToggleModal: () => {},
  onAddTask: () => {},
  onUpdateTask: () => {},
  onDeleteTask: () => {},
});

export const useTaskContext = () => useContext(TaskContext);

const TaskProvider: React.FC<Props> = ({ children }) => {
  const [taskCompleted, setTaskCompleted] = useState<number>(0);
  const [totalTasks, setTotalTasks] = useState<number>(0);
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [latestTasks, setLatestTasks] = useState<TaskType[]>([]);

  const [modal, setModal] = useState<ModalType>({
    open: false,
    task: null,
  });

  useEffect(() => {
    getDashboard();
    getTasks();
  }, []);

  const getDashboard = async () => {
    try {
      const data = await fetchDashboard();

      setTaskCompleted(data.tasksCompleted);
      setTotalTasks(data.totalTasks);
      setLatestTasks(data.latestTasks);
    } catch (error) {
      alert(`ERROR: ${error}`);
    }
  };

  const getTasks = async () => {
    try {
      const data = await fetchTasks();

      setTasks(data.tasks);
    } catch (error) {
      alert(`ERROR: ${error}`);
    }
  };

  const onToggleModal = (task?: TaskType) => {
    setModal((prev) => ({
      open: !prev.open,
      task: task || null,
    }));
  };

  const onAddTask = async (name: string) => {
    try {
      const { task } = await addTask({ name });

      setTasks((prev) => [...prev, task]);
      setTotalTasks((prev) => prev + 1);
      if (latestTasks.length < 3) {
        setLatestTasks(prev => [task, ...prev])
      }
      setModal({
        open: false,
        task: null,
      });
    } catch (error) {
      alert(`ERROR: ${error}`);
    }
  };

  const onUpdateTask = async (id: string, body: UpdateTasksBodyType) => {
    try {
      const { task } = await updateTask(id, body);

      if (body.completed !== undefined && task.completed === body.completed) {
        setTaskCompleted((prev) => (body.completed ? prev + 1 : prev - 1));
      }

      setTasks((prev) =>
        prev.map((item) => {
          if (item._id === id) {
            return task;
          }
          return item;
        })
      );

      setLatestTasks((prev) =>
        prev.map((item) => {
          if (item._id === id) {
            return task;
          }
          return item;
        })
      );

      setModal({
        open: false,
        task: null,
      });
    } catch (error) {
      alert(`ERROR: ${error}`);
    }
  };

  const onDeleteTask = async (id: string) => {
    try {
      const { task } = await deleteTask(id);

      const newTasks = [...tasks].filter((item) => item._id !== id)

      setTasks(newTasks);
      setLatestTasks([...newTasks].reverse().slice(0, 3));
      setTotalTasks((prev) => prev - 1);

      if (task.completed) {
        setTaskCompleted((prev) => prev - 1);
      }
    } catch (error) {
      alert(`ERROR: ${error}`);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        latestTasks,
        taskCompleted,
        totalTasks,
        modal,
        onToggleModal,
        onAddTask,
        onUpdateTask,
        onDeleteTask,
      }}
    >
      {children}
      {modal.open && <TaskModal />}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
