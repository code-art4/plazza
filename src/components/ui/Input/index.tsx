import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styles from "./index.module.css";

interface InputProps {
  placeholder: string;
  id: string;
  name: string;
  type?: string;
  className?: string;
  onChange?: (e: any) => void;
  value?: string | number;
}

const Input = ({
  placeholder,
  id,
  name,
  type,
  className,
  onChange,
  value,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`${styles.input}`}>
      <input
        type={
          (type === "password" && showPassword ? type : "text") ||
          type ||
          "text"
        }
        id={id}
        name={name}
        className={className}
        placeholder={placeholder}
        required
        onChange={onChange}
        value={value}
      />
      {type === "password" ? (
        <div className={styles["password-container"]}>
          {showPassword ? (
            <AiFillEye
              size="1.5rem"
              color="#a5a5a57f"
              className="cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <AiFillEyeInvisible
              size="1.5rem"
              color="#a5a5a57f"
              className="cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
