import { useTaskContext } from "../context/TaskContext";

import Overview from "./Overview";
import TaskTable from "./TaskTable";
import NoTask from "./NoTask";

const Dashboard = () => {
  const { totalTasks } = useTaskContext();

  return (
    <div>
      {totalTasks !== 0 ? (
        <>
          <Overview />
          <TaskTable />
        </>
      ) : (
        <NoTask />
      )}
    </div>
  );
};

export default Dashboard;
