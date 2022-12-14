import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/login";
import Homepage from '../screens/Homepage'


const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={Homepage}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}