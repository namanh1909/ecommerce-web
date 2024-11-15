export type TodoData = {
  _id: string;
  todoName: string;
  isComplete: boolean;
  createdAt: string;
  updatedAt: string;
};


export type TodoDataMutation = Partial<
  Pick<TodoData, 'isComplete' | 'todoName'>
>;
