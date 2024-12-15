
import { useState } from 'react';
import '../src/styles/global.css';
import Home from './pages/Home/Home';
import Selection from './pages/Selection/Selection';
import RestaurantChoice from './pages/RestaurantChoice/RestaurantChoice';
import SelectionGuest from './pages/SelectionGuest/SelectionGuest';
import Resultat from './pages/Resultat/Resultat';

function App() {
const [currentPage, setCurrentPage] = useState("home");
const [selectedName, setSelectedName]=useState("")

const navigateTo = (page) => {
  setCurrentPage(page);
};

const handleNameClick = (name) => {
  setSelectedName(name);
};

  return (
    <div>
      {currentPage === "home" && <Home onNavigate={navigateTo}/>}
      {currentPage === "selection" && selectedName === "" && <Selection onNavigate={navigateTo} selectedName={selectedName} onNameClick={handleNameClick} />}
      {currentPage === "restaurantChoice" && <RestaurantChoice onNavigate={navigateTo} name={selectedName} onNameClick={handleNameClick}  /> }
      {currentPage === "selectionGuest" && <SelectionGuest onNavigate={navigateTo} name={selectedName} selectedName={selectedName} onNameClick={handleNameClick} />}
      {currentPage === "resultat" && <Resultat onNavigate={navigateTo}  onNameClick={handleNameClick}/>}
    </div>
  );
}

export default App;
