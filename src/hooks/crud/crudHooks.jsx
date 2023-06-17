import { createContext, useState } from "react";

export const CRUD = createContext();
export const CRUDProvider = ({ children }) => {
  let lastTooDo = () => {
    let localData = localStorage.getItem("lastTooDo");
    let localToodo = JSON.parse(localData);
    return localToodo;
  };
  const [toodos, settoodos] = useState(lastTooDo() ? lastTooDo() : []);
  const [toodo, settoodo] = useState({});
  const [edit, setedit] = useState(false);
  const [etiting, setetiting] = useState({});
  const [checkBox, setcheckBox] = useState(false);
  const [checkBoxobg, setcheckBoxobg] = useState({});
  return (
    <CRUD.Provider
      value={[
        { toodos, settoodos },
        { toodo, settoodo },
        { etiting, setetiting },
        { edit, setedit },
        { checkBox, setcheckBox },
        {checkBoxobg, setcheckBoxobg}
      ]}
    >
      {children}
    </CRUD.Provider>
  );
};
