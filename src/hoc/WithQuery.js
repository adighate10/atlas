
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Search from "../components/Search";

const WithQuery = (WrappedComponent, query) => {

    const filterData = (data, searchStr) => {
        if(data && searchStr) {
            return Object.values(data)[0].filter(item => item.name.toLowerCase().includes(searchStr.toLowerCase()))
        } 
        return data ? Object.values(data)[0] : [];
    }

    return function ComponentWithQuery() {
        const [filteredData, setFilteredData] = useState([]);
        const { data, loading, error } = useQuery(query);
        
        useEffect(() => {
            setFilteredData(filterData(data, ""))
        }, [data])

        if (loading) return <div>Loading...</div>;
        if (error) return <div>{error.message}</div>

        return (
            <div>
                <WrappedComponent 
                    data={filteredData}
                >
                    <Search onChange={value => setFilteredData(filterData(data, value))}/>
                </WrappedComponent>
            </div>
        )
    }
}

export default WithQuery;

