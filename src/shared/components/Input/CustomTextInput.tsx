import { TextInput, TextInputProps } from "@mantine/core";

interface ICustomTextInputProps extends TextInputProps {
  gridSize?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

const CustomTextInput = ({ gridSize, ...props }: ICustomTextInputProps) => {
  return (
    <TextInput
      classNames={{
        input: `bg-[#F2F2F2] h-12 placeholder:font-poppins  font-poppins`,
        label: `font-poppins mb-2.5 text-base font-medium`,
      }}
      radius={"md"}
      {...gridSize}
      {...props}
    />
  );
};

export default CustomTextInput;
