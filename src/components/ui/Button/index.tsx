import styles from "./index.module.css";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: string;
  onClick?: (event?: Event) => void;
}

const Button = ({ children, type, className, onClick }: ButtonProps) => {
  switch (type) {
    case "primary":
      return (
        <button
          className={`${styles.button} ${styles.primary} ${className}`}
          onClick={() => onClick}
        >
          {children}
        </button>
      );

    case "secondary":
      return (
        <button
          className={`${styles.button} ${styles.secondary} ${className}`}
          onClick={() => onClick}
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          className={`${styles.button} ${styles.primary} ${className}`}
          onClick={() => onClick}
        >
          {children}
        </button>
      );
  }
};

export default Button;
