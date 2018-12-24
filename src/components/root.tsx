import React, { PureComponent } from 'react';

import Navigator from './navigator';

type Props = {
  initializeApp: () => void,
};

export default class Root extends PureComponent<Props> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    return (
      <Navigator />
    );
  }
}
