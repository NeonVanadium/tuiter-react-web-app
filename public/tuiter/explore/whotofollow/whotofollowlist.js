import WhoToFollowListItem from "./whotofollowlistitem.js";
import who from "./who.js"
const WhoToFollowList = () => {
   return (`
            <div class="list-group">
                ${DrawItems()}
            </div>
`); }
export default WhoToFollowList

function DrawItems() {
    var items = ``
    for (var i = 0; i < who.length; i++) {
        console.log(who[i])
        items += `${WhoToFollowListItem(who[i])}`
    }
    return items
}