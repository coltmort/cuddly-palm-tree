document.getElementById('save-post').addEventListener('click', handleSavePost)
const title = document.getElementById('post-title')
const post = document.getElementById('post-content')

async function handleSavePost(event){
    event.preventDefault()
    const titleValue = title.value
    const postValue = post.value
    console.log(titleValue, postValue)
    const data = {}
    data.title = titleValue
    data.post = postValue

    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })

    console.log(response)
    if(response.ok){
        window.location.assign('/api/users/dashboard')
    }
}