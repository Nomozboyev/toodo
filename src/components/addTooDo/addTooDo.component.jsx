import { useContext, useEffect } from "react";
import { CRUD } from "../../hooks/crud/CRUDhooks";
import uuid from "react-uuid";
import "./addTooDo.scss";
import { Button, InputBase, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
export const AddToDo = () => {
  const [
    { toodos, settoodos },
    { toodo, settoodo },
    { etiting, setetiting },
    { edit, setedit },
    { checkBox, setcheckBox }
  ] = useContext(CRUD);

  useEffect(() => {
    localStorage.setItem("lastTooDo", JSON.stringify(toodos));
  }, [toodos]);
  const hendlechange = (e) => {
    settoodo({ id: uuid() + 1, text: e.target.value ,checked:checkBox});
  };
  const hendleSubmit = (evnt) => {
    evnt.preventDefault();
    settoodos([...toodos, toodo]);
    settoodo({ ...toodo, text: "" });
  };

  const hendleEditChange = (evnt) => {
    setetiting({ ...etiting, text: evnt.target.value });
  };

  const editTooDos = () => {
    let updatedtoodo = toodos.map((toodo) =>
      etiting.id == toodo.id ? etiting : toodo
    );

    settoodos(updatedtoodo);
  };
  const hendleSubmitEdit = (e) => {
    e.preventDefault();
    editTooDos();
    setedit(false);

    settoodo({ ...toodo, text: "" });
  };

  return (
    <>
      {edit ? (
        <Paper
          component="form"
          sx={{
            p: "0px 0px 0px 4px",
            display: "flex",
            alignItems: "center",
            width: 500,
            height: 40,
          }}
          className="edit"
          onSubmit={hendleSubmitEdit}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Something"
            inputProps={{ "aria-label": "search google maps" }}
            type="text"
            autoFocus
            onChange={hendleEditChange}
            value={etiting.text}
          />
          <Button
            variant="contained"
            endIcon={<ModeEditOutlineIcon />}
            sx={{ margin: "0", height: 1 / 1 }}
            type="submit"
          ></Button>
        </Paper>
      ) : (
        <Paper
          component="form"
          className="addForm"
          sx={{
            p: "0px 0px 0px 4px",
            display: "flex",
            alignItems: "center",
            width: 500,
            height: 40,
          }}
          onSubmit={hendleSubmit}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Something"
            inputProps={{ "aria-label": "search google maps" }}
            type="text"
            onChange={hendlechange}
            value={toodo.text}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            type="submit"
            sx={{ margin: "0", height: 1 / 1 }}
          >
            {/* <AddCircleOutlinedIcon/> */}
          </Button>
        </Paper>
      )}
    </>
  );
};
