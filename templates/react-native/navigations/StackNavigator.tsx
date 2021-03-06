import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import React from 'react';
import {useThemeContext} from '@dooboo-ui/native-theme';

export type StackParamList = {
  default: undefined;
};

export type StackNavigationProps<
  T extends keyof StackParamList = 'default'
> = StackNavigationProp<StackParamList, T>;

const Stack = createStackNavigator<StackParamList>();

function RootNavigator(): React.ReactElement {
  const {theme} = useThemeContext();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTitleStyle: {color: theme.text},
        headerTintColor: theme.tintColor,
      }}>
      {/* <Stack.Screen name="Page" component={Page} /> */}
    </Stack.Navigator>
  );
}

export default RootNavigator;
