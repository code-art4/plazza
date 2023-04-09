import { CiDeliveryTruck } from 'react-icons/ci';
import { RxCaretDown } from 'react-icons/rx';
import { Button, Input } from '../ui';
import NigeriaSVG from '../../assets/nigeria.svg';
import ChatSVG from '../../assets/chat.svg';
import NotificationSVG from '../../assets/notification.svg';
import HelpSVG from '../../assets/help.svg';
import Profile from '../../assets/image/profile.png';

import styles from './index.module.css';

const Nav = () => {
  return (
    <nav className={styles['nav-container']}>
      <div className={styles['dummy-logo']}></div>
      <div className='w-[50%] mx-auto'>
        <div className={styles['input-search-container']}>
          <Input
            placeholder='Search for products, brand and categories'
            type='search'
            id='search'
            name='search'
            className='!py-2.5'
          />
          <Button className={styles['search-btn']}>Search</Button>
        </div>
      </div>

      <div className={styles['right-nav']}>
        <div className={styles['delivery-icon']}>
          <CiDeliveryTruck size='1.5rem' />
          <p>Logistics</p>
        </div>
        <div className={styles['icons-container']}>
          <img src={NigeriaSVG} className={styles.icon} />
          <img src={ChatSVG} className={styles.icon} />
          <img src={NotificationSVG} className={styles.icon} />
          <img src={HelpSVG} className={styles.icon} />
          <div className='flex items-center'>
            <img src={Profile} className='w-8 h-8' />
            <RxCaretDown size='1rem' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
