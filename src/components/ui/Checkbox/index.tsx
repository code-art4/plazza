import styles from './index.module.css';

interface CheckboxProps {
  label?: string;
  children?: React.ReactNode;
}

const Checkbox = ({ label, children }: CheckboxProps) => {
  return (
    <label htmlFor={label} className={styles['checkbox-container']}>
      <input
        type='checkbox'
        id='myCheckbox'
        className={styles['checkbox-input']}
      />
      <span className={styles['checkmark']}></span>

      {!children ? <span className='text-grey'>{label}</span> : children}
    </label>
  );
};

export default Checkbox;
