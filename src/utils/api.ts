import axios from "axios";
import TaskCookie from "./cookie";

const API_URL: string =
  process.env.REACT_APP_API_URL || "https://dev-dl.tdcx.com:3092";
const API_KEY: string = process.env.REACT_APP_API_KEY || "828ed20c8e4d828e";

export const loginApi = async (body: LoginBodyType): Promise<LoginResponseType>  => {
  const cookie = new TaskCookie();

  const { data }: any = await axios.post(`${API_URL}/login`, {
    name: body.name,
    apiKey: API_KEY,
  });


  cookie.storeToken(data.token.token);
  cookie.storeUserName(data.token.name);

  return {
    ...data,
    image: `${API_URL}${data.image}`
  };
};


export const fetchDashboard = async (): Promise<DashboardResponseType> => {
  const cookie = new TaskCookie();
  const token = cookie.getToken()

  const { data }: any = await axios.get(`${API_URL}/dashboard`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });


  return data
}

export const fetchTasks = async (): Promise<TasksResponseType> => {
  const cookie = new TaskCookie();
  const token = cookie.getToken()

  const { data }: any = await axios.get(`${API_URL}/tasks`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });


  return data
}

export const addTask = async (body: AddTasksBodyType): Promise<AddTaskResponseType> => {
  const cookie = new TaskCookie();
  const token = cookie.getToken()

  const { data }: any = await axios.post(`${API_URL}/tasks`, body, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });


  return data
}

export const updateTask = async (id: string, body: UpdateTasksBodyType): Promise<UpdateTaskResponseType> => {
  const cookie = new TaskCookie();
  const token = cookie.getToken()

  const { data }: any = await axios.put(`${API_URL}/tasks/${id}`, body, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });


  return data
}

export const deleteTask = async (id: string): Promise<DeleteTaskResponseType> => {
  const cookie = new TaskCookie();
  const token = cookie.getToken()

  const { data }: any = await axios.delete(`${API_URL}/tasks/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });


  return data
}