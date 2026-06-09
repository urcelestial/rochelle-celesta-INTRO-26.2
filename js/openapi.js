const btnProfile = document.getElementById('fetch-profile');
const btnRepos = document.getElementById('fetch-repos');
const profileInfo = document.getElementById('profile-info');
const reposInfo = document.getElementById('repos-info');

btnProfile.addEventListener('click', fetchGithubProfile);
btnRepos.addEventListener('click', fetchGithubRepos);

async function fetchGithubProfile() {
    try {
        const response = await fetch('https://api.github.com/users/urcelestial');
        const data = await response.json();
        console.log("Profile Data:", data);
        profileInfo.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.avatar_url}" alt="Profile Picture" width="150">
            <p>${data.bio}</p>
            <p>Followers: ${data.followers} | Following: ${data.following}</p>
        `;
    } catch (error) {
        console.error("Error fetching profile:", error);
        profileInfo.textContent = "Failed to load profile information.";
    }
}

async function fetchGithubRepos() {
    try {
        const response = await fetch('https://api.github.com/users/urcelestial/repos');
        const repos = await response.json();
        console.log("Repositories:", repos);
        reposInfo.innerHTML = '<h2>Repositories</h2>';
        const repoList = document.createElement('ul');
        repos.forEach(repo => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
            repoList.appendChild(listItem);
        });

        reposInfo.appendChild(repoList);
    } catch (error) {
        console.error("Error fetching repositories:", error);
        reposInfo.textContent = "Failed to load repositories.";
    }
}
