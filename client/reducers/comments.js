function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.payload.author,
        text: action.payload.comment
      }];
    case 'REMOVE_COMMENT':
      const i = action.payload.index;
      return [
        ...state.slice(0, i),
        ...state.slice(i + 1)
      ];
    default:
      return state;
  }
}


function comments(state = [], action) {
  if(action.type == 'ADD_COMMENT' || action.type == 'REMOVE_COMMENT') {
    return {
      ...state,
      [action.payload.postId]: postComments(
        state[action.payload.postId], action)
    }
  }
  return state;
}

export default comments;
