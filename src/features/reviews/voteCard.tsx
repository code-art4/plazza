import Caution from '../../assets/caution.svg';

interface cardDetailsProps {
  title: string;
  votes: number;
}

const VoteCard = ({
  cardDetails,
  title,
}: {
  cardDetails: cardDetailsProps[];
  title: string;
}) => {
  return (
    <div>
      <h4 className='text-xl font-medium mb-3 flex items-center gap-x-3'>
        {title} <img src={Caution} className='w-4 h-4' />
      </h4>

      <div className='mb-5'>
        {cardDetails.map((each: cardDetailsProps, index: number) => {
          return (
            <div className='border border-[#CCCCCC] rounded-lg flex mb-4 h-max items-center pr-5'>
              <span className='border-r border-r-[#CCCCCC] text-green px-3 py-2'>
                {index + 1}
              </span>
              <span className='mr-auto ml-3'>{each.title}</span>
              <span className='text-grey text-sm font-medium'>
                {each.votes} Vote{each.votes === (1 || 0) ? '' : 's'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VoteCard;
