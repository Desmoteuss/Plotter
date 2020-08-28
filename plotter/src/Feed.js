import React, {useState,useEffect} from 'react';
import "./Feed.css";
import Post from "./Post.js";
import PlottBox from "./PlottBox";
import db from './firebase';

const Feed = () => { const [posts, setPosts] = useState ([]);

useEffect(() =>{
db.collection('posts').onSnapshot(snapshot =>(
    setPosts(snapshot.docs.map(doc => doc.data()))
) )
},[]);







return (
<div className="feed">
{/* {{Header}} */}
<div className="feed__header">


<h2> Plotter</h2>
</div>
{/*{BoX}*/}
<PlottBox/>
{posts.map(post =>(

<Post
displayName= {post.displayName}
userName= {post.userName}
verified={post.verified}
text={post.text}
// avatar=""
// image=""
/>
))}




</div>
);
}


export default Feed;