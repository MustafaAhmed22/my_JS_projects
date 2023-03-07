import React, { useState } from "react";

function App() {
  let [todo, todofun] = useState();
  let [todo2, todofun2] = useState([]);

  function handlechange(e) {
    let newvalue = e.target.value;
    todofun(newvalue);
  }
  function clickToAddToDo() {
    return todofun2([...todo2, todo]);
  }
  function removetodo(index) {
    const newTodos = [...todo2];
    newTodos.splice(index, 1);
    todofun2(newTodos);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handlechange} />
        <button onClick={clickToAddToDo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {todo2?.length > 0 ? (
          <ul>
            {todo2.map((e, index) => {
              //console.log(todo2)
              //console.log(todo2)
              console.log(index);
              return (
                <div className="todo">
                  <li key={index}>{e}</li>
                  <button
                    onClick={() => {
                      removetodo(index);
                    }}
                  >
                    remove
                  </button>
                </div>
              );
            })}
          </ul>
        ) : (
          <h2>No tasks found </h2>
        )}
      </div>
    </div>
  );
}

export default App;
