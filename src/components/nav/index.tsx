import { CiDeliveryTruck } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";
import { Button, Input } from "../ui";
import { Link } from "react-router-dom";
import NigeriaSVG from "../../assets/nigeria.svg";
import ChatSVG from "../../assets/chat.svg";
import NotificationSVG from "../../assets/notification.svg";
import HelpSVG from "../../assets/help.svg";
import Profile from "../../assets/image/profile.png";
import styles from "./index.module.css";
import { useState, useContext } from "react";
import { DataContext } from "../../store/globalState";

const noUser = () => {
  return (
    <div className="flex gap-x-2 justify-center items-center">
      <Link to="signup" className="p-0 m-0">
        <Button className={`${styles["search-btn"]}`}>Register</Button>
      </Link>
      <Link to="login" className="p-0 m-0">
        <Button className={styles["search-btn"]}>login</Button>
      </Link>
    </div>
  );
};

const loggedUser = () => {
  return (
    <div className={styles["right-nav"]}>
      <div className={styles["delivery-icon"]}>
        <CiDeliveryTruck size="1.5rem" />
        <p className="mb-0">Logistics</p>
      </div>
      <div className={styles["icons-container"]}>
        <img src={NigeriaSVG} className={styles.icon} />
        <img src={ChatSVG} className={styles.icon} />
        <img src={NotificationSVG} className={styles.icon} />
        <img src={HelpSVG} className={styles.icon} />
        <div className="flex items-center">
          <img src={Profile} className="w-8 h-8" />
          <RxCaretDown size="1rem" />
        </div>
      </div>
    </div>
  );
};

const Nav = () => {
  const { state, dispatch } = useContext(DataContext);
  const { users } = state;
  return (
    <nav className={styles["nav-container"]}>
      <div className={styles["dummy-logo"]}></div>
      <div className="w-[50%] mx-auto">
        <div className={styles["input-search-container"]}>
          <Input
            placeholder="Search for products, brand and categories"
            type="search"
            id="search"
            name="search"
            className="!py-2.5"
          />
          <Button className={styles["search-btn"]}>Search</Button>
        </div>
      </div>
      <div className="p-0 m-0">
        {users && users.length !== 0 ? loggedUser() : noUser()}
      </div>
    </nav>
  );
};

export default Nav;
