
import { useState } from 'react';
import './App.css';
import io from 'socket.io-client'
import Chats from './Components/Chats';
import Nav from './Components/Nav'
import "@fontsource/poppins/400.css";
import Info from './Components/Info'
import { MdLabelImportant } from 'react-icons/md'
import GuideP from './Components/GuideP';

const socket = io.connect("http://localhost:3001")
function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("Join_room", room);
      setShowChat(true)
    }
  };

  return (
    <div className="App overflow-x-hidden bg-regal-blue">

      <div>
        <Nav></Nav>
       
      </div>
      {!showChat ? (
          <div>

            <div>
            <Info></Info>
            </div>

          <div className='flex flex-row mt-40 justify-center items-center gap-80'>

            <div className='guide'>
              <GuideP></GuideP>
            </div>

            <div className='joinChatContainer border-[1px] border-b-slate-700 py-24 px-8 rounded-xl'>

              <h3 className='font-bold text-blue-500'>Join a Chat Now</h3>
              <div>
                <input type="text" placeholder='  Your name' onChange={(event) => {
                  setUsername(event.target.value);
                }} />
              </div>
              <div>
                <input type="text" placeholder='  Room Id' onChange={(event) => {
                  setRoom(event.target.value);
                }} />
              </div>
              <div>
                <button className='font-bold' onClick={joinRoom}>Join A room</button>
              </div>
            </div>
          </div>
          </div>
        
      
      ) : (
        <div className='flex justify-center items-center'>
          <Chats socket={socket} username={username} room={room}></Chats>
        </div>
      )}


     

    </div>
  );
}



export default App;
