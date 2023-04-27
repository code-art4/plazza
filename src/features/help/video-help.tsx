import Nav from './nav';
import Help from './index';
import VideoDefaultIMG from '../../assets/image/video-default.png';

const VideoHelp = () => {
  return (
    <Help>
      <div className='mx-32 mt-6'>
        <Nav />
        <div className='flex items-start gap-x-12 text-grey my-12'>
          <div className='w-[50%]'>
            <video className='w-full' poster={VideoDefaultIMG} controls>
              <source src='video.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='w-[50%]'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            sint veniam praesentium quod a et rem labore, ea exercitationem,
            blanditiis assumenda obcaecati accusamus amet magnam libero, officia
            at voluptates. Molestias, praesentium quidem alias rem repellat
            dolores necessitatibus eveniet hic fugiat esse architecto mollitia
            veritatis ut repellendus culpa voluptatem odio in, provident
            consequuntur, at tempore eos laudantium accusamus! Fugiat in tempora
            vitae neque! Ex sequi eos laboriosam eum quaerat molestiae ipsum
            iure nam corrupti dignissimos enim, natus optio consequuntur,
            facilis nesciunt placeat asperiores? In reiciendis molestiae aperiam
            eligendi! In praesentium quidem accusantium voluptas illum similique
            maxime ipsam nihil aspernatur placeat eum, magni optio rerum animi
            sapiente nisi recusandae ut delectus! Dicta corporis ratione rerum
            doloribus earum. Error aut eligendi provident ut eos ipsam dolorem
            recusandae? Excepturi voluptatem reprehenderit quam fugit aliquam
            eligendi commodi consectetur. Quasi porro dolorem, sint architecto
            quisquam reprehenderit natus, laboriosam tenetur, iure esse
            excepturi optio vel expedita alias?
          </div>
        </div>
      </div>
    </Help>
  );
};

export default VideoHelp;
