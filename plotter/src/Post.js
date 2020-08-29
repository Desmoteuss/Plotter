import React from 'react';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import"./Post.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import Avatar from '@material-ui/core/Avatar'

const Post= ({displayName,userName,verified,text,image,avatar} )=> {
    return (
        <div className="post">
            <div className="post__avatar">
                 <Avatar srv={avatar}/> 

            </div>  
            <div className="post__body">
                <div className="post__header">
                    <div className="post_headerText">
                        <h3>
                            {displayName}
                            <span className="post__headerSpecial">
    {verified&&<VerifiedUserIcon className="post__badge"/> }@{userName}
                            </span>
                        </h3>

                    </div>
                    <div className="post__headerDescription">
                        <p> {text}</p>
                        


                     

                    </div>
                </div>
            <image src= {image}> </image>
                                <div className="post__footer">
                                <ChatBubbleOutlineIcon fontSize="small"/>
                                <RepeatIcon  fontSize="small"/>
                                <FavoriteBorderIcon  fontSize="small"/>
                                <PublishIcon  fontSize="small"/>
                                    

                                </div>
            </div>
        </div>
    )
}

export default Post
