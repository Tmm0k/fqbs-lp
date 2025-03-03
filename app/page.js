import Image from "next/image";
import Topbar from './components/Topbar';
import Hero from './partials/Hero';

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <Hero />
      </main>
    </>
  );
}
