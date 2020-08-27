import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";


 const Widgets= ()=> {
    return (
        <div className="widgets">
          <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon" />
            <input placeholder="Search " type="text" />
          </div>
    
          <div className="widgets__widgetContainer">
            <h2>What's happening on Twitter:</h2>
    
            <TwitterTweetEmbed tweetId={"1278422339051499522"} />
    
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="bbcworld"
              options={{ height: 400 }}
            />
 
       
          </div>
        </div>
      );
    }

export default Widgets;
