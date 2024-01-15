import React  from 'react';

const Grid = ({ columns, style, children }) => {
  const defaultStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridGap: '1em',
  };

  return (
    <div style={{...defaultStyle, ...style}}>
      {children}
    </div>
  );
};

const GridItem = ({ style, children , ...props}) => {
  const defaultStyle = {
    textAlign: 'center',
  };

  return (
    <div style={{...defaultStyle, ...style}} {...props}>
      {children}
    </div>
  );
};

Grid.Item = GridItem;

export default Grid;