"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Element } from "@/types/types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import atom from "../../../public/assets/atom.svg";
import atomicProps from "../../../public/assets/atomic-props.svg";
import temperature from "../../../public/assets/temperature.svg";
import reactivity from "../../../public/assets/reactivity.svg";

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

  const kelvinToCelsius = (kelvin: number | null | undefined) => {
    return kelvin != null ? kelvin - 273.15 : null;
  };

  const kelvinToFahrenheit = (kelvin: number | null | undefined) => {
    return kelvin != null ? (kelvin - 273.15) * (9 / 5) + 32 : null;
  };

  const meltingPointCelsius = kelvinToCelsius(element.melting_point);
  const boilingPointCelsius = kelvinToCelsius(element.boiling_point);
  const meltingPointFahrenheit = kelvinToFahrenheit(element.melting_point);
  const boilingPointFahrenheit = kelvinToFahrenheit(element.boiling_point);

  return (
    <div>
      <Sheet>
        <SheetTrigger>
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
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-atomic text-white border-0 h-full overflow-y-auto px-0"
        >
          <SheetHeader>
            <SheetTitle className="text-white mt-16 px-6">
              {element.name}
            </SheetTitle>
            <SheetDescription className="text-white">
              <div className="flex flex-col gap-4">
                <div className="flex items-end gap-6 px-6">
                  <h2 className="text-7xl font-bold">{element.symbol}</h2>
                  <p className="text-lg font-medium">{element.electron}</p>
                </div>
                <div className="flex justify-between items-center pl-6">
                  <span className="text-sm font-medium">
                    {element.atomic_mass}{" "}
                    <span className="text-sm">(g/mol)</span>
                  </span>
                  <h3
                    style={{
                      backgroundColor: getColorByCategory(element.category),
                    }}
                    className="uppercase text-black text-xs font-semibold py-2 px-4 rounded-l-md"
                  >
                    {element.category}
                  </h3>
                </div>
              </div>
            </SheetDescription>

            {/* overview */}
            <div className="pt-10">
              <div className="flex items-center gap-3 bg-orange-700 text-xs font-semibold uppercase w-fit py-2 px-4 rounded-r-md">
                <Image src={atom} alt="atom" height={20} width={20} priority />
                <h3>Overview</h3>
              </div>
              <div className="text-xs mt-10 px-6">
                <div className="flex flex-col gap-6">
                  <p className="font-semibold">
                    Latin name: <br />
                    <span className="font-light">{element.latin_name}</span>
                  </p>
                  <p className="font-semibold">
                    English name: <br />
                    <span className="font-light">{element.english_name}</span>
                  </p>
                  <p className="font-semibold">
                    Year discovered: <br />
                    <span className="font-light">
                      {element.year_discovered}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Discovered by: <br />
                    <span className="font-light">
                      {element.person_discovered}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-6 pt-10">
              <div className="flex flex-col items-center gap-2">
                <p className="text-xs font-semibold py-2 px-4 rounded-md bg-red-600 uppercase">
                  Electrons:
                </p>
                <span className="font-bold text-3xl text-red-600">
                  {element.electron}
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-xs font-semibold py-2 px-4 rounded-md bg-yellow-600 uppercase">
                  Protons:
                </p>
                <span className="font-bold text-3xl text-yellow-600">
                  {element.proton}
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-xs font-semibold py-2 px-4 rounded-md bg-blue-600 uppercase">
                  Neutrons:
                </p>
                <span className="font-bold text-3xl text-blue-600">
                  {element.neutron}
                </span>
              </div>
            </div>

            {/* properties */}
            <div className="pt-10">
              <div className="flex items-center gap-3 bg-green-700 text-xs font-semibold uppercase w-fit py-2 px-4 rounded-r-md">
                <Image
                  src={temperature}
                  alt="atom"
                  height={20}
                  width={20}
                  priority
                />
                <h3>Properties</h3>
              </div>
              <div className="text-xs mt-10 px-6">
                <div className="flex flex-col gap-6">
                  <p className="font-semibold">
                    Atomic number: <br />
                    <span className="font-light">{element.proton}</span>
                  </p>
                  <p className="font-semibold">
                    Atomic weight (Relative atomic mass): <br />
                    <span className="font-light">
                      {element.atomic_mass} (g/mol)
                    </span>
                  </p>
                  <p className="font-semibold">
                    Density: <br />
                    <span className="font-light">
                      {element.density} (g/cm³)
                    </span>
                  </p>
                  <p className="font-semibold">
                    Melting Point: <br />
                    <span className="font-light">
                      {element.melting_point != null
                        ? `${
                            element.melting_point
                          }°K | ${meltingPointCelsius?.toFixed(
                            4
                          )}°C | ${meltingPointFahrenheit?.toFixed(4)}°F`
                        : "N/A"}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Boiling Point: <br />
                    <span className="font-light">
                      {element.boiling_point != null
                        ? `${
                            element.boiling_point
                          }°K | ${boilingPointCelsius?.toFixed(
                            4
                          )}°C | ${boilingPointFahrenheit?.toFixed(4)}°F`
                        : "N/A"}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Valence electrons: <br />
                    <span className="font-light">
                      {element.valence_electron}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Period: <br />
                    <span className="font-light">{element.period}</span>
                  </p>
                  <p className="font-semibold">
                    Group: <br />
                    <span className="font-light">{element.group}</span>
                  </p>
                  <p className="font-semibold">
                    Block: <br />
                    <span className="font-light">{element.block} - block</span>
                  </p>
                </div>
              </div>
            </div>

            {/* atomic properties */}
            <div className="pt-10">
              <div className="flex items-center gap-3 bg-blue-700 text-xs font-semibold uppercase w-fit py-2 px-4 rounded-r-md">
                <Image
                  src={atomicProps}
                  alt="atom"
                  height={20}
                  width={20}
                  priority
                />
                <h3>Atomic Properties</h3>
              </div>
              <div className="text-xs mt-10 px-6">
                <div className="flex flex-col gap-6">
                  <p className="font-semibold">
                    Electron configuration: <br />
                    <span className="font-light">
                      {element.electron_configuration}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Atomic radius: <br />
                    <span className="font-light">
                      {element.atomic_radius} (pm)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* reactivity */}
            <div className="pt-10">
              <div className="flex items-center gap-3 bg-lime-700 text-xs font-semibold uppercase w-fit py-2 px-4 rounded-r-md">
                <Image
                  src={reactivity}
                  alt="atom"
                  height={20}
                  width={20}
                  priority
                />
                <h3>Reactivity</h3>
              </div>
              <div className="text-xs mt-10 px-6">
                <div className="flex flex-col gap-6">
                  <p className="font-semibold">
                    Electronegativity: <br />
                    <span className="font-light">
                      {element.electronegativity}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Electron affinity: <br />
                    <span className="font-light">
                      {element.electron_affinity} kj/mole
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
