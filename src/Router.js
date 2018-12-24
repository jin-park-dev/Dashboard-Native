import React from 'react';
import { Scene, Router, Drawer, Actions } from 'react-native-router-flux';

import PomodoroContainer from './components/PomodoroContainer';
import LoginFormContainer from "./components/LoginFormContainer";
import RouterDrawerComponent from "./RouterDrawerComponent";
import {Image, View} from "react-native";
import { Icon } from 'react-native-elements'


const RouterDrawerIconComponent = () => {
  return (
    <View>
      {/*<Image*/}
        {/*source={require('./arq-menu-128.png')}*/}
        {/*// style={{ width: 84, height: 27 }}*/}
      {/*/>*/}
      <Icon
        // reverse
        name='menu'
        // type='ionicon'
        // color='#517fa4'
      />
    </View>
  );
};

const RouterComponent = () => {
  return (
    <Router>

      <Scene key="root"
             init
             hideNavBar
      >
        <Drawer
          hideNavBar
          key="drawer"
          drawerIcon={RouterDrawerIconComponent}
          // drawerImage={require('./arq-menu-128.png')}

          contentComponent={RouterDrawerComponent}

          // drawerWidth={100}
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
