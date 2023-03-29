import React from "react";
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../services/tuits-thunks";
import {useDispatch} from "react-redux";


const TuitItem = ( { post } ) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return(
    <li className="list-group-item">
    <div className="row">
      <div className="col-10">
          <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(post._id)}></i>
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