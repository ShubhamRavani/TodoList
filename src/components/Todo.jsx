import React, { useState } from "react";
import AddList from "./AddList";
import EditList from "./EditList";

function Todo() {
  const list = [
    {
      id: 1,
      name: "Shubham",
      creationDate: "7/2/2023",
      age: "22",
    },
    {
      id: 2,
      name: "Ravani",
      creationDate: "7/2/2023",
      age: "24",
    },
  ];
  const [lists, setList] = useState(list);
  const [updateState, setUpdateState] = useState(-1);
  return (
    <div className="crud">
      <div>
        <AddList setList={setList} />
        <form onSubmit={handleSubmit}>
          <table>
            {lists.map((current) =>
              updateState === current.id ? (
                <EditList current={current} lists={lists} setList={setList} />
              ) : (
                <tr>
                  <td>{current.creationDate}</td>
                  <td>{current.name}</td>
                  <td>{current.age}</td>
                  <td>
                    <button
                      className="edit"
                      onClick={() => handleEdit(current.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete"
                      type="button"
                      onClick={() => handleDelete(current.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </table>
        </form>
      </div>
    </div>
  );

  function handleEdit(id) {
    setUpdateState(id);
  }
  function handleDelete(id) {
    const newlist = lists.filter((li) => li.id !== id);
    setList(newlist);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const age = event.target.elements.age.value;
    const newlist = lists.map((li) =>
      li.id === updateState ? { ...li, name: name, age: age } : li
    );

    setList(newlist);
    setUpdateState(-1);
  }
}

export default Todo;
