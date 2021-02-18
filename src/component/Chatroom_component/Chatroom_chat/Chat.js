import React,{useEffect, useState ,useContext} from 'react'
import {Avatar} from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import TelegramIcon from '@material-ui/icons/Telegram';
import ChatBubble from './Chat_bubble/ChatBubble';
import { useParams } from 'react-router-dom';
import {db} from '../../../firebase';
import firebase from 'firebase';
import {useAuth} from '../../../container/Authentication/AuthProvider';
import Background from '../../../assets/Images/cubes.png';
// import ScrollToBottom from 'react-scroll-to-bottom';


//our stylesheet for this component
import './Chat.css';

const Chat=(props)=> {

    const {currentUser} = useAuth();

    const [seed , setSeed] = useState('');
    const [input , setInput] = useState('');
    const {roomId} = useParams();
    const [roomName , setRoomName] = useState('');
    const [messages , setMessages] = useState([]);
    // const [userName,setUserName] = useState('');

    console.log(props.userName);







    //we use this useEffect to fetch room name from our room collection in firestore db and set room name in chat header dynamically and this useeffect trgiggers when ever the roomId chnage as we have set
    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name)
            });

            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map( doc=> doc.data() ))
            })
        }
    },[roomId])

    //we use this useEffect to generate a random no. that will be use as seed to fetch random avatar photo from human dicebear api and this useeffect triggers when ever the roomId chnage as we have set
    useEffect(()=> {
        setSeed(Math.floor(Math.random()*5000));
    },[roomId])

    // console.log(messages);

    const sendMessage = (e)=> {
        e.preventDefault();

        // console.log('you typed' , input);

        db.collection('rooms').doc(roomId).collection('messages').add({
            message : input,
            name : currentUser.email,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        })


        setInput('');
    }

    const message = messages.map( message => {
        return <ChatBubble name={message.name} message={message.message} timestamp={new Date(message.timestamp?.toDate()).toUTCString()}/>  
    })

    const style ={
        backgroundImage: Background,
    }

    return (

        <div className='chat'>
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
                <div className="chat_headerInfo">
                    <h3 className="chat_headerInfo-roomname">{roomName}</h3>
                    <p>
                    Last message on : {''}
                    {new Date(messages[messages.length -1]?.timestamp?.toDate()).toUTCString()}
                    </p>

                </div>

                <div className="chat_headeremote">
                    (̶◉͛‿◉̶) 
                </div>
               
            </div>

            <div className="chat_body">
                {message}   
            </div>

            <div className="chat_footer">
                {/* <InsertEmoticonIcon/> */}
                <form>
                    <input className="chat_footer-input" type="text" placeholder='Write a message ...' onChange={(e)=> setInput(e.target.value)} value={input}/>
                    <button style={{visibility:'hidden',display:'none'}} type='submit' onClick={sendMessage}><TelegramIcon/></button>
                </form>
            </div>
        </div>
    )
}

export default Chat
