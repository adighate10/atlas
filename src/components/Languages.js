import '../App.css';
function Languages(props, ) {
    const {data, children} = props;
    return (
        <div className='ListBox'>
          <h1 style={{textAlign: 'right'}}>Languages</h1>
          {children}
          {
          data.length && <ul>
            {data.map((language) => (
              <li key={language.code}>{language.name}</li>
            ))}
            </ul>
            }
        </div>
      );
}
export default Languages;