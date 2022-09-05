import React, { useState } from "react";
import Arrow from "../public/assets/arrow.svg";

const FaqCard = ({ title, ans }) => {
  const [isOpen, setIsOpen] = useState(false);
  const display = isOpen ? "block" : "hidden";

  return (
    <div className="w-c mx-auto justify-center rounded-md bg-white mt-5  ">
      <div className="border flex items-center">
        <div className="faqbutton  mx-2">
          <img src={Arrow.src} onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div className="faq w-c mx-auto">{title}</div>
      </div>
      <p className={`${display}`}>{ans}</p>
    </div>
  );
};

export default FaqCard;
