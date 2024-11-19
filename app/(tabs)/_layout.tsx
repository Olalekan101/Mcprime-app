import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={14} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Admin Section',
          headerStyle:{backgroundColor:'#222831'},
          headerTintColor:'#EEEEEE',
          headerTitleStyle:{fontSize:16,fontStyle:"italic"},
          // headerStatusBarHeight:0,
          
          
          tabBarIcon: ({ color }) => <TabBarIcon name="minus-square" color={color} />,
          tabBarInactiveBackgroundColor:'#1e2328',
          tabBarActiveTintColor:'#1e2328',
         
          
          headerRight: () => (

            <Link href="/1frame" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),        
        }}
      />
      <Tabs.Screen
        name="linksapp"
        
        options={{
          title: 'Links',
          tabBarIcon: ({ color }) => <TabBarIcon name="link" color={color} />,
          tabBarInactiveBackgroundColor:'#1e2328',
          tabBarActiveTintColor:'#1e2328',
          headerStyle:{backgroundColor:'#222831'},
          headerTintColor:'#EEEEEE',
          headerTitleStyle:{fontSize:16,fontStyle:"italic"},
        }}
      />
      <Tabs.Screen
        name="sheet"
        
        options={{
          title: 'Score Sheet',
          tabBarIcon: ({ color }) => <TabBarIcon name="minus-square" color={color} />,
          tabBarInactiveBackgroundColor:'#1e2328',
          tabBarActiveTintColor:'#1e2328',
          headerStyle:{backgroundColor:'#222831'},
          headerTintColor:'#EEEEEE',
          headerTitleStyle:{fontSize:16,fontStyle:"italic"},
        }}
      />
      <Tabs.Screen
        name="reportcard"
        options={{
          title: 'Report Card',
          tabBarIcon: ({ color }) => <TabBarIcon name="minus-square" color={color} />,
          tabBarInactiveBackgroundColor:'#1e2328',
          tabBarActiveTintColor:'#1e2328',
          headerStyle:{backgroundColor:'#222831'},
          headerTintColor:'#EEEEEE',
          headerTitleStyle:{fontSize:16,fontStyle:"italic"},
        }}
      />
    </Tabs>
  );
}
