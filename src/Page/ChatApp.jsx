import MessageConatiner from "../Components/MessageConatiner"
import NavBar from "../Components/NavBar"
import TextInput from "../Components/TextInput"
import "../style/chat.scss"

const ChatApp = () => {
  return (
    <div className="chatContainer">
        <div className="chat-app">
            <NavBar/>
            <MessageConatiner/>
            <TextInput/>
        </div>
    </div>
  )
}

export default ChatApp