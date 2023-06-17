import { useContext } from "react";
import { CRUD } from "../../hooks/crud/CRUDhooks";
import { TooDo } from "../tooDo/tooDo.component";

export const TooDoList = () => {
  const [{ toodos }] = useContext(CRUD);

  return (
    <>
      <ul className="tooDoList" style={{ listStyle: "none" }}>
        {toodos.map((toodo) => (
          <TooDo toodo={toodo} ></TooDo>
        ))}
      </ul>
    </>
  );
};
