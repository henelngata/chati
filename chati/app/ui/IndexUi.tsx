import styles from "@/app/ui/index.module.css"
function WelcomeText(){
    return(
        <section>
            <h1 className={styles.welcome}>Welcome to Chati</h1>
            <p className="mx-3 mt-4"> Lorem ipsum dolor sit amet consectetur. A faucibus consequat dignissim dictum id. Sagittis orci eu ipsum posuere.</p>
        </section>
        
    )
}


export{
    WelcomeText
}