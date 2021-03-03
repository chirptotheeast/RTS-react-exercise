import './App.css';
import SearchBar from './components/SearchBar'
import Results from './components/Results'
import UserSearch from './components/UserSearch'

function App() {
  return (
    <div className="App">
     this is the hacker news search app
     <UserSearch />
     <SearchBar />
     <Results />
    </div>
  );
}

export default App;
