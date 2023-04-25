import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Checkbox, Button } from "../components/ui";
import Separator from "../features/login/separator";
import AuthLayout from "../features/auth";
import GoogleSvg from "../assets/google.svg";
import { DataContext } from "../store/globalState";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const { state, dispatch } = useContext(DataContext);
  const initialState = { email: "", password: "", checkBox: false };
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [userData, setUserData] = useState(initialState);

  const [isChecked, setIsChecked] = useState(false);

  // form Input validation
  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    // dispatch({ type: "NOTIFY", payload: {} });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setUserData({ ...userData, checkBox: isChecked });
    const { email, password, checkBox } = userData;

    // console.log( checkBox);
    if (password == "" || email == "") {
      dispatch({
        type: "NOTIFY",
        payload: { error: "filed(s) cannot be empty" },
      });

      return setTimeout(() => {
        return dispatch({ type: "NOTIFY", payload: {} });
      }, 3000);
    }
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user: any = userCredential.user;
        const { stsTokenManager, ...other } = user;
        const { accessToken, refreshToken } = stsTokenManager;
        const { uid } = other;
        const users = { uid, accessToken, refreshToken };
        dispatch({
          type: "ADD_USERS",
          payload: { ...state.users, users },
        });
        navigate("/");

        localStorage.setItem("user", JSON.stringify(users));
        dispatch({ type: "NOTIFY", payload: { loading: false } });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch({
          type: "NOTIFY",
          payload: { error: errorMessage },
        });
        setTimeout(() => {
          return dispatch({ type: "NOTIFY", payload: {} });
        }, 2500);
        console.log(errorCode, errorMessage);
        // ..
      });
    dispatch({ type: "NOTIFY", payload: { loading: false } });
  };

  const signInwithGoogle = async (e: any) => {
    e.preventDefault();
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    await signInWithPopup(auth, provider)
      .then((result) => {
        // Signed in
        const user: any = result.user;
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const { stsTokenManager, ...other } = user;
        const { accessToken, refreshToken } = stsTokenManager;
        console.log(result);
        const { uid } = other;
        const users = { uid, accessToken,refreshToken };
        dispatch({
          type: "ADD_USERS",
          payload: { ...state.users, users },
        });
        navigate("/");

        localStorage.setItem("user", JSON.stringify(users));
        dispatch({ type: "NOTIFY", payload: { loading: false } });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch({
          type: "NOTIFY",
          payload: { error: errorMessage },
        });
        setTimeout(() => {
          return dispatch({ type: "NOTIFY", payload: {} });
        }, 2500);
        console.log(errorCode, errorMessage);
        dispatch({ type: "NOTIFY", payload: { loading: false } });

        // ..
      });
    dispatch({ type: "NOTIFY", payload: { loading: false } });
  };
  return (
    <AuthLayout>
      <div className="flex flex-col gap-y-6">
        <Input
          placeholder="Email address"
          id="email"
          name="email"
          type="email"
          onChange={(e) => handleInput(e)}
          value={userData.email}
        />
        <Input
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          onChange={(e) => handleInput(e)}
          value={userData.password}
        />
      </div>

      <div className="mt-7">
        <div className="flex items-center justify-between">
          <Checkbox
            label="Remember Me"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <p className="text-green text-sm">Forgot Password?</p>
        </div>
        <div className="mt-5" onClick={(e) => handleSubmit(e)}>
          <Button>Login</Button>
        </div>
        <div className="mt-8">
          <Separator />

          <div
            className="mt-5"
            onClick={(e) => {
              signInwithGoogle(e);
            }}
          >
            <Button
              type="secondary"
              className="flex justify-center items-center gap-x-2"
            >
              <img src={GoogleSvg} className="w-5 h-5" />
              Login with Google
            </Button>
          </div>

          <div className="flex items-center justify-center mt-3">
            <p>Don't have an account ?</p>
            <p
              className="text-green text-medium ml-2 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign up Here
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
