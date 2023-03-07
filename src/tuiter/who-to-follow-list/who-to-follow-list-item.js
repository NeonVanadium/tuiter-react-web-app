import React from "react";
const WhoToFollowListItem = (
 {
   who = { userName: 'user', handle: 'hande', avatarIcon: 'pic.png' }
 }
) => {
 return(
  <a href="" className="list-group-item list-group-item-action mb-0 pb-0">
      <div className="row">
          <div className="row">
              <div className="col-lg-2 col-auto">
                  <img src={who.avatarIcon} width="48px" height="48px" className="rounded-circle"/>
              </div>
              
              <div className="col ms-1">
                  <b>{who.userName}</b> <i className="bi bi-check-circle"></i>
                  <p>@{who.handle}</p>
              </div>
          </div>
          
          <div className="col">
              <button className="btn btn-primary position-absolute align-middle end-0 me-3">Follow</button>
          </div>
      </div>
  </a>
 );
};
export default WhoToFollowListItem;