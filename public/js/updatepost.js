document.getElementById('update-post').addEventListener('click', handleUpdatePost)
const title = document.getElementById('post-title')
const post = document.getElementById('post-content')

async function handleUpdatePost(event){
    event.preventDefault()
    const postId = event.target.dataset.id
    console.log(postId)
    const titleValue = title.value
    const postValue = post.value

    const data = {}
    data.title = titleValue
    data.post = postValue
    data.id = postId

    const response = await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })

    if(response.ok){
        window.location.assign('/api/users/dashboard')
    }
}