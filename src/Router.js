import React from 'react';
import { Scene, Router, Drawer, Actions } from 'react-native-router-flux';

import PomodoroContainer from './components/PomodoroContainer';
import LoginFormContainer from "./components/LoginFormContainer";
import RouterDrawerComponent from "./RouterDrawerComponent";

const RouterComponent = () => {
  return (
    <Router>

      <Scene key="root"
             init
             hideNavBar
      >
        <Drawer
          hideNavBar
          key="scene4"
          // drawerImage={Images.menuIcon}
          contentComponent={RouterDrawerComponent}
          // drawerWidth={styles.drawerWidth}
          // drawerPosition="right"

        >
          <Scene key="auth"

          >
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
            init
            drawer={true}

            key="main"
            headerLayoutPreset='center'
            navigationBarStyle={styles.sceneNavBarStyle}
            titleStyle={styles.navBarTitleStyle}
          >
            <Scene
              key="pomodoro"
              component={PomodoroContainer}
              title="------   Pomodoro Timer   ------"
            />
          </Scene>
        </Drawer>
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
