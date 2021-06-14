import { TodoProvider } from "./hooks/useTodo";
import Home from "./pages/Home";

export default function App() {
  return (
    <TodoProvider>
      <Home />
    </TodoProvider>
  );
}
