import Image from "next/image";
import Link from "next/link";
import styles from"@/app/ui/shared.module.css";

function HeroImage({url, width, height , alt}){
    return (
        <Image 
        src={url}
        width={width}
        height={height}
        alt={alt}
        />
    )
}

function _Link({url, text}) {
    return (
        <section className="w-[300.50px] h-[55.52px] px-[93.25px] py-[15.26px] bg-blue-700 rounded-3xl justify-center items-center gap-[16.95px] inline-flex">
    <Link className="text-white text-xl font-bold "href={url}>
        {text}
        </Link>
</section>
       

)
}

function InputTextBox({type, placeholder}) {
    return (
        <input type={type} placeholder={placeholder} required className={`${styles.input} my-4`}/>
    )
       
}

function Button({text}) {
    return (
        <button type="submit" className="w-[250px] h-[55.52px] px-[93.25px] py-[15.26px] bg-blue-700 rounded-3xl justify-center items-center gap-[16.95px] inline-flex text-white">{text}</button>
    )
}

function LoginForm(){
    return(
        <form>
            <InputTextBox type="email" placeholder="enter email"/>
            <InputTextBox  type="password" placeholder="enter password"/>
            <Button text="log in"/>
        </form>
    )
}

function SignForm() {
    return(
        <form>
    <InputTextBox type="email" placeholder="enter email"/>
    <InputTextBox  type="password" placeholder="enter password"/>
    <InputTextBox  type="password" placeholder="enter password"/>

    <Button text="sign in"/>
</form>
    )
    
}

function HaveAccount({type}) {
    if (type == "login") {
        return(
            <p>Create an account <b><Link href="/sign">Sign Up</Link></b></p>
        )
    } else {
        return(
            <p>Already have an account?<b><Link href="/login">Log In</Link></b></p>
        )
    }
}

function HeroText({text}){
    return(
        <h1 className={styles.text}>{text}</h1>
    )
}

export{
    HeroImage,
    _Link,
    LoginForm,
    SignForm,
    HaveAccount,
    HeroText
}