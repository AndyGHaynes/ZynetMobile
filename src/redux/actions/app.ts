export enum ActionTypes {
  INITIALIZE_APP = 'INITIALIZE_APP',
}

export const initializeApp = () => ({
  type: ActionTypes.INITIALIZE_APP,
});
