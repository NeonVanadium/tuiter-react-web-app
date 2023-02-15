function WhoToFollowListItem(who) {
    return(`
    <a href="" class="list-group-item list-group-item-action mb-0 pb-0">
        <div class="row">
            <div class="row">
                <div class="col-lg-2 col-auto">
                    <img src="${who.avatarIcon}" width="48px" height="48px" class="rounded-circle">
                </div>
                
                <div class="col ms-1">
                    <b>${who.userName}</b> <i class="fa fa-check-circle"></i>
                    <p>@${who.handle}</p>
                </div>
            </div>
            
            <div class="col">
                <button class="btn btn-primary position-absolute align-middle end-0 me-3">Follow</button>
            </div>
        </div>
    </a>
    `)
}
export default WhoToFollowListItem