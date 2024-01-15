const defaultStyle = {
  padding: '10px',
  margin: '5px',
  backgroundColor: '#ffffff',
  color: '#000000',
  borderRadius: '4px',
};

const Box = ({children, style}) => {
  return (
    <div style={{...defaultStyle, ...style}}>
      {children}
    </div>
  )
}

export default Box;