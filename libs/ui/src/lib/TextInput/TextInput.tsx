import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const textInputVariants = cva(
  "peer flex py-2 pr-2 pl-6 placeholder-transparent caret-green-300 focus:outline-none focus:ring-2 focus:ring-blue-200",
  {
    variants: {},
    defaultVariants: {},
  },
);

type TextInputVariants = VariantProps<typeof textInputVariants>;

interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    TextInputVariants {
  label: string;
}

/**
 * The TextInput component is a text input field with a label.
 */
export function TextInput({
  children,
  onChange,
  value,
  name,
  label,
  ...props
}: TextInputProps) {
  return (
    <label className="relative inline-flex items-center border border-green-300 bg-green-600 font-sans text-green-300 text-lg/4xl">
      <span className="absolute top-0 left-0 py-2 pl-2">{"> "}</span>
      <input
        onChange={onChange}
        value={value}
        name={name}
        placeholder={label}
        className={twMerge(
          textInputVariants(),
          !value ? "caret-transparent" : "",
        )}
        {...props}
      />
      <span className="invisible absolute top-2 left-6 text-green-300 peer-placeholder-shown:visible peer-focus:text-green-400 peer-active:text-green-400">
        {label}
      </span>
    </label>
  );
}
