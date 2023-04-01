document.querySelectorAll('#delete').forEach(e => e.addEventListener('click', removeComment))
document.getElementById('post-comment').addEventListener('click', handlePostComment)
let commentInput = document.getElementById('comment-input')
commentInput.addEventListener('keydown', isEnter)

function isEnter(event){

    if(event.key === 'Enter'){

        handlePostComment()
    }
}

async function handlePostComment(){
    let commentValue ={ "comment": commentInput.value}
    let postID = localStorage.getItem("current-post")
    const response = await fetch(`/api/comment/${postID}`, {
        method: 'POST',
        body: JSON.stringify(commentValue),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        window.location.reload()
      }
}

async function removeComment(e){

    let click = e.target
    // console.log(click)
    let comment =  click.closest('#comment').dataset.id
    // console.log(comment)
    const response = await fetch(`/api/comment/${comment}`,{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    if(response.ok){
        window.location.reload()
    }
}