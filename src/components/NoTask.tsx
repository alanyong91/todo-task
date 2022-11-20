import { useTaskContext } from "../context/TaskContext";

import { NoTaskContainer } from "../style/Container";

const NoTask: React.FC = () => {
  const { onToggleModal } = useTaskContext();
  
  return (
    <NoTaskContainer>
      <h3>You have no task</h3>
      <button onClick={() => onToggleModal()}>+ New Task</button>
    </NoTaskContainer>
  )
}

export default NoTask