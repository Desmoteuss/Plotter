import React from 'react'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import"./Post.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post= ({displayName,userName,verified,text,image,avatar} )=> {
    return (
        <div className="post">
            <div className="post__avatar">
                {/* <Avatar srv={avatar}/> */}

            </div>  
            <div className="post__body">
                <div className="post__header">
                    <div className="post_headerText">
                        <h3>
                            trolokopter
                            <span className="post__headerSpecial">
                            <VerifiedUserIcon className="post__badge"/>
                            </span>
                        </h3>

                    </div>
                    <div className="header__Description">
                        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa


                        </p>

                    </div>
                </div>
            <image src="https://static.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg"> </image>
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
