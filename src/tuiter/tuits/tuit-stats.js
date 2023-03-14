import React from "react";

const TuitStats = ({ post }) => {
  return(
    <div className="row">
        <div className="col-3">
            <div><i className="bi bi-chat me-2"></i>{post.replies}</div>
        </div>
        <div className="col-3">
            <div><i className="bi bi-arrow-repeat me-2"></i>{post.retuits}</div>
        </div>
        <div className="col-3">
            <div><i className={post.liked ? "bi bi-heart-fill text-danger me-2" : "bi bi-heart me-2"}></i>{post.likes}</div>
        </div>
        <div className="col-3">
            <p className="bi bi-share me-2"></p>
        </div>   
   </div>
  );
};
export default TuitStats;