import React, { useEffect, useState } from "react";
import Box from "../Containers/Box";

const List = ({ api }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [api]);

  return (
    <Box>
      {data.length ? (
        <ul style={{ margin: 0, paddingInlineStart: '1em' }}>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      ) : null}
    </Box>
  );
};

export default List;
