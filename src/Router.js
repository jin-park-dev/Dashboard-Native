import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import PomodoroContainer from './components/PomodoroContainer';

const RouterComponent = () => {
  return (
    <Router>

      <Scene key="main" initial>
        <Scene
          key="Pomodoro"
          component={PomodoroContainer}
          title="Pomodoro"
        />
      </Scene>

    </Router>
  );
};

export default RouterComponent;