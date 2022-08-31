let getInput = document.querySelector('.container .git-repo input');
let getRepo = document.querySelector('.Git-button');
let showData = document.querySelector('.show-data');
getRepo.onclick = function () {
    getRepos()
};
function getRepos() {
    if (getInput.value == "") {
        showData.innerHTML = `<span style="background-color:#fff; padding:20px;">Please Enter The Name Of The Github Ripository</span>`;
    }
    else {
        fetch('https://api.github.com/users/'+getInput.value+'/repos')
        .then((response) => {
            if (response != {}) return response.json();
            else return "Please Enter A Valid UserName";
        })
        .then((repos) => {
            showData.innerHTML = ``;
            //loop on repos
            repos.forEach(function (repo) {   
                let mainDiv = document.createElement('div');
                mainDiv.classList.add('divStyle');
                let repoNameConta = document.createElement('p');
                repoNameConta.classList.add('repo-name');
                let repoName = document.createTextNode(repo.name);
                repoNameConta.appendChild(repoName);
                let repoURL = document.createElement('a');
                repoURL.classList.add('Git-button');
                let repoURLText = document.createTextNode("Visit");
                repoURL.href = repo.html_url;
                repoURL.appendChild(repoURLText);
                mainDiv.appendChild(repoNameConta);
                mainDiv.appendChild(repoURL);
                showData.append(mainDiv);
                });
        }).catch((err) => {
            Error(showData.innerHTML =`<span style="background-color:#fff;  padding:20px;">Invalid UserName!!</>`);
        })
    }
}; 