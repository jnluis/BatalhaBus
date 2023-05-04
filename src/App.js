import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Media from "./pages/media/media";
import SettingsPage from "./pages/settings/settingsPage";
import Clock from "./components/Date";
import { Link } from 'react-router-dom';
import Games from "./pages/games/games";
import Browser from "./pages/browser/Browser";

function App() {
  return (
    <>
      <Clock />
      
        <Routes>

          <Route path="/" element={<Media />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/browser" element={<Browser/>} />


        </Routes>
    

      <Footer />

    </>
  );
}

export default App;
