export default (store) => (next) => (action) => {
  console.tron.debug('dispatching', action);
  let result = next(action);
  console.tron.debug('next state', store.getState());
  return result;
}
