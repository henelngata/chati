import { HaveAccount, HeroImage, HeroText, SignForm } from "../ui/SharedComponents";

export default function Page()
{
    return(
        <main className="main">
            <section>
                <HeroImage url="/illustrate.png" width={400} height={400} alt="Illustartion " />

            </section>
            <section>
                <HeroText text="lets you in"/>
            </section>
            <section>
                <SignForm />
            </section>
            <section>
                <HaveAccount type="sign"/>
            </section>
        </main>
        
    )
}