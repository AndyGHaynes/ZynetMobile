import {
  GestureResponderEvent,
  RegisteredStyle,
  ViewStyle,
} from 'react-native';

export abstract class LoadingScreen {
  loading: boolean;
  error: boolean;
}

export class ViewProps {
  children?: JSX.Element | JSX.Element[];
  flex?: number;
  style?: RegisteredStyle<ViewStyle> | RegisteredStyle<ViewStyle>[];
}

export class TouchableProps extends ViewProps {
  onPress: (e: GestureResponderEvent) => void;
}
