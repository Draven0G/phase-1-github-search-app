const apiUrl = "https://api.github.com";

// Function to fetch user information from GitHub API
function fetchUserInfo(username) {
    const url = `${apiUrl}/users/${username}`;
    return fetch(url, {
        headers: {
            "Accept": "application/vnd.github.v3+json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        return {
            login: data.login,
            name: data.name,
            bio: data.bio,
            avatarUrl: data.avatar_url,
            publicRepos: data.public_repos
        };
    })
    .catch(error => {
        console.error("Error fetching user information:", error);
        throw error;
    });
}


