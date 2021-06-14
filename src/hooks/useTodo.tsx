import { createContext, ReactNode, useContext, useState } from "react";

interface Activity {
  activity: string;
}

interface TodoProviderProps {
  children: ReactNode;
}

interface TodoContextData {
  Todo: Activity[];
  addTodo: (activity: string) => Promise<void>;
  removeTodo: (index: number) => void;
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

export function TodoProvider({ children }: TodoProviderProps): JSX.Element {
  const [Todo, setTodo] = useState<Activity[]>(() => {
    const storagedTodo = localStorage.getItem("@Wefit:Todo");

    if (storagedTodo) {
      return JSON.parse(storagedTodo);
    }

    return [];
  });

  const addTodo = async (activity: string) => {
    const auxTodo = [...Todo];

    const newProduct = { activity: activity };
    auxTodo.push(newProduct);
    setTodo(auxTodo);
    localStorage.setItem("@Wefit:Todo", JSON.stringify(auxTodo));
  };

  const removeTodo = (index: number) => {
    const auxTodo = [...Todo];

    auxTodo.splice(index, 1);
    setTodo(auxTodo);
    localStorage.setItem("@Wefit:Todo", JSON.stringify(auxTodo));
  };

  return (
    <TodoContext.Provider value={{ Todo, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo(): TodoContextData {
  const context = useContext(TodoContext);

  return context;
}
