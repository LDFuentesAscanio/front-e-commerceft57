export default function FormInput({
  name,
  label,
  type,
  value,
  onChange,
  placeholder,
  errorMessage,
}: {
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  errorMessage?: string;
}) {
  return (
    <>
      <label htmlFor={name} className="text-black-tag font-bold">
        {label}
      </label>
      <input
        className=""
        onChange={onChange}
        type={type}
        name={name}
        required
        placeholder={placeholder}
        value={value}
      />
      {errorMessage && (
        <span className="text-red-500 text-[1.2rem] mt-1">{errorMessage}</span>
      )}
    </>
  );
}
