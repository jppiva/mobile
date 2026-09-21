import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        tabBarActiveTintColor: "#0f62fe",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          headerTitle: "Projeto Base",
        }}
      />
      <Tabs.Screen
        name="api-jogos"
        options={{
          title: "api-jogos",
          headerTitle: "api-jogos",
        }}
      />
      <Tabs.Screen
        name="put"
        options={{
          title: "put",
          headerTitle: "put",
        }}
      />
      <Tabs.Screen
        name="getById"
        options={{
          title: "getById",
          headerTitle: "getById",
        }}
      />
    </Tabs>
  );
}