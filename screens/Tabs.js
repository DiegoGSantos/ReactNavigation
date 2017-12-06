import RedScreen from './RedScreen';
import BlueScreen from './BlueScreen';
import GreenScreen from './GreenScreen';
import { TabNavigator } from 'react-navigation';

const Tabs = TabNavigator({
  BlueScreen: {
    screen: BlueScreen,
  },
  GreenScreen: {
    screen: GreenScreen,
  },
});

export default Tabs;