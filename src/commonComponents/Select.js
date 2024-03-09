import { useEffect, useState } from "react";
import '../App.css';

const Select = (props) => {

    const {options, onSelect, placeholder, defaultValue}  = props;
    const [value, setValue] = useState();

    useEffect(() => {
        const initvalue = defaultValue ? defaultValue : options && options.length ? 0 : undefined;
        setValue(initvalue);
    }, [])

    useEffect(() => {
        onSelect(options[value])
    }, [value])

    const handleOnSelect = (e) => {
        const {value} = e.target;
        setValue(value)
    }

    return (
        <details class="custom-select">
            <summary class="radios">
                {options && options.map((option, index) => <input type="radio" name="item" id="default" title={placeholder} checked/>)}
            </summary>
        </details>
    )
    return (
        <select onChange={e => {handleOnSelect(e)}} value={value} className="Select">
            {placeholder && <option key={-1} value={undefined} disabled selected>{placeholder}</option>}
            {options && options.map((option, index) => <option key={option.name} value={index}>{option.name}</option>)}
        </select>
    )
}

export default Select;