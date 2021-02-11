export const SIGN_UP_URL = 'https://foodfortravels.herokuapp.com/users'
export const LOGIN_URL = 'https://foodfortravels.herokuapp.com/sessions'
export let GET_BLOGPOST_URL = (tags) => `https://foodfortravels.herokuapp.com/blogposts?tags=${tags.join()}` 
export let BLOGPOST_DETAILS_URL = (id) => `https://foodfortravels.herokuapp.com/blogposts/${id}`
export let CREATE_POST_URL = (id) => `https://foodfortravels.herokuapp.com/users/${id}/blogposts`
export let ADD_DESCRIPTION_URL = (id) => `https://foodfortravels.herokuapp.com/users/${id}/description`