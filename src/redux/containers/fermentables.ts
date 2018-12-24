import _ from 'lodash';
import { connect } from 'react-redux';

import { Fermentables } from '../../components/recipe_builder/tabs';

const mapStateToProps = (state) => {
  return {
    fermentables: _.get(state.activeRecipe, 'fermentables', null),
  };
};

export default connect(
  mapStateToProps
)(Fermentables);
