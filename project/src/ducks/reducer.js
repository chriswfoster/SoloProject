import axios from "axios"
// Action Constants
const REQ_USER = "REQ_USER"
const GET_ALL_YOUR_POSTS = "GET_ALL_YOUR_POSTS"

const GET_ALL = "GET_ALL"
const TYPE_TITLE = "TYPE_TITLE"
const TYPE_DREAMAID = "TYPE_DREAMAID"
const TYPE_LIFE = "TYPE_LIFE"
const TYPE_STORY = "TYPE_STORY"

//Initial State

const initialState = {
  user: {},
  allposts: [],
  allyourposts: [],
  type_title: "",
  type_dreamaid: "",
  type_life: "",
  type_story: "",
  story_text: "",
  influence: "",
  back_story: ""

  //or can give it null as a starter value
}

//Reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQ_USER + "_PENDING": //pending tag is applied by redux promise middleware
      return Object.assign({}, state, { isLoading: true })
    case REQ_USER + "_FULFILLED":
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      })
    case GET_ALL + "_PENDING": //pending tag is applied by redux promise middleware
      return Object.assign({}, state, { isLoading: true })
    case GET_ALL + "_FULFILLED":
      return Object.assign({}, state, {
        isLoading: false,
        allposts: action.payload
      })
    case GET_ALL_YOUR_POSTS + "_PENDING":
      return Object.assign({}, state, { isLoading: true })
    case GET_ALL_YOUR_POSTS + "_FULFILLED":
      return Object.assign({}, state, {
        isLoading: false,
        allyourposts: action.payload
      })

    case TYPE_TITLE:
      return Object.assign({}, state, { type_title: action.payload })
    case TYPE_DREAMAID:
      return Object.assign({}, state, { type_dreamaid: action.payload })
    case TYPE_LIFE:
      return Object.assign({}, state, { type_life: action.payload })
    case TYPE_STORY:
      return Object.assign({}, state, { type_story: action.payload })

    default:
      return state
  }
}

//Action Creators
export function getUserInfo() {
  return {
    type: REQ_USER,
    payload: axios.get("/api/me").then(response => {
      return getAllYourPosts(response.data.user_id) && response.data
    })
  }
}

export function getAllYourPosts(userid) {
  return {
    type: GET_ALL_YOUR_POSTS,
    payload: axios.get(`/api/getyourposts/${userid}`).then(response => {
      return response.data
    })
  }
}

export function getAllPosts() {
  return {
    type: GET_ALL,
    payload: axios.get(`/api/getallposts/`).then(response => response.data)
  }
}

export function typeTitle(title) {
  return {
    type: TYPE_TITLE,
    payload: title
  }
}

export function typeAid(dreamaid) {
  return {
    type: TYPE_DREAMAID,
    payload: dreamaid
  }
}

export function typeInfluence(lifeinf) {
  return {
    type: TYPE_LIFE,
    payload: lifeinf
  }
}

export function typeStory(story) {
  return {
    type: TYPE_STORY,
    payload: story
  }
}
