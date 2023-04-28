import ReactStars from 'react-stars';

const ratingChanged = (newRating: number) => {
  console.log(newRating);
};

const Stars = ({ value, size }: { value: number; size?: number }) => {
  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={size || 24}
      value={value}
      color2={'#ffd700'}
    />
  );
};

export default Stars;
