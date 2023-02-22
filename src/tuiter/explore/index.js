import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
 return(
   <>
        <div className="row">
            <div className="col-11 position-relative">
                <input placeholder="Search Tuiter"
                        className="form-control rounded-pill ps-5"/>
                <i className="bi bi-search position-absolute 
                            wd-nudge-up"></i>
            </div>
            <div className="col-1">
                <i className="wd-bottom-4 text-primary float-end bi 
                            bi-gear-fill fs-2 position-relative"></i>
            </div>
        </div>

        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" href="#">For You</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="for-you.html">Trending</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="trending.html">News</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="sports.html" tabindex="-1">Sports</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="entertainment.html" tabindex="-1">Entertainment</a>
            </li>
        </ul>

        <div className="position-relative">
            <img width="100%" src="https://cdn.wccftech.com/wp-content/uploads/2020/04/SpaceX-Starship-Mk1-17-scaled.jpg"/>
            <b className="position-absolute bottom-0 start-0 text-white fs-2 ms-2 mb-2">SpaceX's Starship</b>
        </div>
        <PostSummaryList/>
   </>
 );
};
export default ExploreComponent;