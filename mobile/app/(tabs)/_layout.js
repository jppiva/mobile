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
        name="aulas"
        options={{
          title: "Aulas",
          headerTitle: "Conteúdo",
        }}
      />
      <Tabs.Screen
        name="interface"
        options={{
          title: "interface",
          headerTitle: "interface",
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          title: "sobre",
          headerTitle: "cara do piva",
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: "post",
          headerTitle: "post",
        }}
      />
      <Tabs.Screen
        name="api-jogos"
        options={{
          title: "api-jogos",
          headerTitle: "api-jogos",
        }}
      />
    </Tabs>
  );
}