
async function newPage(e){
    if(!e.target.closest('article')){
        return
    } else {
        let post = e.target.closest('article')
        let postID = post.getAttribute('data-note');
        localStorage.setItem("current-post", postID)
        document.location.replace(`/api/post/${postID}`)
    }
}


let grid = document.querySelector('#post-grid')

grid.addEventListener('click', newPage)
