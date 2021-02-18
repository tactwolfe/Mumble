import React, { useEffect ,useState } from 'react'
import { Avatar } from "@material-ui/core";
import { Link} from 'react-router-dom';

import './SidebarChat.css';
import { db } from '../../../../firebase';

const SidebarChat=(props)=> {

    const [seed ,setSeed] = useState('');
    const[messages ,setMessages] = useState('');

    //we use this useeffect to fetch all the messages from a particular room then displayed the latest message along with our sidebar chat room name
    useEffect(()=>{
        if(props.id){
            db.collection('rooms').doc(props.id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => {
                   return doc.data()
                }));
            })
        }
    },[props.id])


    //we use this useEffect to generate a random no. that will be use as seed to fetch random avatar photo from human dicebear api 
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[])


    // console.log(props.roomName)

    return <Link to={`/chatroom/rooms/${props.id}`}>
                <div className="sidebarChat">
                    <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
                    <div className="sidebarChat_info">
                        <h2>{props.roomName}</h2>
                        <p>{messages[0]?.message}</p>
                    </div>
                </div>
            </Link>
    
}

export default SidebarChat
