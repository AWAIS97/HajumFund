import React from "react";

const CustomButton = (props) => {
  const { btnType, title, handleClick, styles } = props;
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px]  ${styles} `}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
