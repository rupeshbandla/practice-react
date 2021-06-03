import "./App.css";
import React, { useEffect, useState } from 'react';
// import ChildToParent from "./components/ChildToParent";
// import DisplayContextData from "./components/DisplayContextData";
// import NewComponent from "./components/Hoc";
// import Parent from "./components/ParentToChild";
// import ParentToChild from "./components/ParentToChild1";
// import UseContextHook from "./components/UseContextHook";
// import UseEffectExample from "./components/UseEffectHook";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
// import CounterClass from "./components/CounterClass";
// import CounterFunction from "./components/CounterFuncion";
// import Greeting from "./components/Greeting";
// import MountAndUpdatePhase from "./components/MountAndUpdatePhase";
// import MountingState from "./components/MountingState";
// import UnmountPhase from "./components/UnmountPhase";
// import UpdatingPhase from "./components/UpdatingPhase";

function App() {
  const [ todoList, setToDoList ] = useState([]);

  useEffect((id)=>{
    let mapped = todoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  },[])

  const addTodo = (userInput ) => {
    let prevData = [...todoList];
    prevData = [...prevData, { id: todoList.length + 1, task: userInput }];
    setToDoList(prevData);
  }
  return (
    <div className="App">
      {/* <Greeting name="rupesh" />
      <MountingState />
      <UpdatingPhase color="black"/>
      <MountAndUpdatePhase />
      <UnmountPhase />
      <CounterFunction />
      <CounterClass /> */}
      {/* <Parent />
      <ChildToParent />
      <NewComponent message="Welcome to my world"/>
      <ParentToChild />
      <UseEffectExample />
      <UseContextHook />
      <DisplayContextData /> */}
      <h1>TODO APP</h1>
      <TodoForm addTask={addTodo}/>
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
