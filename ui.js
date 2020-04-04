class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }
    showProfile(user){
        this.profile.innerHTML = `
            <div class = "card card-body mb-3">
                <div class = "row">
                    <div class = "col-md-3">
                        <img class = "img-fluid mb-2" src = "${user.avatar_url}">                                       
                        <a href="${user.html_url}" target = "_blank" class = "btn btn-block btn-primary mb-3">View Profile</a>                
                    </div>
                    <div class = "col-md-9">
                        <span class = "badge badge-primary">Public Repos : ${user.public_repos}</span>
                        <span class = "badge badge-secondary">Public Gists : ${user.public_gists}</span>                    
                        <span class = "badge badge-success">Followers : ${user.followers}</span>
                        <span class = "badge badge-info">Following : ${user.following}</span>
                        <br><br>
                        <ul class = "list-group">
                            <li class = "list-group-item">Company : ${user.company}</li>
                            <li class = "list-group-item">Website/Blog : ${user.blog}</li>
                            <li class = "list-group-item">Location : ${user.location}</li>
                            <li class = "list-group-item">Member Since : ${user.created_at}</li>                        
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-4">Latest Repositories</h3>
            <div id="repos"></div>
        `;
    }
    showAlert(msg, className){
        this.clearAlert();
       
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div,search);

        setTimeout(() => this.clearAlert(), 3000);
    }
    clearAlert(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
    clearProfile(){
        const profile = document.getElementById('profile')
        
        while(profile.firstChild){
            profile.removeChild(profile.firstChild);
        }
    }
}