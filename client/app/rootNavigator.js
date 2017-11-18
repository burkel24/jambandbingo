import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/homeScreen';

const RootNavigator = StackNavigator({
  Home: { screen: HomeScreen }
});

export default RootNavigator;
