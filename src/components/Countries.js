
import '../App.css';
function Countries(props) {
    const {data, children} = props
    return (
        <div className='ListBox'>
          <search />
          <h1>Countries</h1>
          {children}
          {
          data.length && <ul>
            {data.map((country) => (
              <li key={country.code}>{country.name}</li>
            ))}
            </ul>
            }
        </div>
      );
}
export default Countries;