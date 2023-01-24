import axios from "axios";
import { RegisterInputTypes } from "../pages/Register/Register";
import { LoginInputTypes } from "../pages/Login/Login";
import { InputTypes } from "../pages/User/Profile/Profile";

export const BASE_URL = "http://localhost:5000";

export const API_ROUTES = {
    USER: {
        GET: `${BASE_URL}/user/me`,
        REGISTER: `${BASE_URL}/user/register`,
        LOGIN: `${BASE_URL}/user/login`,
        SECURITY: `${BASE_URL}/user/security`,
        UPDATE: `${BASE_URL}/user/account`
    },
    CATEGORY: {
        GET: `${BASE_URL}/genre`,
    },
    AUTHOR: {
        NEW: `${BASE_URL}/author`,
        GET: `${BASE_URL}/author/genreId/1`,
        BY_GENRE: `${BASE_URL}/author/genreId/`
    },
    BOOK: {
        NEW: `${BASE_URL}/book`,
        BY_AUTHOR: `${BASE_URL}/author/books/`,
        BY_GENRE: `${BASE_URL}/book/genreId/`

    },
    SEARCH:{
        books:"book",
        author:"author"
    }

}

export async function handleRegister(user: RegisterInputTypes) {
    return axios.post(API_ROUTES.USER.REGISTER, user);
}

export async function handleLogin(user: LoginInputTypes) {
    return axios.post(API_ROUTES.USER.LOGIN, user);
}

export async function getCategories() {
    return axios.get(API_ROUTES.CATEGORY.GET);
}

export async function getAuthors() {
    return axios.get(API_ROUTES.AUTHOR.GET);
}

export async function getAuthorByGenre(genreId: number) {
    console.log(API_ROUTES.AUTHOR.BY_GENRE + genreId);

    return axios.get(API_ROUTES.AUTHOR.BY_GENRE + genreId);
}

export async function getBookByGenre(genreId: number) {
    return axios.get(API_ROUTES.BOOK.BY_GENRE + genreId);
}

export async function getAuthorBooks(authorId: number, token: string) {
    return axios.get(API_ROUTES.BOOK.BY_AUTHOR + authorId, {
        headers: {
            Authorization: token
        }
    });
}

export async function getUser(token: string) {
    return axios.get(API_ROUTES.USER.GET, {
        headers: {
            Authorization: token
        }
    })
}

export async function updateSecurity(data: {
    email: string,
    currentPassword: string,
    newPassword: string
}, token: string) {
    return axios.put(API_ROUTES.USER.SECURITY, data, {
        headers: {
            Authorization: token
        }
    });
}
export async function updateuser(data: FormData, token: string) {
    return axios.put(API_ROUTES.USER.UPDATE, data, {
        headers: {
            Authorization: token
        }
    });
}
export async function handleNewAuthor(author: FormData, token: string) {
    return axios.post(API_ROUTES.AUTHOR.NEW, author, {
        headers: {
            Authorization: `${token}`
        }
    });
}

export async function handleNewBook(book: FormData, token: string) {
    return axios.post(API_ROUTES.BOOK.NEW, book, {
        headers: {
            Authorization: `${token}`
        }
    });
}

export async function handleSearchResource(resource: string, query: string) {
    if (resource === "books") return axios.get(`${BASE_URL}/book/search?book=${query}`)
    return axios.get(`${BASE_URL}/${resource}/search?${resource}=${query}`)
}