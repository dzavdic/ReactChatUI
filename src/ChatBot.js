import React, { useState, useEffect } from "react";

import BotMessage from "./components/BotMessage";
import UserMessage from "./components/UserMessage";
import Messages from "./components/Messages";
import Input from "./components/Input";

import API from "./ChatbotAPI";

import "./index.css";
import Header from "./components/Header";

const Chatbot=() =>{
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={async () => await API.GetChatbotResponse("hi")}
        />
      ]);
    }    
    loadWelcomeMessage();
  }, []);

  const send = async text => {
    const newMessages = messages.concat(
      <UserMessage 
        key={messages.length + 1} text={text} />,

      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetChatbotResponse(text)}
      />
    );
    setMessages(newMessages);
  };

  const [showBot, setShowBot] = useState(true);

  function show(event) {
      event.preventDefault();
      event.stopPropagation();
      setShowBot(true);
  }

  function hide(event) {
      event.preventDefault();
      event.stopPropagation();
      setShowBot(false);
  }

  if(showBot){
    return (
        <div className="chatbot">
          <Header showBot={showBot} onShow={hide}/>
          <Messages messages={messages} />
          <Input onSend={send} />
        </div>
      );
  } else {
    return (
        <div className="chatbot hidden">
          <Header showBot={showBot} onShow={show}/>
        </div>
      );
  }

}
export default Chatbot;