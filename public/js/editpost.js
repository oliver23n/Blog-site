const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

const savePost = async (event) => {
    event.preventDefault();
const title = document.querySelector('#title').value;
const text = document.querySelector('#text').value;

if(title && text){
    const response = await fetch(`/api/dashboard/post/${id}`,
    {
        method: 'PUT',
        body: JSON.stringify({ title, text }),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(title,text);
    if(response.ok){
        document.location.replace('/dashboard')
    }else{
        alert('problem')
    }

}

}

const deletePost = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/dashboard/post/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed');
    }

}

const cancel = async (event) => {
    event.preventDefault();
    document.location.replace('/dashboard');

}

document.querySelector('#cancel').addEventListener('click',cancel);
document.querySelector('#delete').addEventListener('click',deletePost)
document.querySelector('.edit-form').addEventListener('submit',savePost);