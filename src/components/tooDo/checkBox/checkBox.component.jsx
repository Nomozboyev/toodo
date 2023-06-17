import { Checkbox } from "@mui/material";
import { useContext, useEffect } from "react";
import { CRUD } from "../../../hooks/crud/CRUDhooks";

export const CheckBox = ({ toodo }) => {
  const [{ toodos, settoodos }, , , , { checkBox, setcheckBox },{checkBoxobg, setcheckBoxobg}] = useContext(CRUD);
 useEffect(()=>
 {
   let allChecked=toodos.map((tooDo)=>checkBoxobg.id==tooDo.id?checkBoxobg:tooDo)
   settoodos(allChecked)
 }, [checkBoxobg]);
  const checked = () => {
    setcheckBox(!checkBox)
    setcheckBoxobg({...toodo, checked:checkBox});
   };
  return (
    <>
      <Checkbox type="checkBox" onChange={checked} defaultValue={checkBox} />
    </>
  );
};
