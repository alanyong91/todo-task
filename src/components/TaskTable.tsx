import { useState, useEffect } from "react";
import classNames from "classnames";

import { useTaskContext } from "../context/TaskContext";
import { Container } from "../style/Container";
import { TaskTableContainer } from "../style/Page";

import { EditIcon, DeleteIcon } from "../static/icons";

const TaskTable: React.FC = () => {
  const { tasks, onToggleModal, onUpdateTask, onDeleteTask } = useTaskContext();

  const [searchKeyword, setSearchKeywords] = useState<string>("");
  const [filteredTasks, setFilteredTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    onFilterTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks, searchKeyword]);

  const onToggleCompleteTask = (id: string, completed: boolean) =>
    onUpdateTask(id, {
      completed,
    });

  const onFilterTask = () => {
    let filtered: TaskType[] =
      searchKeyword !== ""
        ? tasks.reduce((acc: TaskType[], task) => {
            if (task.name.search(searchKeyword) !== -1) {
              acc.push(task);
            }

            return acc;
          }, [])
        : tasks;

    setFilteredTasks(filtered);
  };

  return (
    <Container>
      <TaskTableContainer>
        <div className="table-header">
          <h3>Tasks</h3>
          <div className="table-cta">
            <input
              type="text"
              placeholder="Search by task name"
              onChange={(e) => setSearchKeywords(e.target.value)}
            />
            <button onClick={() => onToggleModal()}>+ New Task</button>
          </div>
        </div>

        <div className="table">
          {filteredTasks.length > 0 ? filteredTasks.map((task) => (
            <div key={task._id} className="task">
              <div
                className={classNames({
                  item: true,
                  completed: task.completed,
                })}
                onClick={() => onToggleCompleteTask(task._id, !task.completed)}
              >
                <div className="checkbox" />
                <div className="name">
                  <span>{task.name}</span>
                </div>
              </div>
              <div className="cta">
                <div className="btn" onClick={() => onToggleModal(task)}>
                  <EditIcon />
                </div>
                <div className="btn" onClick={() => onDeleteTask(task._id)}>
                  <DeleteIcon />
                </div>
              </div>
            </div>
          )) : <div className="no-task">No task</div>}
        </div>
      </TaskTableContainer>
    </Container>
  );
};

export default TaskTable;
