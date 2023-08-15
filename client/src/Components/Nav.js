import React from 'react'
import logo from '../Images/ChitChatHubLogo.png'
import "@fontsource/poppins/400.css";

const Nav = () => {
  return (
    <div>
          <nav class="bg-deepBlue ">
              <div class="relative w-[1080px] mx-auto flex items-center justify-between">
                 
                  <a href="/" class="cursor-pointer py-7 pr-7">
                      <img src={logo} width="170px"
                          height="40px"
                          alt="logo"/>
                  </a>

                  <ul class="flex space-x-9">
                      <li class="text-white font-poppins text-xl cursor-pointer py-7 hover:text-orange-400 transition-all duration-200 relative group">
                          <a href="#">Home</a>
                          <div class="absolute bottom-3 w-full h-1 bg-indigo-500 hidden group-hover:block transition-all duration-200"></div>
                      </li>

                      <li class="text-white font-poppins text-xl cursor-pointer py-7 hover:text-orange-400 transition-all duration-200 relative group">
                          <a href="#">About</a>
                          <div class="absolute bottom-3 w-full h-1 bg-indigo-500 hidden group-hover:block transition-all duration-200"></div>
                      </li>

                      <li class="text-white font-poppins text-xl cursor-pointer py-7 hover:text-orange-400 transition-all duration-200 relative group">
                          <a href="#">Contact</a>
                          <div class="absolute bottom-3 w-full h-1 bg-indigo-500 hidden group-hover:block transition-all duration-200"></div>
                      </li>
                  </ul>
              </div>
          </nav>
    </div>
  )
}

export default Nav