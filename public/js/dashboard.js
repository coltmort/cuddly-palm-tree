document.getElementById('add-post').addEventListener('click', handleAddPost)

async function handleAddPost(){
    document.location.replace('/api/users/addpost')

}
