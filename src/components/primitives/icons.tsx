import { FaPlus } from "react-icons/fa6";

type IconProps = {
  size: string;
  color: string;
  onClick?: () => void;
  classNames: string[];
};

export const Add = (props: IconProps) => {
  const { classNames, size, color } = props;

  return (
    <div className={classNames.join(" ")}>
      <FaPlus size={size} color={color} />
    </div>
  );
};
