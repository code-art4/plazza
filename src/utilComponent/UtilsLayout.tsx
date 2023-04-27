// import NavBar from "./NavBar";
import Notify from "./Notify";
// import Modal from "./Modal";

interface Props {
  children: React.ReactNode;
  className?: string;
  type?: string;
  onClick?: (event?: Event) => void;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      {/* <NavBar /> */}
      <Notify />
      {/* <Modal /> */}
      {children}
    </div>
  );
};

export default Layout;
