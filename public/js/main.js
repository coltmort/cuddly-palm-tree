
function newPage(e){
    if(!e.target.closest('article')){
        return
    } else {
        let post = e.target.closest('article')
        let postID = post.getAttribute('data-note');
        window.location.href = `/api/post/${postID}`
    }
}

// async function requestPost(e) {
//     if(!e.target.closest('article')){
//         return
//     } else {
//         let post = e.target.closest('article')
//         let postID = post.getAttribute('data-note');
//         console.log(postID)
//         const res = await fetch(`/api/post/${postID}`, {
//             method: 'GET',
//         })
//         console.log(res)
//     }
// }

let grid = document.querySelector('#post-grid')



grid.addEventListener('click', newPage)
