import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  CircleBorder25: "rounded-radius25",
  icbRoundedBorder10: "rounded-radius10",
  icbCircleBorder34: "rounded-radius34",
};
const variants = {
  FillBlack900: "bg-black_900 text-white_A700",
  OutlineBlack900: "border-black_900 border-bw3 border-solid text-black_900",
  OutlineGreen60063: "bg-green_600 shadow-bs3 text-white_A700",
  icbFillRed401: "bg-red_401",
  icbOutlineRed3007c: "bg-red_300 shadow-bs1",
  icbOutlineCyan40087: "bg-cyan_400 shadow-bs",
  icbOutlineLime80087: "bg-lime_800 shadow-bs2",
  icbOutlineWhiteA700: "bg-red_401 border-bw9 border-solid border-white_A700",
};
const sizes = {
  sm: "p-[12px]",
  md: "p-[24px] sm:px-[20px]",
  smIcn: "p-[11px]",
  mdIcn: "p-[26px] sm:px-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder5",
    "CircleBorder25",
    "icbRoundedBorder10",
    "icbCircleBorder34",
  ]),
  variant: PropTypes.oneOf([
    "FillBlack900",
    "OutlineBlack900",
    "OutlineGreen60063",
    "icbFillRed401",
    "icbOutlineRed3007c",
    "icbOutlineCyan40087",
    "icbOutlineLime80087",
    "icbOutlineWhiteA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn", "mdIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "icbFillRed401",
  size: "smIcn",
};

export { Button };
