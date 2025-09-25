import { FaPlus } from "react-icons/fa6";
import { LuClock4 } from "react-icons/lu";

type IconProps = {
  size: string;
  color: string;
  onClick?: () => void;
  classNames: string[];
};

export const Add = ({ classNames, size, color }: IconProps) => {
  return (
    <div className={classNames.join(" ")}>
      <FaPlus size={size} color={color} />
    </div>
  );
};

export const Clock = ({ classNames, size, color }: IconProps) => {
  return (
    <div className={classNames.join(" ")}>
      <LuClock4 size={size} color={color} />
    </div>
  );
};
