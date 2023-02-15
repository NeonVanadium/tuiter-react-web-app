import WhoToFollowList from "./whotofollow/whotofollowlist.js"
import ExploreComponent from "./explorescreen.js"
import NavigationSidebar from "./navigationsidebar/index.js";

function exploreComponent() {
    $('#wd-explore').append(`
        <h2>Explore</h2>
    <div class="row mt-2">
      <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        ${NavigationSidebar()}
      </div>
      <div class="col-10 col-lg-7 col-xl-6">
        ${ExploreComponent()}
      </div>
      <div class="col-xl-3 col-lg-4 d-lg-inline d-none">
        ${WhoToFollowList()}
      </div>
    </div>
    `);
 }
 $(exploreComponent);