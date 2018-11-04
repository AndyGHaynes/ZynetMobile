import { connect } from 'react-redux';

import Root from '../../components/root';
import { initializeApp } from '../actions/app';

export default connect(
  () => ({}), {
    initializeApp,
  }
)(Root);
