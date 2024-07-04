import Image from "next/image";
import styles from "@/app/chats/chat.module.css"
import Link from "next/link";

function ProfilePic(){
    return(
        <Image  src="/dp.jpg"  width={200}  height={200}  alt="dp" className={styles.img} />

    );

}
function Chat() {
    // profile pic
    // Namwe
    // chat preview

    return(
        <Link href="/chats/chat">
        <section className={styles.main}>
            <section className={styles.img}>
                <ProfilePic />
            </section>
            <section className={styles.chat}>
                <p>Ann Mary</p>
                <p>This is my best life</p>
            </section>
            <section>
                <p className={styles.num}>7</p>
                <p><b>23:00</b></p>
            </section>
        </section>
        </Link>
        
    )
}

//chats ui
function RecievedMessage(){
    return(
        <p className={styles.recieved}>Lorem ipsum dolor sit amet consectetur. Quis erat varius a morbi accumsan sem quis quisque cursus. Morbi nibh nulla.</p>
        
    )
}

function SentMessage(){
    return(
        <p className={styles.sent}>Lorem ipsum dolor sit amet consectetur. Quis erat varius a morbi accumsan sem quis quisque cursus. Morbi nibh nulla.</p>
        
    )
}


function TextBar() {
    return(
        <section>
            
        </section>
    )
}


function Chats() {
    return(
       <>
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
       </>
    )
}

export {
    Chats,
    RecievedMessage,
    SentMessage
}