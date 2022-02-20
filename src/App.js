import { Header } from "./components/Header";
import { UUIDGenerator } from "./components/UUIDGenerator";

export const App = () => {
  return (
    <>
      <Header title="UUID Generator" subtitle="Online UUID generator" />
      <UUIDGenerator />
    </>
  );
};

export default App;
