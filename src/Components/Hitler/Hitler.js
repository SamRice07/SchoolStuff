import React from 'react'
import Dropdown from '../Addons/Dropdown/Dropdown';

import './Hitler.scss'
import Flag from '../Addons/Flags/Flag';
import Timeline from '../Addons/Timeline/Timeline';
import $ from 'jquery'
import { useEffect } from 'react';
import TwoSide from '../Addons/TwoSide/TwoSide';

export default function Hitler() {


  return (
    <>
        <div className='dropdown'>
          <Dropdown title='The Second Red Scare' subtitle='Fear'/>
        </div>

          
        <div className='hitlerWrapper'>
          <div className='hitlerCard'>
            <div className='twoSide'>
              <TwoSide />
            </div>

            <div className='flag1'>
              <Flag leftAmount='-800px'/>
            </div>
            
            <div className='flag2'>
              <Flag leftAmount='800px'/>
            </div>

            <div className='timeywimey'>
              <Timeline />
            </div>
          </div>
        </div>
    </>
  );
}
