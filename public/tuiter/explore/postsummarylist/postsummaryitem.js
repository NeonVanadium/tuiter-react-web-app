function PostSummaryItem(post) {
    return(`
    <div class="pt-1 pb-1 border-top row">
        <div class="col">
            <p class="m-0">${post.topic}</p>
            <b>${post.userName}</b> ${post.time}
            <p class="m-0">
                <b class="fs-6">${post.title}</b>
            </p>
            <p class="m-0">123K Tweets</p>
        </div>
        <div class="col-3 col-lg-2">
            <img class="wd-float-right" height="100px" width="100px" src="${post.image}"/>
        </div>
    </div>
    `)
}
export default PostSummaryItem