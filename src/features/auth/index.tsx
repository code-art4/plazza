import styles from './index.module.css';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles['first-container']}></div>
      <div className={styles['main-container']}>{children}</div>
    </div>
  );
};

export default AuthLayout;
