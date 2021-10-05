function updateFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title-update').value.trim();
    
    if (title) {
        fetch('/api/post/1', {
            method: 'put',
            body: JSON.stringify({
                title
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {consnole.log(response)})
    }
}

document.querySelector('.update-form').addEventListener('submit', updateFormHandler);
