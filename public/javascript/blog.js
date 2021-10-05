async function postCreateHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title-blog').value.trim();
    const text = document.querySelector('#text-blog').value.trim();
    const post_url = document.querySelector('#post_url-blog').value.trim();

    if (title && text && post_url) {
        const response = await fetch('/api/post', {
            method: 'post',
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

document.querySelector('.login-form').addEventListener('submit', postCreateHandler);