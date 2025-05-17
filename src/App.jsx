import ApiVisualizer from "./components/api-visualizer";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

function App() {
  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <ApiVisualizer />
    </div>
  );
}

export default App;
