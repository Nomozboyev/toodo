import { CheckBox } from "./checkBox";
import { DeletBtn } from "./deleteBtn";
import { EditBtn } from "./editeBtn";
import "./tooDo.scss";

export const TooDo = ({ toodo }) => {
  let id = toodo.id;
  let text = toodo.text;
   

  return (
    <> 
      <li id={id} key={id} className="toodoo" >
        <CheckBox toodo={toodo} />
        <p>{text} </p>

        <EditBtn toodo={toodo} />
         

        <DeletBtn id={id} />
      </li>
    </>
  );
};
