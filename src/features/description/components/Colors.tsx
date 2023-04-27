const Colors = () => {
  const colors = ['#BC6D34', '#8A4E2D', '#D09A76', '#533225', '#B4AFAB'];
  return (
    <div className='flex items-center gap-x-2 mt-1'>
      {colors.map((color) => (
        <div
          className='w-5 h-5 rounded'
          style={{
            backgroundColor: color,
          }}
          key={color}
        ></div>
      ))}
    </div>
  );
};

export default Colors;
