import classNames from "classnames";

import { useTaskContext } from "../context/TaskContext";

import {
  Container,
  TaskCompletedContainer,
  LatestTasksContainer,
} from "../style/Container";
import { OverviewContainer } from "../style/Page";

const Overview = () => {
  const { taskCompleted, totalTasks, latestTasks } = useTaskContext();

  return (
    <Container>
      <OverviewContainer>
        <TaskCompletedContainer>
          <h3>Tasks Completed</h3>
          <div className="number">
            <div className="completed">{taskCompleted}</div>{" "}
            <div className="total">/ {totalTasks}</div>
          </div>
        </TaskCompletedContainer>

        <LatestTasksContainer>
          <h3>Latest Created Tasks</h3>
          <ul>
            {latestTasks.map((task) => (
              <li
                key={task._id}
                className={classNames({ completed: task.completed })}
              >
                {task.name}
              </li>
            ))}
          </ul>
        </LatestTasksContainer>
      </OverviewContainer>
    </Container>
  );
};

export default Overview;
