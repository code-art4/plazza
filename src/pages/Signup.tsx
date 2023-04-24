import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Input, Button, Checkbox } from "../components/ui";
import AuthLayout from "../features/auth";
import SignupSelect from "../features/signup/Select";
import { DataContext } from "../store/globalState";
import valid from "../utils/valid";

const Signup = () => {
  const intialData = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    otp: "",
    selected: "",
    checkBox: false,
  };
  const { state, dispatch } = useContext(DataContext);
  const [userData, setUserData] = useState(intialData);
  const navigate = useNavigate();

  // form Input validation
  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  // handleSelect
  const [choice, setChoice] = useState("");
  const handleSelect = (e: any) => {
    setChoice(e.value);
    setUserData({ ...userData, selected: choice });
  };
  // checkbox
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
    setUserData({ ...userData, checkBox: isChecked });
  };
  // handlesubmit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const {
      email,
      confirmPassword,
      password,
      firstName,
      otp,
      selected,
      checkBox,
    } = userData;
    const checked = valid(firstName, email, confirmPassword, password);
    if (checked) {
      console.log("entered");
      dispatch({ type: "NOTIFY", payload: { error: checked } });
      console.log("out");

      return setTimeout(() => {
        return dispatch({ type: "NOTIFY", payload: {} });
      }, 3000);
    }
    console.log("hit", userData, checked);
  };
  return (
    <AuthLayout>
      <div className="flex flex-col gap-y-6">
        <Input
          placeholder="First name"
          id="firstName"
          name="firstName"
          onChange={(e) => handleInput(e)}
          value={userData.firstName}
        />
        <Input
          placeholder="Last name"
          id="lastName"
          name="lastName"
          onChange={(e) => handleInput(e)}
          value={userData.lastName}
        />
        <Input
          placeholder="Email address"
          id="email"
          name="email"
          type="email"
          onChange={(e) => handleInput(e)}
          value={userData.email}
        />
        <div className="flex items-center gap-x-5">
          <SignupSelect onChange={(e) => handleSelect(e)} />
          <Input
            placeholder="OTP"
            id="otp"
            name="otp"
            type="number"
            onChange={(e) => handleInput(e)}
            value={userData.otp}
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <Input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            onChange={(e) => handleInput(e)}
            value={userData.password}
          />
          <Input
            placeholder="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            type="confirmPassword"
            onChange={(e) => handleInput(e)}
            value={userData.confirmPassword}
          />

          <div>
            <Checkbox checked={isChecked} onChange={() => checkHandler()}>
              <span className="text-grey">
                I agree with the{" "}
                <span className="text-green">terms and conditions</span>
              </span>
            </Checkbox>

            <div className="mt-5" onClick={(e) => handleSubmit(e)}>
              <Button>Signup</Button>
            </div>

            <p className="flex items-center justify-center text-[#787878] mt-3">
              Already have an account ?
              <p
                className="text-green text-medium ml-2 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login Here
              </p>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
