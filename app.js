const github = new Github;
const ui = new UI;
const search = document.getElementById('searchUser')
search.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText).then(data => {
            if(data.profile.message === 'Not Found'){

            }
            else{
                ui.showProfile(data.profile);
            }
        });
    }
    else{

    }
})