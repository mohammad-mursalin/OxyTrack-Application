import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PieDonut from "./components/PieDonut";
import DataProvider from "./store/dataFetch";

function App() {
  return (
    <>
      <DataProvider>
        <PieDonut />
      </DataProvider>
    </>
  );
}

export default App;
