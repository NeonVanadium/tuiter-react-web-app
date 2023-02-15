import PostSummaryItem from "./postsummaryitem.js"
import posts from "./posts.js"
function PostSummaryList() {
    var items = ``
    for (var i = 0; i < posts.length; i++) {
        items += PostSummaryItem(posts[i])
    }
    return items
}
export default PostSummaryList