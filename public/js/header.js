document.querySelector('#dashboard').addEventListener('click', handleDashboardClick)

async function handleDashboardClick(){
    // let response = fetch('/api/user/dashboard', {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json'}
    // })

    window.location.replace('/api/users/dashboard')
}