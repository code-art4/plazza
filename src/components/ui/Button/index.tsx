import styles from './index.module.css';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: string;
}

const Button = ({ children, type, className }: ButtonProps) => {
  switch (type) {
    case 'primary':
      return (
        <button className={`${styles.button} ${styles.primary} ${className}`}>
          {children}
        </button>
      );

    case 'secondary':
      return (
        <button className={`${styles.button} ${styles.secondary} ${className}`}>
          {children}
        </button>
      );

    default:
      return (
        <button className={`${styles.button} ${styles.primary} ${className}`}>
          {children}
        </button>
      );
  }
};

export default Button;
