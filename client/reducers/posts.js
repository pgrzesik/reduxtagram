import { handleAction } from 'redux-actions';


const posts = handleAction('INCREMENT_LIKES', (state, action) => {
  const i = action.payload.index;
  return [
    ...state.slice(0, i),
    { ...state[i], likes: state[i].likes + 1 },
    ...state.slice(i + 1)
  ]
}, []);

export default posts;
