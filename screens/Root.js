import { StackNavigator } from 'react-navigation';
import RedScreen from './RedScreen';
import BlueScreen from './BlueScreen';
import Tabs from './Tabs';

const Root = StackNavigator({
    Tabs: {
      screen: Tabs,
    },
    RedScreen: {
      screen: RedScreen,
    },
  }, {
    mode: 'modal',
    headerMode: 'none',
  });

  export default Root;