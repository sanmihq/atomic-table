import { Element } from "@/types/types";
import { useState } from "react";

type ElementCardProps = {
  element: Element;
};

const getColorByCategory = (category: string) => {
  const colorMap: Record<string, string> = {
    Actinide: "#c770c1",
    Nonmetal: "#02f4e4",
    "Noble Gas": "#a460f5",
    "Alkali Metal": "#ce2d4f",
    "Alkaline Earth Metal": "#f1a689",
    Halogen: "#01b9ef",
    Lanthanide: "#fb3396",
    Metalloid: "#0aff8a",
    "Post-transition Metal": "#bbf71b",
    "Transition Metal": "#ffffff",
  };

  return colorMap[category] || "";
};

export default function ElementCard({ element }: ElementCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const backgroundColor = isHovered
    ? getColorByCategory(element.category)
    : "transparent";
  const textColor = isHovered
    ? "#000000"
    : getColorByCategory(element.category);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor, color: textColor }}
      className={`flex flex-col gap-1 items-center justify-center min-w-[70px] h-fit p-1 cursor-pointer`}
    >
      <div className="flex items-center justify-between text-[.6rem] font-semibold w-full leading-none">
        <span>{element.electron}</span>
        <span>{element.atomic_mass}</span>
      </div>
      <h1 className="text-center text-xl font-bold w-full leading-none">
        {element.symbol}
      </h1>
      <div className="flex flex-col items-center w-full leading-none">
        <p className="text-[.6rem] truncate w-[60px] text-center">
          {element.name}
        </p>
      </div>
    </div>
  );
}
