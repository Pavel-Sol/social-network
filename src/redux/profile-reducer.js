import { usersAPI, profileAPI } from './../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

let initalState = {
  dataPost: [
    { id: 1, message: 'hi, how are you', likesCount: 7 },
    { id: 2, message: 'hi, check my new photo', likesCount: 1 },
  ],
  newPostText: 'some text',
  profile: null,
  status: '------',
};

const profileReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        dataPost: [...state.dataPost, newPost],
        newPostText: '',
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export let addPostActionCreator = () => {
  return { type: ADD_POST };
};

export let updateNewPostTextCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export let setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export let setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export let getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export let getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};

export let updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultcode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
