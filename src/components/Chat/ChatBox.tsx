import React, { useState, useEffect, useRef } from 'react';
import { IoSend as IconSend } from "react-icons/io5";
import { Message } from './Message.tsx';
import { io, Socket } from 'socket.io-client';
import { useUser } from '../../Contexts/UserContext.tsx';
interface MessagesType {
  id: string;
  user: string | undefined;
  text: string;
}
export const ChatBox: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  // eslint-disable-next-line
  const [messages, setMessages] = useState<MessagesType[]>([]);
  const [messagesGlobal, setMessagesGlobal]=useState<MessagesType[]>([])
  const { user } = useUser();
  const socketRef = useRef<Socket | null>(null); // Usa useRef para mantener la instancia del socket
  useEffect(() => {
    // Inicializa el socket solo una vez
    if (!socketRef.current) {
      socketRef.current = io('http://localhost:3000');
      console.log('Socket initialized');
    }
    const socket = socketRef.current;
    socket.on('connect', () => {
      console.log('Connected to server, user: ', user);
    });
    socket.on('disconnect', () => {
      console.log('Disconnected from server, user: ', user);
    });
    socket.on('chat message',(newMessage: MessagesType)=>{
      setMessagesGlobal((prevMessages)=>([...prevMessages,newMessage]))
    })
    // Limpia el socket al desmontar el componente
    return () => {
      socket.disconnect();
      console.log('Socket disconnected');
    };
  }, [user])
  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        user: user?.username || 'Anonymous',
        text: message,
      };
      socketRef.current?.emit('chat message', newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage('');
    } else {
      console.log('Message is empty');
    }
  };
  return (
    <section className='chatBox'>
      <h2 className='chatBox__title'>Chat Argentina</h2>
      <div className="chatBox__display">
        {messagesGlobal.map((message, index) => (
          <Message key={index} user={message.user} text={message.text} />
        ))}
      </div>
      <form className="chatBox__form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage} type="button">
          <IconSend />
        </button>
      </form>
    </section>
  );
};