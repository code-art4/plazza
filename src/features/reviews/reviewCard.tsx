import Stars from '../stars';

interface reviewCardProps {
  emoji: string;
  img: any;
  name: string;
  date: string;
  first: boolean;
  stars: number;
  review: string;
}

const ReviewCard = ({
  emoji,
  img,
  name,
  date,
  first,
  stars,
  review,
}: reviewCardProps) => {
  return (
    <div
      className='rounded-lg px-4 py-3 flex items-start'
      style={{
        border: first ? '1px solid #16962B' : '',
      }}
    >
      <img src={img} className='w-11 h-11 object-cover mr-3' />
      <div>
        <div className='flex items-center justify-between'>
          <div>
            <h5 className='text-lg mb-0'>{name}</h5>
            <span className='text-grey font-medium text-sm'>{date}</span>
          </div>
          <div className='flex items-center gap-x-3'>
            <Stars value={stars} size={18} />
            <span>{emoji}</span>
          </div>
        </div>
        <p className='mt-1 text-grey'>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
