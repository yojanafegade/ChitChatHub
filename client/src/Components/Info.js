import React from 'react'
import Image from "../Images/My project.png"

const Info = () => {
  return (
    <div>
          {/* <div className="container-1 flex flex-row justify-center items-center mt-0 ml-0">
              <div className="my-info">
                  <p className="welcome">Welcome!</p>
                  <p className="chitchathub">This is <span className='two_c_head'>ChitChatHub</span> </p>
                  <p className="info1">
                      Your own<span class="hub"> HUB</span> <br /> for engaging conversations
                  </p>
              </div>
              <div className="my-image">
                  <img src="Group 2.png" alt="Yojana" />
              </div>
          </div> */}




         <div className='flex flex-row justify-center items-center mt-0 ml-0'>
            <div className='text-content '>
                  <p className="welcome">Welcome!</p>
                  <p className="chitchathub">This is <br /><span className='two_c_head'>ChitChatHub</span> </p>
                  <p className="info1">
                      Your own<span className="hub"> HUB</span> <br /> for engaging conversations
                  </p>
            </div>
            <div className='image h-[41rem] w-[37rem] ' >
                  <img src={Image} alt="Yojana"  />
            </div>
         </div>



    </div>
  )
}

export default Info