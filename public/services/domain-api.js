const URL = '/api';

const token = localStorage.getItem('TOKEN');
// redirect if not on home page
if (!token && !(location.pathname === '/' || location.pathname === '/index.html')) {
    const searchParams = new URLSearchParams();
    searchParams.set('redirect', location.pathname);
    location = `/?${searchParams.toString()}`;
}

async function fetchWithError(url, options) {

    if (token) {
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
    }

    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok) {
        return data;
    }
    else {
        throw data.error;
    }
}

export function signUp(user) {
    const url = `${URL}/auth/signup`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)        
    });
}

export function signIn(credentials) {
    const url = `${URL}/auth/signin`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)        
    });
}

export function getFrontPage() {  
    const url = `${URL}/news`;
    return fetchWithError(url);
}

export function getUser(id) {  
    const url = `${URL}/users/${id}`;
    return fetchWithError(url);
}


export function keepNewsItem(frontPageItem) {  
    const url = `${URL}/news/${frontPageItem.id}`;
    return fetchWithError(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(frontPageItem)
    });
    
}

export function deleteFavorite(id) {  
    const url = `${URL}/favorites/${id}`;
    return fetchWithError(url, {
        method: 'DELETE'
    });
}

export function addFavorite(fav) {
    const url = `${URL}/favorites`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(fav)
    });
}

export function getFavorites() {
    const url = `${URL}/favorites/?search=Canadian`;
    return fetchWithError(url);
}

export function getFavorite(id) {
    const url = `${URL}/favorites/${id}`;
    return fetchWithError(url);
    
}