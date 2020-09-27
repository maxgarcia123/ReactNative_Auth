import React from 'react';

import Deshboard from '../pages/Dashboard';
import { createStackNavigator }  from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Deshboard" component={Deshboard} />
    </AppStack.Navigator>
);

export default AppRoutes;