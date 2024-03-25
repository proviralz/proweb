import Landing from "@/components/skilled/Home";
import Image from "next/image";

export default function Home() {

  const user = 's'
  return (
    <main className="">
      { user === 's' && <Landing />}
      <div>
        holla
      </div>
    </main>
  );
}
