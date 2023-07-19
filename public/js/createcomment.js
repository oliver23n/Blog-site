const createComment = async(e) =>{
    e.preventDefault();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const comment = document.querySelector('.textarea').value.trim();

    const response = await fetch ('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({
            comment,id
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok){
        document.location.reload();
    }else{
        alert('problem');
    }
}

document.querySelector('.comment-form').addEventListener('submit',createComment);