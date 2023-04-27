interface TextAreaProps {
  label?: string;
  placeholder: string;
  onClick?: (e: any) => void;
  value?: string;
}

const TextArea = ({ label, placeholder, onClick, value }: TextAreaProps) => {
  return (
    <div>
      {label ? (
        <label
          htmlFor={label}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={label}
        rows={4}
        className="border border-green w-full rounded-lg placeholder-grey outline-none px-7 py-3 resize-none"
        placeholder={placeholder}
        value={value}
        // onClick={(e) => onClick}
      ></textarea>
    </div>
  );
};

export default TextArea;
