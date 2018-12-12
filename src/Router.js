import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import PomodoroContainer from './components/PomodoroContainer';
import LoginFormContainer from "./components/LoginFormContainer";

const RouterComponent = () => {
  return (
    <Router>

      <Scene key="root" hideNavBar
             // drawer={true}
      >

        <Scene key="auth" >
          <Scene
            key="login"
            component={LoginFormContainer}
            headerLayoutPreset='center'
            navigationBarStyle={styles.sceneNavBarStyle}
            titleStyle={styles.navBarTitleStyle}
            title="Please Login"
          />

        </Scene>

        <Scene
          initial
          key="main"

          headerLayoutPreset='center'
          navigationBarStyle={styles.sceneNavBarStyle}
          titleStyle={styles.navBarTitleStyle}
        >
          <Scene
            key="Pomodorox"
            component={PomodoroContainer}
            title="------   Pomodoro Timer   ------"
          />
        </Scene>

      </Scene>

    </Router>
  );
};

const styles = {
  sceneNavBarStyle: {
    backgroundColor: '#716F77',
  },
  navBarTitleStyle: {
    color: '#2C2727',
    // fontSize: 20
  },
};

export default RouterComponent;