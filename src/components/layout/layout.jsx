// import { useState } from "react";
import { useContext } from "react";
import { CRUD } from "../../hooks/crud/CRUDhooks";
import { AddToDo } from "../addTooDo";
import { TooDoList } from "../tooDoList";
import "./layout.scss";


export const Layout = () => {
  const [{ toodos, settoodos }] = useContext(CRUD);
  return (
    <>
      <div className="container">
        <h2>TOO DO</h2>
        <AddToDo />
        <TooDoList allTooDo={{ toodos, settoodos }}></TooDoList>
      </div>
      
    </>
  );
};
