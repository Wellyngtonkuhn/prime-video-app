import { QueryClient, QueryClientProvider } from "react-query";
import { StatusBar } from "expo-status-bar";

import { AppContainer } from "./src/styles";
import Routes from "./src/routes";

const queryClient = new QueryClient();

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <Routes />
        <StatusBar style="light" />
      </AppContainer>
    </QueryClientProvider>
  );
}
