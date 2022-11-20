import React, { useState, useEffect } from "react";

import { useTaskContext } from "../context/TaskContext";

import { TaskModalContainer } from "../style/Page";
import { FormContainer } from "../style/Container";

const TaskModal = () => {
  const { modal, onAddTask, onUpdateTask, onToggleModal } = useTaskContext();

  const [name, setName] = useState<string>("");

  useEffect(() => {
    if (modal.task) {
      setName(modal.task.name);
    }
  }, [modal]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (modal.task) {
      onUpdateTask(modal.task._id, {
        name,
      });
    } else {
      onAddTask(name);
    }
  };

  return (
    <TaskModalContainer>
      <div className="overlay-background" onClick={() => onToggleModal()} />
      <FormContainer>
        <form onSubmit={onSubmit}>
          <h3>{!!modal.task ? "Edit Task" : "+ New Task"}</h3>
          <input
            type="text"
            placeholder="Task Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          <button disabled={name.length === 0}>{!!modal.task ? "Update Task" : "+ New Task"}</button>
        </form>
      </FormContainer>
    </TaskModalContainer>
  );
};

export default TaskModal;
