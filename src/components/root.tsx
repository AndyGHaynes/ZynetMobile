import {
  Container,
  StyleProvider,
} from 'native-base';
import React, { PureComponent } from 'react';

import getTheme from '../../native-base-theme/components';
import theme from '../../native-base-theme/variables/custom';
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
      <StyleProvider style={getTheme(theme)}>
        <Container
          theme={theme}
          style={{
            backgroundColor: theme.defaultBackgroundColor,
          }}
        >
          <Navigator />
        </Container>
      </StyleProvider>
    );
  }
}
