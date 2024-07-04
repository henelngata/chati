import { Chats, RecievedMessage, SentMessage } from "../ChatUi";

export default function Page() {
    return (
        <main className="main">
            <RecievedMessage/>
            <SentMessage />
        </main>
      
    )
}