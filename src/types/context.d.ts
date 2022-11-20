type UserInfoType = {
  imageProfile: string;
  name: string;
}

interface AuthenticationContextProps {
  loading: boolean;
  userInfo: UserInfoType | null;
  onLogin: (body: LoginBodyType) => Promise<void>
  onLogout: VoidFunction
};

type ModalType = {
  open: boolean;
  task: TaskType | null
}

interface TaskContextProps {
  tasks: TaskType[];
  latestTasks: TaskType[];
  taskCompleted: number; 
  totalTasks: number;
  modal: ModalType;
  onToggleModal: (data?: TaskType) => void;
  onAddTask: (name: string) => void;
  onUpdateTask: (id: string, body: UpdateTasksBodyType) => void;
  onDeleteTask: (id: string) => void;
}