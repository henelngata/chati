import Image from "next/image";
import { HeroImage, _Link } from "./ui/SharedComponents";
import { WelcomeText } from "./ui/IndexUi";
export default function Home() {
  // faces
  // text
  // link
  return (
    <main className=" p-5 main">
      <HeroImage url="/logo.svg" width={400}  height={400} alt="a picture of happy faces"/>
      <section className="welcome">
        <WelcomeText />
        </section>
        <section className="px-12">
        <_Link url="/login" text="Get Started"/>
        </section>
       
    </main>
   
  
  );
}
