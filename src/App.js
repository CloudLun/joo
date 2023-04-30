import LandingPage from "./LandingPage/LandingPage"
import Overview from "./CuisinePage/Overview";
import CuisinePage from "./CuisinePage/CuisinePage";
import IngredientPage from "./IngredientPage/IngredientPage";
import RegionPage from "./RegionPage/RegionPage";
import MonthPage from "./MonthPage/MonthPage";



function App() {
  return <div className="font-poppings bg-main">
    <LandingPage />
    <Overview />
    <CuisinePage />
    <IngredientPage />
    <RegionPage />
    <MonthPage />
  </div>;
}

export default App;
