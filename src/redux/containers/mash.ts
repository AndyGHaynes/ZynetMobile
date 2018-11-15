import _ from 'lodash';
import { connect } from 'react-redux';

import { Mash } from '../../components/recipe_builder/tabs';

const mapStateToProps = (state) => {
  return {
    schedule: _.get(state.recipeCard, 'recipe.mash.schedule', {}),
  };
};

export default connect(
  mapStateToProps
)(Mash);
