import React, { useState, useRef, useEffect } from 'react';
import { IonContent, IonInput, IonButton, IonList, IonItem, IonText, IonIcon } from '@ionic/react';
import './theme/theme.css';

import { send } from 'ionicons/icons';

type Message = {
    sender: 'user' | 'bot',
    content: string,
};

const Coach: React.FC = () => {
    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState<Message[]>([]);
    const bottomRef = useRef(null);

    const sendMessage = () => {
        if (message.trim() !== '') {
            const userMessage: Message = {
                sender: 'user',
                content: message,
            };
            const botMessage: Message = {
                sender: 'bot',
                content: 'Hi',
            };
            setChatHistory([...chatHistory, userMessage, botMessage]);
            setMessage("");
        }
    };

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [chatHistory]);

    return (
        <IonContent>
            <div className="main-content">

                <IonList>
                    {chatHistory.map((message, index) => (
                        <IonItem key={index} style={{ padding: 0 }}>
                            <div className={`message ${message.sender}`}>
                                <IonText className="message-content">
                                    {message.content}
                                </IonText>
                            </div>
                            <div style={{ clear: 'both' }}></div>
                        </IonItem>



                    ))}
                    <div ref={bottomRef} />
                </IonList>
                <div className="input-container">
                    <div className="message-input">
                        <IonInput
                            value={message}
                            placeholder="Enter message..."
                            onIonChange={(e) => setMessage(e.detail.value!)}
                        />
                    </div>
                    <div className="send-button-round" onClick={sendMessage}>
                        <IonIcon icon={send} />
                    </div>
                </div>
            </div>

        </IonContent>
    );
};

export default Coach;
