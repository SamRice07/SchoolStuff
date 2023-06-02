import './Theme.scss';
import Dropdown from '../Addons/Dropdown/Dropdown';
import IAm from '../Addons/IAm/IAm';
function Theme() {
  



  return (
    <>
        <div className='dropdown'>
          <Dropdown title='My Identity' subtitle='Who Am I?'/>
        </div>


        <div className='themeWrapper'>
          <div className='themeCard'>
            <div className='meHolder'>
              <IAm />
            </div>
          </div>
        </div>

    </>
  );
}

export default Theme;
  