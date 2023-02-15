const NavigationSidebar = () => {
    return(`
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>
          <a href="" class="list-group-item list-group-item-action">
            <i class="fa fa-home" height="20px"></i>
            <span class="d-none d-xl-inline">Home</span>
          </a>
          <a href="" class="list-group-item list-group-item-action">
              <i class="fa fa-hashtag" height="20px"></i>
              <span class="d-none d-xl-inline">Explore</span>
          </a>
          <a href="" class="list-group-item list-group-item-action">
              <i class="fa fa-bell" height="20px"></i>
              <span class="d-none d-xl-inline">Notifications</span>
          </a>
          <a href="" class="list-group-item list-group-item-action">
              <i class="fa fa-envelope" height="20px"></i>
              <span class="d-none d-xl-inline">Messages</span>
          </a>
          <a href="" class="list-group-item list-group-item-action">
              <i class="fa fa-bookmark" height="20px"></i>
              <span class="d-none d-xl-inline">Bookmarks</span>
          </a>
          <a href="" class="list-group-item list-group-item-action">
              <i class="fa fa-list" height="20px"></i>
              <span class="d-none d-xl-inline">Lists</span>
          </a>
          <a href="" class="list-group-item list-group-item-action">
              <i class="fa fa-user" height="20px"></i>
              <span class="d-none d-xl-inline">Profile</span>
          </a>
          <a href="" class="list-group-item list-group-item-action">
              <i class="fa fa-minus-circle" height="20px"></i>
              <span class="d-none d-xl-inline">More</span>
          </a>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
   }
export default NavigationSidebar;