import styles from "./index.module.css";

interface CheckboxProps {
  label?: string;
  children?: React.ReactNode;
  checked?: boolean;
  onChange?: (e: any) => void;
}

const Checkbox = ({ label, children, checked, onChange }: CheckboxProps) => {
  return (

<>
      <label htmlFor={label} className={styles['checkbox-container']}>
        <input
          type='checkbox'
          id={label}
          name={label}
          checked={checked}
          onChange={onChange}
          className={styles['checkbox-input']}
        />
        <span className={styles['checkmark']}></span>

        {!children ? <span className='text-grey'>{label}</span> : children}
      </label>
    </>

  );
};

export default Checkbox;
