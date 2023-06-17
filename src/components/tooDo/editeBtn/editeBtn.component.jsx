import { Button } from "@mui/material";
import { useContext } from "react";
import { CRUD } from "../../../hooks/crud/CRUDhooks";

export const EditBtn = ({ toodo }) => {
  let [, , { setetiting }, { setedit }] = useContext(CRUD);
  let OnEdite = () => {
    setedit(true);
    setetiting({
      id: toodo.id,
      text: toodo.text,
    });
  };
  return (
    <>
      <Button variant="contained" onClick={OnEdite}>
        edtite
      </Button>
    </>
  );
};
