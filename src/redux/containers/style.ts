import _ from 'lodash';
import { connect } from 'react-redux';

import Style from '../../components/recipe_builder/tabs/style/style';
import { BJCPStyles, lookupStyle } from '../../constants/bjcp';

const mapStateToProps = (state) => {
  const code = _.get(state.activeRecipe, 'style.code');
  return {
    style: code ? lookupStyle(code) : BJCPStyles[_.random(0, BJCPStyles.length - 1)],
  };
};

export default connect(
  mapStateToProps
)(Style);
