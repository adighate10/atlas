import React, { useEffect, useMemo } from "react";
import "../App.css";
function Countries(props) {
  const { data, children, country, onCountrySelect, isLoading } = props;

  const handleButtonClick = (e, item, ref) => {
    if (item) {
      onCountrySelect(item);
    }
  };

  useEffect(() => {
    if (!country && data && data.length) {
      onCountrySelect(data[0]);
    }
  }, [data, country, onCountrySelect]);

  const filterCountryData = (myData) => {
    return myData;
  };

  const countryData = useMemo(() => filterCountryData(data), [data]);

  return (
    <div className="ListBox">
      <div className="box">
        <h1>Countries</h1>
        {children}
        {isLoading ? (
          <p>Loading . . .</p>
        ) : countryData.length ? (
          <div className="scrollbox">
            <ul>
              {countryData.map((item) => {
                const ref = React.createRef();
                return (
                  <button
                    className={
                      country && item.name === country.name
                        ? "listButtonSelected"
                        : "listButton"
                    }
                    ref={ref}
                    key={item.code}
                    onClick={(e) => handleButtonClick(e, item, ref)}
                  >
                    {item.name}
                  </button>
                );
              })}
            </ul>
          </div>
        ) : (
          <p>Nothing to display</p>
        )}
      </div>
    </div>
  );
}

export default Countries;
