import React, { useState , useRef } from 'react';
import './NewPost.css';
import { useAuth } from '../../container/Authentication/AuthProvider';
import firebase from 'firebase';
import { db , storage} from '../../firebase';
import {useHistory} from 'react-router-dom';

const NewPost =  () => {


    const [image , setImage] = useState(null);
    const [caption, setCaption] = useState('');
    const [progress, setProgress] = useState(0);
    const [error , setError] = useState('');   
    // const [url, setUrl] = useState('');
    const history = useHistory();

    const { currentUser } = useAuth();
    const postRef = useRef();

    const fileSelectedHandler = (e)=> {
        if(e.target.files[0]){
          setImage(e.target.files[0]);
        }  
    }

    const handleUpload = (e)=> {

      e.preventDefault()

        if(image){
          const uploadTask = storage.ref(`images/${image.name}`).put(image);
          uploadTask.on(
            'state_changed',
            (snapshot)=>{
                const progress = Math.round(
                  snapshot.bytesTransferred / snapshot.totalBytes * 100
                );
                setProgress(progress)
            },
            (error) => {
              console.log(error);
              alert(error.message);
              setError(error);
            },
            ()=> {
  
                storage
                  .ref('images')
                  .child(image.name)
                  .getDownloadURL()
                  .then( url => {
  
                      db.collection('posts').add({
                          timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                          caption : caption,
                          imageUrl : url,
                          email : currentUser.email
                      });
  
                      setProgress(0);
                      setCaption('');
                      setImage(null);
                  })
  
            },
            history.push('/homepage')
          )
        }
        else if(!image){

            db.collection('posts').add({
              timestamp : firebase.firestore.FieldValue.serverTimestamp(),
              caption : caption,
              imageUrl : null,
              email : currentUser.email
          });

          setProgress(0);
          setCaption('');
          setImage(null);
        }
        history.push('/homepage')

    }



    return(
        <div className="new_post">   
        
            <form  className="new_post_form" onSubmit={handleUpload}>
                <label 
                htmlFor="write" 
                className="new_post_form_label">
                Post whatever you have in your Mind 🧐
                </label>

                <br/>

                <textarea 
                name="write" 
                id="write" 
                cols="100" 
                rows="5" 
                className="new_post_form_textarea" 
                ref={postRef}
                onChange={ e => setCaption(e.target.value)}
                value={caption}>
                </textarea>

                <br/>

                <progress value={progress} max='100'/>

                <br/>

                <input 
                type="file" 
                className="new_post_form_fileupload" 
                onChange={fileSelectedHandler}/>

                <br/>
        
                <input 
                type="submit" 
                className="new_post_form_button"/>

            </form>
        </div>
    );
}

export default NewPost;