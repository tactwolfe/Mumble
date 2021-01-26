import React , {Component} from 'react';
import {NavLink , Route } from 'react-router-dom';
import axios from 'axios';

import './Homepage.css';

import Logo from '../../../assets/Images/logo.png';
import Logout from '../../../assets/Images/logout.svg';
import BackIllustration from '../../../assets/Images/backIllustration.svg';

import Post from '../../../component/Post/Post';
import Aux from '../../../hoc/Auxillary';


class HomePage extends Component {

    // state={
    //     posts : []
    // }

    // //lifecycle method that will call the fetch post method whenever our component is mounted
    // componentDidMount() {
    //     this.getPost();
    // }

    // //method that will fetch for us from the database
    // getPost = ()=> {
    //     axios.get('/home')
    //     .then((response)=>{
    //         const data = response.data;
    //         this.setState({post : data});
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     });
    // }

    //method that will display our post
    // displayPost = (posts)=> {
    //     if(!posts.length){
    //         return <h1 style={{color : "white"}}>Sorry no post Have submitted by any of our users yet !!</h1>
    //     }else{
    //         posts.map( post => {
    //             return <Post author={post.name} posts={post.para} key={post.key}/>
    //         });
    //     }
    // }


    state={
        posts : [
            {
                key : '1',
                para : "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                key : '2',
                para : "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                key : '3',
                para : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                key : '4',
                para : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                key : '5',
                para : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                key : '6',
                para : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                key : '7',
                para : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                key : '8',
                para : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                key : '9',
                para : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                key : '10',
                para : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                key : '11',
                para : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                key : '12',
                para : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                key : '13',
                para : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },

        ]
    }

    render(){

        const post = this.state.posts.map( post => {
            return <Post author={post.name} posts={post.para} key={post.key}/>
        });

        return(
            <div className="home">
                <header className="home_navigation">
                    <nav className="home_nav">
                        <div>
                            <img src={Logo} alt="logo" className="home_nav_logo"/>
                            <h2 className="home_nav_name">MUMBLE</h2>
                        </div> 
                        <ul className="home_nav_ul">
                            <li className="home_nav_links"><NavLink to="/homepage" exact className="home_nav_link">Home</NavLink></li>
                            <li className="home_nav_links"><NavLink to="/my-post" exact className="home_nav_link">My posts</NavLink></li>
                            <li className="home_nav_links"><NavLink to="/new-post"  className="home_nav_link">Post Something</NavLink></li>
                            <li className="home_nav_links"><NavLink to="/chat-selection"  className="home_nav_link">Chat Rooms</NavLink></li>
                        </ul>
                        <NavLink to="/logout" exact><img src={Logout} alt="logout" className="logout"/></NavLink>
                    </nav>
                </header>
                <div className="home_postholder">
                    <img alt='back-img' src={BackIllustration} className="background_img"/>
                    <Route to="/homepage" exact  render={()=><Aux>{post}</Aux>}/>
                    
                </div>
            </div>
        );
    }
}

export default HomePage;