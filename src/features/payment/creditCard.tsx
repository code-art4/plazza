import React, { useState } from 'react';
import { Checkbox, Button } from '../../components/ui';
import { HiArrowRight } from 'react-icons/hi';

function CreditCard() {
  const [name, setName] = useState('CARDHOLDER NAME');
  const [number, setNumber] = useState('1234 5678 9101 1121');
  const [expiry, setExpiry] = useState('12/23');
  const [cvc, setCvc] = useState('123');

  const handleNameChange = (event: any) => {
    setName(event.target.value.toUpperCase());
  };

  const handleNumberChange = (event: any) => {
    const input = event.target.value.replace(/\s/g, '').slice(0, 16);
    const result = [];
    for (let i = 0; i < input.length; i += 4) {
      result.push(input.slice(i, i + 4));
    }
    setNumber(result.join(' '));
  };

  const handleExpiryChange = (event: any) => {
    const input = event.target.value.replace('/', '').slice(0, 4);
    const month = input.slice(0, 2);
    const year = input.slice(2);
    setExpiry(`${month}/${year}`);
  };

  const handleCvcChange = (event: any) => {
    setCvc(event.target.value.replace(/\s/g, '').slice(0, 3));
  };

  return (
    <>
      <div className='credit-card'>
        <div className='credit-card__logo'></div>
        <div className='credit-card__details'>
          <div className='credit-card__name'>{name}</div>
          <div className='credit-card__number'>{number}</div>
          <div className='credit-card__expiry-cvc'>
            <div className='credit-card__expiry'>{expiry}</div>
            <div className='credit-card__cvc'>{cvc}</div>
          </div>
        </div>
        <div className='credit-card__background'></div>
        <div className='credit-card__chip'></div>
      </div>
      <form className='mt-10'>
        <input
          type='text'
          value={name}
          onChange={handleNameChange}
          placeholder='Cardholder Name'
          className='border border-green rounded-2xl text-grey placeholder:text-grey outline-none bg-white shadow px-4 w-full block py-3 mb-4'
        />
        <input
          type='text'
          value={number}
          onChange={handleNumberChange}
          placeholder='Card Number'
          className='border border-green rounded-2xl text-grey placeholder:text-grey outline-none bg-white shadow px-4 w-full block py-3 mb-4'
        />
        <div className='credit-card__expiry-cvc-form'>
          <input
            type='text'
            value={expiry}
            onChange={handleExpiryChange}
            placeholder='MM/YY'
            className='border border-green rounded-2xl text-grey placeholder:text-grey outline-none bg-white shadow px-4 py-3 mb-4'
          />
          <input
            type='text'
            value={cvc}
            onChange={handleCvcChange}
            placeholder='CVC'
            className='border border-green rounded-2xl text-grey placeholder:text-grey outline-none bg-white shadow px-4 py-3 mb-4 ml-12'
          />
        </div>
        <div className='mt-4'>
          <Checkbox label='rememberCard'>
            <span className='text-grey'>Remember this card</span>
          </Checkbox>
          <Button className='flex items-center gap-x-4 justify-center w-max ml-auto px-6'>
            Confirm
            <HiArrowRight color='#fff' size='1.2rem' />
          </Button>
        </div>
      </form>
    </>
  );
}

export default CreditCard;
