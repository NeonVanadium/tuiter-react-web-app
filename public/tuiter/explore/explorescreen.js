import PostSummaryList from "./postsummarylist/postsummarylist.js";

const ExploreComponent = () => {
    return(`
            <!--Search bar-->
            <div class="mb-1">
                <input class="col-md-11 col-10 float-left wd-rounded-input ps-3" type="text" width="100%" placeholder="Search Tuiter"/>

                <a class="col-md-1 col-2 d-inline" href="explore-settings.html">
                    <i class="fa fa-cog  d-inline align-middle wd-float-right" style="font-size: 2em;"></i>
                </a>
            </div>

            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="for-you.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html" tabindex="-1">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="entertainment.html" tabindex="-1">Entertainment</a>
                </li>
            </ul>

            <!--Big image-->
            <div class="position-relative">
                <img width="100%" src="https://cdn.wccftech.com/wp-content/uploads/2020/04/SpaceX-Starship-Mk1-17-scaled.jpg"/>
                <b class="position-absolute bottom-0 start-0 text-white fs-2 ms-2 mb-2">SpaceX's Starship</b>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
