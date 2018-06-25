import { connect } from 'react-redux';

import RecipeCard from '../../components/recipe_card';

const mapStateToProps = (state, props) => {
  return {
    recipe: state.recipe,
  };
};

export default connect(mapStateToProps)(RecipeCard);
