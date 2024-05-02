import "./App.css";
import { ToDoListItem } from "./components/ToDoListItem";

function App() {
  return (
    <>
      <h1>To Do List</h1>
      <div>
        <li>
          <ToDoListItem isComplete={false}>Item 1</ToDoListItem>;
        </li>
        <li>
          <ToDoListItem isComplete={false}>Item 2</ToDoListItem>;
        </li>
        <li>
          <ToDoListItem isComplete={false}>Item 3</ToDoListItem>;
        </li>
        <li>
          <ToDoListItem isComplete={false}>Item 4</ToDoListItem>;
        </li>
        <li>
          <ToDoListItem isComplete={false}>Item 5</ToDoListItem>;
        </li>
        <li>
          <ToDoListItem isComplete={false}>Item 6</ToDoListItem>;
        </li>
        <li></li>
      </div>
    </>
  );
}

export default App;
