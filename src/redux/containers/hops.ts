import _ from 'lodash';
import { connect } from 'react-redux';

import { Hops } from '../../components/recipe_builder/tabs';

const mapStateToProps = (state) => {
  return {
    hops: _.get(state.activeRecipe, 'hops', null),
  };
};

export default connect(
  mapStateToProps
)(Hops);
