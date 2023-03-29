import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../services/tuits-thunks";


const TuitStats = ({ post }) => {
  const dispatch = useDispatch()
  return(
    
    <div className="row">
        <div className="col-2">
            <div><i className="bi bi-chat me-2"></i>{post.replies}</div>
        </div>
        <div className="col-2">
            <div><i className="bi bi-arrow-repeat me-2"></i>{post.retuits}</div>
        </div>
        <div className="col-3">  
            <i onClick={() => dispatch(updateTuitThunk({
            ...post,
            likes: post.likes + 1
            }))} className="bi bi-heart-fill me-2 text-danger"></i>
            Likes: {post.likes}
        </div>
        <div className="col-3">  
            <i onClick={() => dispatch(updateTuitThunk({
            ...post,
            dislikes: post.dislikes + 1
            }))} className="bi bi-hand-thumbs-down-fill me-2"></i>
            Disikes: {post.dislikes}
        </div>

        <div className="col-2">
            <p className="bi bi-share me-2"></p>
        </div>   
   </div>
  );
};
export default TuitStats;