import React, { useEffect, useState } from "react";
import Box from "../Containers/Box";

const Number = ({ api }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setCount(result.pokemon_species_details.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [api]);

  return (
    <Box>
      <div style={{
        padding: '10px',
        backgroundColor: '#2196F3',
        color: '#ffffff',
        border: '1px solid #1565C0',
        height: '100px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h3>{count}</h3>
        </div>
      </div>
    </Box>
  );
};

export default Number;
