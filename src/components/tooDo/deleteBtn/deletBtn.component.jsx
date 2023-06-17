import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useContext } from "react";
import { CRUD } from "../../../hooks/crud/CRUDhooks";

export const DeletBtn = ({ id }) => {
  const [{ toodos, settoodos }] = useContext(CRUD);

  const hendleDelet = () => {
    let filtredTooDo = toodos.filter((toodo) => toodo.id !== id);
    settoodos(filtredTooDo);
  };
  return (
    <>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={hendleDelet}
        sx={{ fontSize: "12" }}
      >
        delete
      </Button>
    </>
  );
};
