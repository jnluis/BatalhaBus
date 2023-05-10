import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Media from "./pages/media/media";
import SettingsPage from "./pages/settings/settingsPage";
import Clock from "./components/Date";
import Games from "./pages/games/games";
import Browser from "./pages/browser/browser";
import Home from "./pages/home/home";
import TripDetails from "./pages/trip-details/TripDetails";
import TicTacToe from "./pages/Jogo_Galo/components/TicTacToe";

function App() {
  return (
    <>
      <Clock />
      
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/browser" element={<Browser/>} />
          <Route path="/games" element={<Games />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path ="/trip-details" element={<TripDetails/>} />
          <Route path ="/JogoGalo" element = {<TicTacToe/>} />


        </Routes>
    

      <Footer />

    </>
  );
}

export default App;
