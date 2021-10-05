async function updateFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title-update').value.trim();
    
    if (title) {
        const response = await fetch('/api/post/1', {
            method: 'put',
            body: JSON.stringify({
                title
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/posted');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.update-form').addEventListener('submit', updateFormHandler);
