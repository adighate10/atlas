import "../App.css";
function CountryDetails(props) {
  const { data, children, isLoading } = props;
  const { states } = data;
  return (
    <div className="ListBox">
      <div className="box">
        <h1>States</h1>
        {children}
        {isLoading ? (
          <p>Loading . . .</p>
        ) : states && states.length ? (
          <div className="scrollbox">
            <ul>
              {states.map((state) => (
                <li key={state.name}>{state.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No information available for this country</p>
        )}
      </div>
    </div>
  );
}
export default CountryDetails;
