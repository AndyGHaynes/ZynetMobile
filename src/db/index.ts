import _ from 'lodash';
import PouchDB from 'pouchdb-react-native';

import {
  Ingredient,
} from '../types/ingredients';

const dbName = 'ingredients';
const url = `http://localhost:5984/${dbName}`;

const ingredientDB = new PouchDB(dbName);
PouchDB.replicate(url, ingredientDB);

export function getIngredients(): Promise<Ingredient[]> {
  return ingredientDB.allDocs({
    include_docs: true,
  })
    .then((response) => {
      console.log('ingredientDB response', response);
      return _.map(response.rows, 'doc');
    })
    .catch((e) => {
      console.log('allDocs() error', e);
      return null;
    });
}
