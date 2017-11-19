import { StackNavigator } from 'react-navigation';

import GameListScreen from './screens/gameListScreen';
import GameScreen from './screens/gameScreen';

const RootNavigator = StackNavigator({
  Home: { screen: GameListScreen },
  Game: { screen: GameScreen }
});

export default RootNavigator;
