import { useContext, useState } from "react";
import { DataContext } from "../store/globalState";
import Grow from "./Loading";
import Toasty from "./Toast";

const Notify = () => {
  const { state, dispatch } = useContext(DataContext);
  const { notify } = state;
  // const [timer, setTimer] = useState(false);
  // const updateNotify = () => {
  //   setTimeout(() => {
  //     setTimer(true);
  //   }, 3000);
  // };
  // updateNotify();
  return (
    <div>
      {notify?.loading && <Grow />}
      {notify?.error && (
        <Toasty
          msg={{ msg: notify.error, title: "ERROR" }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-danger"
        />
      )}
      {notify?.success && (
        <Toasty
          msg={{ msg: notify.success, title: "OK" }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-success"
        />
      )}
    </div>
  );
};

export default Notify;
