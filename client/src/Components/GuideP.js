import React from 'react'
import { MdLabelImportant } from 'react-icons/md'

const GuideP = () => {
  return (
    <div>
          <div class="flex flex-col justify-between  w-full text-white">
              <h3 class=" text-[28px] leading-10 font-bold max-w-[500px]">Wondering how to start ? Here is a <span class="text-blue-500">Quick Guide</span></h3>
              <ul class="space-y-2 text-white mt-10">
                  <li class=" flex items-center space-x-2">
                      <i  class="text-sky-300"><MdLabelImportant /></i>
                      <span>Select a chat room you want to join</span>
                  </li>

                  <li class=" flex items-center space-x-2">
                      <i class="text-sky-300"><MdLabelImportant /></i>
                      <span>Provide your name for identification</span>
                  </li>

                  <li class=" flex items-center space-x-2">
                      <i class="text-sky-300"><MdLabelImportant /></i>
                      <span>Ensure the person you're chatting with uses the same room ID</span>
                  </li>

                  <li class=" flex items-center space-x-2">
                      <i class="text-sky-300"><MdLabelImportant /></i>
                      <span>Hit the "Join" button to enter the chat room. </span>
                  </li>

                  <li class=" flex items-center space-x-2">
                      <i class="text-sky-300"><MdLabelImportant /></i>
                      <span> Enjoy a seamless chatting experience! </span>
                  </li>

              </ul>
            
          </div>
    </div>
  )
}

export default GuideP