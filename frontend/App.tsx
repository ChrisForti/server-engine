import "./App.css";
import { ToDoListItem } from "./components/ToDoListItem";

function App() {
  return (
    <>
      <h1>To Do List</h1>
      <div>
        <li>
          <ToDoListItem isComplete={false}>
            Item 1: Set up personal hosting enviroment, via RPI technology.
            <ul>docker</ul>
            <ul>DNS</ul>
          </ToDoListItem>
          ;
        </li>
        <li>
          <ToDoListItem isComplete={false}>
            Item 2: Finish RPI time-lapse retrofit.<ul>Housing upgrade</ul>
            <ul>New camera</ul>
            <ul>You tube of the build</ul>
          </ToDoListItem>
          ;
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
        <li>
          <ToDoListItem isComplete={false}>Item 7</ToDoListItem>;
        </li>
      </div>
    </>
  );
}

export default App;
