import React from 'react';
import './Cards.css';
import HelperCards from './HelperCards';

function Benefits() {
  return (
    <div className='help'>
        <p class="hover-underline-animation">
          Why Choose Trippie ?
        </p>
      <div className='help__container'>
        <div className='help__wrapper p-4'>
          <ul className='cards__items'>
            <HelperCards
              src='https://th.bing.com/th/id/OIP.CD_leWJFFbBsEtg3TL1ougAAAA?pid=ImgDet&rs=1'
              text='Get A Complete service Planned by us'
              path='/'
            />
            <HelperCards
              src='https://www.coventor.com/wp-content/uploads/2018/02/Save-time-and-money-icon.png'
              text='Save Money And Time'
              path='/'
            />
            <HelperCards
              src='https://static.vecteezy.com/system/resources/previews/000/440/642/original/robot-vector-icon.jpg'
              text='Relax And be Stress Free'
              path='/'
            />
            <HelperCards
              src='https://static.vecteezy.com/system/resources/previews/000/440/642/original/robot-vector-icon.jpg'
              text='Enjoy!!!'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
