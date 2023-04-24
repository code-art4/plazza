import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

type props = {
  msg?: any;
  handleShow?: any;
  bgColor?: any;
};
const Toasty = ({ msg, handleShow, bgColor }: props) => {
  return (
    <>
      <div
        aria-live="polite"
        aria-atomic="true"
        className={`bg-dark position-relative ${bgColor}`}
        style={{ minHeight: "240px" }}
      >
        <ToastContainer
          className="p-3"
          position="top-center"
          style={{ zIndex: 1 }}
        >
          <Toast>
            <Toast.Header closeButton={true}>
              <p className="me-auto">{msg.title}</p>
              <div className={`toast-header ${bgColor} text-light`}>
                <strong className="mr-auto text-light">{msg.title}</strong>
                <button
                  type="button"
                  className="ml-2 mb-1 close text-light"
                  data-dismiss="toast"
                  style={{ outline: "none" }}
                  onClick={handleShow}
                >
                  x
                </button>
              </div>
            </Toast.Header>
            <Toast.Body>{msg.msg}</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  );
};

export default Toasty;
{
  /* <div
        className={`toast show position-fixed text-light ${bgColor}`}
        data-autohide="false"
        style={{ top: "5px", right: "5px", zIndex: 9, minWidth: "280px" }}
      >
        <div className={`toast-header ${bgColor} text-light`}>
          <strong className="mr-auto text-light">{msg.title}</strong>
          <button
            type="button"
            className="ml-2 mb-1 close text-light"
            data-dismiss="toast"
            style={{ outline: "none" }}
            onClick={handleShow}
          >
            x
          </button>
        </div>
        <div className="toast-body">{msg.msg}</div>
      </div> */
}
