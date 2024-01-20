import Image from "next/image";
import element from "../../../public/assets/element.svg";

export default function ScreenMessage() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center gap-8">
      <Image src={element} alt="element" height={150} width={150} priority />
      <h1 className="text-white text-sm">Oops...Please use on desktop</h1>
    </div>
  );
}
