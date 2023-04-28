import AuthenticatedLayout from '../layout/AuthenticatedLayout';
import { Button } from '../components/ui';
import ReviewIMG1 from '../assets/image/review-img-1.png';
import ReviewIMG2 from '../assets/image/review-img-2.png';
import ReviewIMG3 from '../assets/image/review-img-3.png';
import ReviewIMG4 from '../assets/image/review-img-4.png';
import { RxCaretDown } from 'react-icons/rx';
import VoteCard from '../features/reviews/voteCard';
import ChatBox from '../features/chat/ChatBox';
import Stars from '../features/stars';
import ReviewCard from '../features/reviews/reviewCard';

interface customersLikeProps {
  title: string;
  votes: number;
}

interface starsProps {
  id: number;
  stars: number;
}

const Reviews = () => {
  const starsArr: starsProps[] = [
    { id: 5, stars: 90 },
    { id: 4, stars: 70 },
    { id: 3, stars: 10 },
    { id: 2, stars: 20 },
    { id: 1, stars: 40 },
  ];
  const customersLikesReview: customersLikeProps[] = [
    {
      title: 'Quality Product',
      votes: 62,
    },
    {
      title: 'Great Value',
      votes: 100,
    },
    {
      title: 'Good Services',
      votes: 162,
    },
    {
      title: 'Feasibility',
      votes: 72,
    },
  ];

  const customersImprovementReview: customersLikeProps[] = [
    {
      title: 'Value for Money',
      votes: 62,
    },
  ];

  const reviews = [
    {
      name: 'Nina Halloway',
      date: '16 Oct 2022',
      stars: 4,
      emoji: '🌝',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae dictum dui. Maecenas et nisl suscipit, congue turpis at, auctor tortor.',
      img: ReviewIMG1,
    },
    {
      name: 'Stefanie Houston',
      date: '16 Oct 2022',
      stars: 3,
      emoji: '😐',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae dictum dui. Maecenas et nisl suscipit, congue turpis at, auctor tortor.',
      img: ReviewIMG2,
    },
    {
      name: 'David Benson',
      date: '10 Oct 2022',
      stars: 2,
      emoji: '👿',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae dictum dui. Maecenas et nisl suscipit, congue turpis at, auctor tortor.',
      img: ReviewIMG3,
    },
    {
      name: 'Mathias Valencia',
      date: '11 Oct 2022',
      stars: 1,
      emoji: '😡',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae dictum dui. Maecenas et nisl suscipit, congue turpis at, auctor tortor.',
      img: ReviewIMG4,
    },
  ];

  return (
    <AuthenticatedLayout className='px-12 !mt-32 flex gap-x-20' topBar={true}>
      <div className='w-[30%]'>
        <h1 className='text-2xl font-semibold'>Customers Feedbacks</h1>
        <div>
          <h2 className='text-green font-semibold'>4.44</h2>
          <span className='text-grey'>Based on 23 ratings</span>
          <Stars value={4} />
          <div className='mt-4 flex flex-col gap-y-3 mb-5'>
            {starsArr.map((each: starsProps, index: number) => {
              return (
                <div key={index} className='text-grey flex items-center'>
                  <span className='w-[27%]'>
                    {each.id} star
                    {each.id === (0 || 1) ? '' : 's'}{' '}
                  </span>
                  <input
                    type='range'
                    name={index.toString()}
                    id={index.toString()}
                    value={each.stars}
                    className='w-full custom-range'
                    readOnly={true}
                    style={{
                      background: `linear-gradient(to right,#16962B 0%,#16962B ${each.stars}%,#D8F6DD ${each.stars}%,#D8F6DD 100%  )`,
                    }}
                  />
                </div>
              );
            })}
          </div>

          <VoteCard
            title='What Customers Like'
            cardDetails={customersLikesReview}
          />

          <VoteCard
            title='What Needs Improvement'
            cardDetails={customersImprovementReview}
          />
        </div>
      </div>
      <div className='w-[70%]'>
        <Button
          className='flex items-center w-max px-4 gap-x-2 bg-[transparent] py-2.5 ml-auto'
          type='secondary'
        >
          Filter
          <RxCaretDown size='20px' />
        </Button>

        <div className='mt-4 ml-8'>
          <h4 className='text-xl font-semibold mb-4'>Reviews (18)</h4>

          <div className='flex flex-col gap-y-6 items-start mb-8'>
            {reviews?.map((review, index) => {
              return (
                <ReviewCard key={review.name} {...review} first={index === 0} />
              );
            })}
          </div>
        </div>

        <div className='flex items-center justify-between ml-8'>
          <Button
            className='flex items-center w-max px-4 gap-x-2 bg-[transparent] py-2.5'
            type='secondary'
          >
            Load More Reviews
          </Button>
          <ChatBox className='relative bottom-0 !right-0 shadow-none w-[70%]' />
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Reviews;
