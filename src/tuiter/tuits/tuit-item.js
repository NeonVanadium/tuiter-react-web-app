import React from "react";
import TuitStats from "./tuit-stats";

const TuitItem = (
 { post }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-10">
       <div>{post.userName} <i className="bi bi-check-circle-fill text-primary"></i> {post.handle} ・ {post.time}</div>
       <div>{post.tuit}</div>
     </div>
     <div className="col-2">
       <img width={70} className="float-end rounded-3" src={`${post.image}`}/>
     </div>
     <TuitStats post={post}/>
   </div>
  </li>
 );
};
export default TuitItem;