import Image from "next/image";
import WineStore from "./components/WineStore";
export default function Home() {
  return (
    <main className="flex min-h-screen justify-center bg-zinc-900">
      <div className="min-w-full">
        <WineStore />
      </div>
    </main>
  );
}
