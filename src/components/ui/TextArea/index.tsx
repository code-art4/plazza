interface TextAreaProps {
  label?: string;
  placeholder: string;
}

const TextArea = ({ label, placeholder }: TextAreaProps) => {
  return (
    <div>
      {label ? (
        <label
          htmlFor={label}
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={label}
        rows={4}
        className='border border-green w-full rounded-lg placeholder-grey outline-none px-7 py-3 resize-none'
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
