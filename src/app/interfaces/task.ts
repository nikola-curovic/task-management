export interface ITask {
  id: string;
  title: string;
  completed: boolean;
}

export interface IResponse {
  tasks: ITask[];
}