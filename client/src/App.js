
import { useState } from 'react';
import '../src/styles/global.css';
import Home from './pages/Home/Home';
import Selection from './pages/Selection/Selection';
import RestaurantChoice from './pages/RestaurantChoice/RestaurantChoice';
import Admin from './pages/Admin/Admin';
import SelectionGuest from './pages/SelectionGuest/SelectionGuest';

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
      {currentPage === "restaurantChoice" && <RestaurantChoice onNavigate={navigateTo} name={selectedName} /> }
      {currentPage === "selectionGuest" && <SelectionGuest onNavigate={navigateTo} name={selectedName} selectedName={selectedName} onNameClick={handleNameClick} />}
      {currentPage === "admin" && <Admin onNavigate={navigateTo}/>}
    </div>
  );
}

export default App;
