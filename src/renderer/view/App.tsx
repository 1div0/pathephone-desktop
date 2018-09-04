import * as React from 'react';

import StartScreen from '../ui/StartScreen';
import CloseScreen from './App/CloseScreen';
import LockScreen from './App/LockScreen';
import ReadyScreen from './App/ReadyScreen';
import Root from './App/Root';

interface IProps {
  onDidMount: () => void;
  hasStartScreen: boolean;
  hasLockScreen: boolean;
  hasReadyScreen: boolean;
  hasCloseScreen: boolean;
}

class App extends React.Component<IProps> {
  public componentDidMount = this.props.onDidMount;

  public render() {
    const {
      hasStartScreen, hasLockScreen, hasReadyScreen, hasCloseScreen, ...restProps
    } = this.props;
    return (
      <Root>
        {
          hasStartScreen && (
            <StartScreen {...restProps} />
          )
        }
        {
          hasReadyScreen && (
            <ReadyScreen />
          )
        }
        {
          hasCloseScreen && (
            <CloseScreen />
          )
        }
        {
          hasLockScreen && (
            <LockScreen />
          )
        }
      </Root>
    );
  }
}

export default App;
