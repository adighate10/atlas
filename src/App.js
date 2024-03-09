import "./App.css";
import WithQuery from "./hoc/WithQuery";

import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";

import { COUNTRY_DETAILS_QUERY, COUNTRIES_QUERY } from "./queries";
import { useCallback, useState } from "react";

const WithCountryQuery = WithQuery(Countries, COUNTRIES_QUERY);
const WithStatesQuery = WithQuery(CountryDetails, COUNTRY_DETAILS_QUERY);

function App() {
  const [country, setCountry] = useState(undefined);

  const updateCountry = useCallback((item) => {
    setCountry(item);
  }, []);

  return (
    <div className="Main">
      <div className="Header">
        <b> List of Countries and States </b>
      </div>
      <div className="App">
        <WithCountryQuery onCountrySelect={updateCountry} country={country} />
        <WithStatesQuery
          variables={
            country ? { variables: { code: country.code } } : undefined
          }
        />
      </div>
    </div>
  );
}

export default App;
