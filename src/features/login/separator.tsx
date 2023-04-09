const Separator = () => {
  return (
    <div className='relative'>
      <div className='absolute w-full top-[50%] h-[1px] height-[1px] bg-green z-[-1]'></div>
      <div className='rounded-full border border-green w-max p-2 bg-white mx-auto text-green'>
        OR
      </div>
    </div>
  );
};

export default Separator;
