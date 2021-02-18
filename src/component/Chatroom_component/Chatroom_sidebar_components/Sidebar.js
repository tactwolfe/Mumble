import React,{useState , useEffect} from 'react';
import {SearchOutlined} from '@material-ui/icons';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {db} from '../../../firebase';

import './Sidebar.css'

import  Logo from '../../../assets/Images/logo.png';
import SidebarChat from './Sidebar_chat/SidebarChat';


const Sidebar = ()=> {

    const [addRoom, setAddRoom] = useState('');
    const [rooms , setRooms] =useState([]);
    const [search, setSearch] =useState('');
    const[trigger ,setTrigger]=useState(false);

    //a life cycle hook in React functional Component that will basically do task of all lifecycle mthods of class component all by himeself
    useEffect(() => {
   
        //here we are fetching data of our room name from firestore db collection named as rooms
           const unsubscribe =  db.collection('rooms').onSnapshot(snapshot => {

            //once data is fetched we are adding it to our rooms state hooks using setRoom method
            setRooms(snapshot.docs.map(doc => ({
                id:doc.id,
                room:doc.data()
                })
            ))
        })
        return ()=> {
            unsubscribe();
        }
    }, [])
    // console.log(rooms);

    //this const will map through our rooms array in state and will pass props from each fetched room data from database into our sidebarchat component
    const room = rooms.filter(({room}) => {
        if(search === ''){
            return room;
        }
        else if (room.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            return room;
        }
    }).map(({id, room})=>{
        return <SidebarChat key={id} id={id} roomName={room.name}/>
    })

    const toggler = ()=> {
        setTrigger(!trigger);
    }

    const onCreateRoom = ()=> {
        if(addRoom){

            db.collection('rooms').add({
                name : addRoom
            })

            setTrigger(false);
            setAddRoom('');

        }
         
            console.log(addRoom);      
}

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                {/* <img src={Logo} alt="logo" className="sidebar_logo"/> */}
                <h1 className="sidebar_para">MUMBLE</h1>
            </div>
            <div className="sidebar_addRooms" >
                <h3 className="sidebar_addRooms-text" onClick={toggler}>Add a Room <AddCircleOutlineIcon/></h3>
                {
                    trigger ? 
                    
                    <form className="sidebar_addRooms-form" onSubmit={onCreateRoom}>
                        <input type="text" className="sidebar_addRooms-form-input" placeholder='Enter a room name' onChange={e=> setAddRoom(e.target.value)}/>
                        <button disabled={!addRoom} type='submit' className="sidebar_addRooms-form-button">Create Room</button>
                    </form>

                    :

                    null
                    
                }
              
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined/>
                        <input type="text" placeholder="Search for a Chat" value={search} onChange={(e)=> setSearch(e.target.value)}/>
                </div> 
            </div>
            <div className="sidebar_chat">
                {room}
            </div>
        </div>
    )
}

export default Sidebar;