import { useState } from "react"
import '../App.css';

const Search = (props) => {
    const {onChange} = props;
    const [searchStr, setSearchStr] = useState("");

    const onStrChange = (event) => {
        const {value} = event.target;
        setSearchStr(value);
        onChange(value);
    }

    return (
        <div className="Search"> 
            <input value={searchStr} placeholder="Search" onChange={e => onStrChange(e)}/>
        </div>
    )
}

export default Search;