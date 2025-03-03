import Image from "next/image";
import Topbar from '@/app/components/Topbar';
import Hero from '@/app/partials/Hero';
import FilaquinDetails from '@/app/components/FilaquinDetails';
import VetExclusive from '@/app/components/VetExclusive';
import FilaquinSteps from '@/app/components/FilaquinSteps';

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <FilaquinDetails />
        <VetExclusive />
        <FilaquinSteps />
      </main>
    </>
  );
}
