document.getElementById('add-post').addEventListener('click', handleAddPost)
document.querySelectorAll('#delete').forEach(e => e.addEventListener('click', removePost))
document.querySelectorAll('#update').forEach(e => e.addEventListener('click', handleUpdatePost))



function handleAddPost(){
    document.location.assign('/api/post/addpost')

}

async function handleUpdatePost(e){

    let click = e.target

    let post =  click.closest('#post').dataset.id


    window.location.assign(`/api/post/updatepost/${post}`)

}

async function removePost(e){

    let click = e.target

    let post =  click.closest('#post').dataset.id
    const response = await fetch(`/api/post/${post}`,{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    if(response.ok){
        window.location.reload('/api/users/dashboard')
    }
}