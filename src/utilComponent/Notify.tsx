import { useContext, useState } from "react";
import { DataContext } from "../store/globalState";
import Loading from "./Loading";
import Toast from "./Toast";

const Notify = () => {
  const { state, dispatch } = useContext(DataContext);
  const { notify } = state;
  console.log(notify, state, dispatch);
  const [timer, setTimer] = useState(false);
  const updateNotify = () => {
    setTimeout(() => {
      setTimer(true);
    }, 3000);
  };
  updateNotify();
  return (
    <>
      {notify.loading && <Loading />}
      {notify.error && (
        <Toast
          msg={{ msg: notify.error, title: "ERROR" }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-danger"
        />
      )}
      {notify.success && (
        <Toast
          msg={{ msg: notify.success, title: "OK" }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-success"
        />
      )}
    </>
  );
};

export default Notify;
