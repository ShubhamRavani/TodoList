import React, { useRef, useState } from "react";

export default function AddList({ setList }) {
  const nameRef = useRef();
  const ageRef = useRef();
  const formRef = useRef();
  const [formErrors, setFormErrors] = useState({});

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     const id = Math.floor(Math.random() * 100);
  //     const name = event.target.elements.name.value;
  //     const creationDate = new Date().toLocaleDateString();
  //     const age = event.target.elements.age.value;
  //     const newlist = {
  //       id,
  //       name,
  //       age,
  //       creationDate,
  //     };
  //     setList((prevList) => {
  //       return prevList.concat(newlist);
  //     });
  //     nameRef.current.value = "";
  //     ageRef.current.value = "";
  //   }

  const validate = (event) => {
    event.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    let hasErrors = false;

    for (const [key, value] of formData.entries()) {
      if (!value) {
        alert(`${key} is required`);
        hasErrors = true;
        break;
      }
    }

    if (!hasErrors) {
      const id = Math.floor(Math.random() * 100);
      const name = event.target.elements.name.value;
      const creationDate = new Date().toLocaleDateString();
      const age = event.target.elements.age.value;
      const newlist = {
        id,
        name,
        age,
        creationDate,
      };
      setList((prevList) => {
        return prevList.concat(newlist);
      });
      nameRef.current.value = "";
      ageRef.current.value = "";
    }
  };

  return (
    <form className="addForm" ref={formRef} onSubmit={validate}>
      <input type="text" name="name" placeholder="Enter Name" ref={nameRef} />
      <p>{formErrors.name}</p>
      <input type="text" name="age" placeholder="Enter age" ref={ageRef} />
      <p>{formErrors.age}</p>
      <button type="submit">Add</button>
    </form>
  );
}
