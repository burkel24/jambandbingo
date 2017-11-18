import { StackNavigator } from 'react-navigation';

import GameListScreen from './screens/gameListScreen';

const RootNavigator = StackNavigator({
  Home: { screen: GameListScreen }
});

export default RootNavigator;
