import 'react-native';

import React, {ReactElement} from 'react';
import {RenderAPI, cleanup, render} from '@testing-library/react-native';
import {createTestElement, createTestProps} from '../../../../test/testUtils';

import BottomTabNavigator from '../BottomTabNavigator';
import {NavigationContainer} from '@react-navigation/native';

describe('[BottomTab] navigator', () => {
  let props: any;
  let component: ReactElement;
  let testingLib: RenderAPI;

  beforeEach(() => {
    props = createTestProps();

    component = createTestElement(
      <NavigationContainer>
        <BottomTabNavigator {...props} />
      </NavigationContainer>,
    );

    testingLib = render(component);
  });

  afterEach(() => cleanup());

  it('should renders without crashing', () => {
    jest.useFakeTimers();

    const baseElement = testingLib.toJSON();

    jest.runAllTimers();
    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});
