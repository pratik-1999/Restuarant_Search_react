import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

// another one to use the soil monitoring API

const navigator = createStackNavigator({
  Search: SearchScreen,
  DishesShow: ResultsShowScreen

}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }

});

export default createAppContainer(navigator);//creates a default react component.
