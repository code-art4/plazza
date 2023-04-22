const Cards = ({ items }: { items: any }) => {
  return (
    <div className='flex flex-col gap-y-7 border-b border-b-grey pb-10 w-full'>
      {items.map((item: any, index:number) => {
        return (
          <div className='flex justify-between w-full' key={index}>
            <img src={item.img} className='w-[6rem] h-[6rem] object-cover' />
            <div className='flex flex-col ml-7'>
              <h4 className='font-medium'>{item.name}</h4>
              <span className='text-grey flex items-center gap-x-12 mb-auto'>
                {item.cat} <span>X{item.available}</span>
              </span>
              <p className='-mt-4 text-green'>${item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
