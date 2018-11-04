import { ActionTypes } from '../actions/db';

type Database = {
  initialized: boolean;
  lastSynced: Date;
  name: string;
  synchronizing: boolean;
};

type Databases = {
  [key: string]: Database,
};

const initialState = {
  ingredients: null,
};

export default (state: Databases = initialState, action): Databases => {
  switch (action.type) {
    case ActionTypes.INGREDIENT_DB_INITIALIZED:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          initialized: true,
        },
      };
    case ActionTypes.INGREDIENT_DB_SYNCED:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          lastSynced: new Date(),
          synchronizing: false,
        },
      };
    case ActionTypes.INITIALIZE_INGREDIENT_DB:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          initialized: false,
        },
      };
    case ActionTypes.SYNC_INGREDIENT_DB:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          synchronizing: true,
        },
      };
    default:
      return state;
  }
}
