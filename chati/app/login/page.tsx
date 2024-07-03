import { HaveAccount, HeroImage, HeroText, LoginForm } from "../ui/SharedComponents";

export default function Page() {
    // logo
    // form
    return(
        <main className="main">

            <HeroImage url="/logo.svg" width={200} height={200}  alt="login logo"/>
            <section> 
            <HeroText text="Log in to your account"/>
            </section>
           <section className="border-2 border-rose-500 mx-6">
           <LoginForm />
           </section>
           <section>
            <HaveAccount type="login"/>
           </section>
        </main>
   
)
}