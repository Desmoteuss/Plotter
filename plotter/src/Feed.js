import React from 'react';
import "./Feed.css";
import Post from "./Post.js";
import PlottBox from "./PlottBox";
const Feed = () => {

return (
    <div className="feed">
{/* {{Header}} */}
<div className="feed__header">


<h2> Plotter</h2>
</div>
{/*{BoX}*/}
<PlottBox/>

{/* {Post} */}
<Post/>

{/* {Post} */}
{/* {Post} */}
{/* {Post} */}


</div>
);
}


export default Feed