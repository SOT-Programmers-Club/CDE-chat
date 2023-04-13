import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../firebase-configure";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";



export const Chat = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "mkl");
  const erf = useRef(null);
  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = []; 
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages);
      setMessages(messages);
    });

    return () => unsuscribe();
  }, []);
  useEffect(() => {
    erf.current?.scrollIntoView();
  }, [messages])
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newMessage === "") return;
    
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      email: auth.currentUser.email,
      room,
    });
    setNewMessage("");

    
  };

  return (
    <div className="chat-app">
      <div className="chat1">
        <div className="inbox"><h1>Inbox</h1></div>
        <div className="header"><h1>Welcome to: <span>{room.toUpperCase()}</span></h1></div>
      </div>
      <div className="hj">
        {messages.map((message) => (
          
          <div key={message.id} className="comp">
            <div className="dv">{message.user}:</div> <p className="p">{message.text}</p>
          </div>
        ))}
        <div ref={erf}></div>
      </div>
      <form onSubmit={handleSubmit} className="new-message-form">
        <input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
          className="inp"
          placeholder="Type your message here..."
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};