import PeriodicTable from "./components/PeriodicTable";
import elementsData from "@/data/elements.json";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full mx-auto h-screen">
      <PeriodicTable elements={elementsData} />
    </main>
  );
}
