import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Media from "./pages/media/media";
import SettingsPage from "./pages/settings/settingsPage";
import Clock from "./components/Date";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="Esta div é só porque tem de ter um parent">
      <Clock />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Media />} />
          <Route path="/settings" element={<SettingsPage />} />


        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;
