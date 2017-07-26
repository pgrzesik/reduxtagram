import { handleActions } from 'redux-actions';


const comments = handleActions({
  'ADD_COMMENT': (state, action) => {
    const currentComments = state[action.payload.postId] || [];
    return {
      ...state,
      [action.payload.postId]: [
        ...currentComments,
        {
          user: action.payload.author,
          text: action.payload.comment
        }
      ]
    }
  },
  'REMOVE_COMMENT': (state, action) => ({
    ...state,
    [action.payload.postId]: [
      ...state[action.payload.postId].slice(0, action.payload.index),
      ...state[action.payload.postId].slice(action.payload.index + 1),
    ]
  })
}, [])

export default comments;
