import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Search from "../components/Search";

const WithQuery = (WrappedComponent, query) => {
  const filterData = (data, searchStr) => {
    if (data && searchStr) {
      return Object.values(data)[0].filter((item) =>
        item.name.toLowerCase().includes(searchStr.toLowerCase())
      );
    }
    return data ? Object.values(data)[0] : [];
  };

  return function ComponentWithQuery(props) {
    const [filteredData, setFilteredData] = useState([]);
    const { variables } = props;
    const { data, loading, error } = useQuery(query, variables);

    useEffect(() => {
      if (!loading && data) {
        setFilteredData(filterData(data, ""));
      }
    }, [loading, data]);

    return (
      <div>
        <WrappedComponent {...props} data={filteredData} isLoading={loading}>
          <Search
            onChange={(value) => setFilteredData(filterData(data, value))}
          />
          {error && <div className="errorBox">{error.message}</div>}
        </WrappedComponent>
      </div>
    );
  };
};

export default WithQuery;
