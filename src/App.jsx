import CalculatorBody from "./components/CalculatorBody";
import { FunctionsProvider } from "./components/FunctionsContext";

function App() {
  return (
    <FunctionsProvider>
      <CalculatorBody />
    </FunctionsProvider>
  );
}

export default App;
