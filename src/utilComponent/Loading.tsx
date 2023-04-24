import Spinner from "react-bootstrap/Spinner";

function Grow() {
  return (
    <div className="position-absolute w-full h-full flex justify-center items-center">
      <Spinner
        animation="grow"
        variant="success"
        style={{ minHeight: "240px", minWidth: "240px" }}
      />
    </div>
  );
}

export default Grow;
