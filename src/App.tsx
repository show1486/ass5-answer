import './App.css'
import { getCountries } from './api/countries';
import CountryList from './components/CountryList';

function App() {

  getCountries();
  return (
    <>
   <CountryList/>
    </>
  )
}

export default App
