import React from "react";
import WhoToFollowListItem
       from "./who-to-follow-list-item";
import {useSelector} from "react-redux";
const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);
  return(
    <>
    <h2>Who to follow</h2>
    <ul className="list-group">
      {
        whoArray.map(who =>
          <WhoToFollowListItem
            key={who._id} who={who}/> )
      }
    </ul>
    </>
  );
};
export default WhoToFollowList;