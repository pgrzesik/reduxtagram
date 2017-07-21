import { createAction } from 'redux-actions';


export const increment = createAction(
  'INCREMENT_LIKES',
  (index) => ({ index })
);

export const addComment = createAction(
  'ADD_COMMENT',
  (postId, author, comment) => ({ postId, author, comment })
);

export const removeComment = createAction(
  'REMOVE_COMMENT',
  (postId, index) => ({ postId, index })
);
