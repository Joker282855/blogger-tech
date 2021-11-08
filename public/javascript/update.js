async function updateFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title-update').value.trim();
    const text = document.querySelector('#text-update').value.trim();
    const post_url = document.querySelector('#post_url-update').value.trim();
    
    if (title && text && post_url) {
        const response = await fetch('/api/post/1', {
            method: 'put',
            body: JSON.stringify({
                title,
                text,
                post_url
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
