import RedScreen from './RedScreen';
import BlueScreen from './BlueScreen';
import { TabNavigator } from 'react-navigation';
// import default from './App';

const Tabs = TabNavigator({
  RedScreen: {
    screen: RedScreen,
  },
  BlueScreen: {
    screen: BlueScreen,
  },
});

export default Tabs;