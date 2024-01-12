import './App.css';
import WithQuery from './hoc/WithQuery'

import Countries from './components/Countries';
import Languages from './components/Languages';

import {LANGUAGE_QUERY, COUNTRIES_QUERY} from "./queries"

function App() {
  const WithCountryQuery = WithQuery(Countries, COUNTRIES_QUERY);
  const WithLanguageQuery = WithQuery(Languages, LANGUAGE_QUERY);
  return (
    <>
      <header className='Header'>
        <h1> List of Countries and Languages Worldwide </h1>
      </header>
      <div className='App'>
        <WithCountryQuery />
        <WithLanguageQuery />
      </div>
    </>
    
  )
}

export default App;
