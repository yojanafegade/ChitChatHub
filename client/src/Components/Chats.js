import React, { useEffect, useState } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';

function Chats({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);




  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
      };

      await socket.emit("Send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("")
    };

  };



  useEffect(() => {
    socket.on("Receive_message", (data) => {
      setMessageList((list) => [...list, data]);

    });
  }, [socket]);



  return (
    <div className='chat-window flex flex-col border-2 border-black rounded-lg'>

      <div className='chat-header'>
        <p>Chat With ChitChatHub</p>
      </div>


      <div className='chat-body'>
        {
          <ScrollToBottom className='message-container'>
            {
              messageList.map((messageContent) => {
                return <div className='message' id={username === messageContent.author ? "you" : "other"}>

                  <div>
                    <div className='message-content'>
                      <p>{messageContent.message}</p>
                    </div>
                    <div className='message-meta'></div>
                    <div>
                      <p id='time'>{messageContent.time}</p>
                    </div>

                    <div>
                      <p id='author'>{messageContent.author}</p>
                    </div>
                  </div>
                </div>
              })
            }
          </ScrollToBottom>
        
        }
      </div>


      <div className='chat-footer'>

        <div className='flex gap-10'>
          <input type="text" 
          value={currentMessage}
          placeholder='Enter message' onChange={(event) => {
            setCurrentMessage(event.target.value)
            
          }} 
            onKeyDown={(event)=>{
               event.key==="Enter " && sendMessage();
            }}
          />

          <div>
            <button onClick={sendMessage} >   Send&#9658;</button>
          </div>
        </div>


      </div>


    </div>
  )
}

export default Chats