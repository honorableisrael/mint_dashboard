import React from "react";
// import { a } from "react-router-dom";
import { getAdminUtils } from "../../../../Services/helper";

const Navlist = () => {
  return (
    <div className='MediPharmssistantiid'>
      <div className='MediPharmssistant1 ml-3'>
        <button className='greenbutton'>GENERATE INVOICE</button>
      </div>
      <div className='sidebar_item mt-2 mb-1'>Main</div>
      <div className='active_menu_item navitem02 navhover'>
        <div className='sidebar_item'>
          <svg
            width='20'
            height='16'
            viewBox='0 0 20 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M12.7298 6.34312C12.2684 6.50166 8.19503 7.92816 7.29996 8.97946C6.8194 9.54524 6.58721 10.2646 6.64633 11.0051C6.70578 11.7449 7.0496 12.4184 7.61406 12.8996C8.11576 13.3273 8.75487 13.5635 9.41312 13.5635C10.2286 13.5635 10.9992 13.2068 11.5276 12.5862C12.4217 11.5332 13.1784 7.27849 13.2616 6.79661C13.286 6.65491 13.2345 6.51157 13.1249 6.41777C13.0155 6.3243 12.8659 6.29556 12.7298 6.34312ZM10.909 12.0587C10.2329 12.8537 8.93421 12.9597 8.13955 12.2803C7.74023 11.9398 7.49681 11.4642 7.45519 10.94C7.41325 10.4159 7.5774 9.9069 7.91726 9.50693C8.4193 8.91704 10.6329 7.97044 12.3348 7.3462C11.9953 9.09341 11.4057 11.4748 10.909 12.0587ZM9.74011 -6.29969e-09C4.36934 -6.29969e-09 0 4.4387 0 9.89534C0 11.9765 0.680057 14.084 1.91532 15.8279C1.99129 15.9359 2.11482 16 2.24627 16H17.2343C17.3657 16 17.4893 15.9366 17.5652 15.8279C18.8008 14.084 19.4812 11.9603 19.4812 9.84877C19.4802 4.41822 15.1112 -6.29969e-09 9.74011 -6.29969e-09ZM17.0219 15.1865H2.45864C1.39512 13.6124 0.81151 11.7416 0.81151 9.89501C0.81151 4.88723 4.81688 0.812171 9.74011 0.812171C14.6633 0.812171 18.6687 4.86543 18.6687 9.84877C18.6687 11.7248 18.0854 13.612 17.0219 15.1865ZM9.74011 2.33908C5.96858 2.33908 2.90023 5.44244 2.90023 9.2569C2.90023 9.48182 3.08189 9.66315 3.30615 9.66315C3.53075 9.66315 3.71207 9.48116 3.71207 9.2569C3.71207 5.89063 6.41645 3.15191 9.74044 3.15191C13.0641 3.15191 15.7688 5.88106 15.7688 9.23477C15.7688 9.45969 15.9505 9.64135 16.1747 9.64135C16.3987 9.64135 16.5806 9.45936 16.5806 9.23477C16.5803 5.4322 13.512 2.33908 9.74011 2.33908Z'
              fill='#647787'
            />
          </svg>
          <span className='pl-3'>Overview</span>
        </div>
      </div>
      <div className='sidebar_item mt-1 mb-1'>Payments</div>
      <div className='navitem02 navhover'>
        <div className='sidebar_item'>
          <svg
            width='19'
            height='18'
            viewBox='0 0 19 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M16.4286 9.00001V4.42858H13H5.57143H2.71429C1.76743 4.42858 1 3.66115 1 2.71429V14.7143C1 15.9766 2.02343 17 3.28571 17H16.4286V12.4286'
              stroke='#7F8FA4'
              stroke-miterlimit='10'
              stroke-linecap='square'
            />
            <path
              d='M18.1429 12.4286H14.1429C13.196 12.4286 12.4286 11.6611 12.4286 10.7143C12.4286 9.76743 13.196 9 14.1429 9H18.1429V12.4286Z'
              stroke='#7F8FA4'
              stroke-miterlimit='10'
              stroke-linecap='square'
            />
            <path
              d='M13 2.14286V1H2.71429C1.76743 1 1 1.76743 1 2.71429C1 3.66114 1.76743 4.42857 2.71429 4.42857'
              stroke='#7F8FA4'
              stroke-miterlimit='10'
              stroke-linecap='square'
            />
          </svg>
          <span className='pl-3'>All Payments</span>
        </div>
      </div>
      <div className='navitem02 navhover'>
        <div className='sidebar_item'>
          <svg
            width='19'
            height='21'
            viewBox='0 0 19 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M16.4286 9.00001V4.42858H13H5.57143H2.71429C1.76743 4.42858 1 3.66115 1 2.71429V14.7143C1 15.9766 2.02343 17 3.28571 17H16.4286V12.4286'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linecap='square'
            />
            <path
              d='M18.1429 12.4286H14.1429C13.196 12.4286 12.4286 11.6611 12.4286 10.7143C12.4286 9.76743 13.196 9 14.1429 9H18.1429V12.4286Z'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linecap='square'
            />
            <circle cx='12.5' cy='15.5' r='5' fill='white' stroke='#647787' />
            <path d='M9.75 15.225L11.4 16.875L15.25 14.125' stroke='#647787' />
            <path
              d='M13 2.14286V1H2.71429C1.76743 1 1 1.76743 1 2.71429C1 3.66114 1.76743 4.42857 2.71429 4.42857'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linecap='square'
            />
          </svg>
          <span className='pl-3'>Reconcilled Payments</span>
        </div>
      </div>
      <div className='navitem02 navhover'>
        <div className='sidebar_item'>
          <svg
            width='19'
            height='21'
            viewBox='0 0 19 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M16.4286 9.00001V4.42858H13H5.57143H2.71429C1.76743 4.42858 1 3.66115 1 2.71429V14.7143C1 15.9766 2.02343 17 3.28571 17H16.4286V12.4286'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linecap='square'
            />
            <path
              d='M18.1429 12.4286H14.1429C13.196 12.4286 12.4286 11.6611 12.4286 10.7143C12.4286 9.76743 13.196 9 14.1429 9H18.1429V12.4286Z'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linecap='square'
            />
            <circle cx='12.5' cy='15.5' r='5' fill='white' stroke='#647787' />
            <path d='M15.2205 12.7795L9.7793 18.2207' stroke='#647787' />
            <path d='M15.1909 18.25L9.80911 12.75' stroke='#647787' />
            <path
              d='M13 2.14286V1H2.71429C1.76743 1 1 1.76743 1 2.71429C1 3.66114 1.76743 4.42857 2.71429 4.42857'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linecap='square'
            />
          </svg>
          <span className='pl-3'>Un - Reconcilled Payments</span>
        </div>
      </div>
      <div className='navitem02 navhover'>
        <div className='sidebar_item'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z'
              stroke='#647787'
            />
            <path
              d='M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z'
              fill='#647787'
            />
          </svg>
          <span className='pl-3'> Manual Settlement</span>
        </div>
      </div>
      <div className='sidebar_item mt-1 mb-1'>Orders</div>
      <div className='navitem02 navhover'>
        <div className='sidebar_item'>
          <svg
            width='17'
            height='18'
            viewBox='0 0 17 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M3.18182 14.0909V1H16.2727V14.0909C16.2727 14.8624 15.9662 15.6024 15.4207 16.1479C14.8751 16.6935 14.1352 17 13.3636 17'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M10.4545 14.0909H1C1 14.8625 1.30649 15.6024 1.85205 16.1479C2.39761 16.6935 3.13755 17 3.90909 17H13.3636C12.5921 17 11.8522 16.6935 11.3066 16.1479C10.761 15.6024 10.4545 14.8625 10.4545 14.0909Z'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M9 7.54544H13.3636'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M6.09088 7.54544H7.54543'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M9 10.4546H13.3636'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M6.09088 10.4546H7.54543'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M9 4.63635H13.3636'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M6.09088 4.63635H7.54543'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M9.9914 14.5909C10.0979 15.3094 10.4321 15.9799 10.9515 16.5H3.90909C3.27016 16.5 2.6574 16.2462 2.20561 15.7944C1.87356 15.4623 1.64845 15.0433 1.55245 14.5909H9.9914Z'
              fill='#647787'
              stroke='#647787'
            />
          </svg>
          <span className='pl-3'> All Orders</span>
        </div>
      </div>
      <div className='navitem02 navhover'>
        <div className='sidebar_item'>
          <svg
            width='21'
            height='18'
            viewBox='0 0 21 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M3.18182 14.0909V1H16.2727V14.0909C16.2727 14.8624 15.9662 15.6024 15.4207 16.1479C14.8751 16.6935 14.1352 17 13.3636 17'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M10.4545 14.0909H1C1 14.8625 1.30649 15.6024 1.85205 16.1479C2.39761 16.6935 3.13755 17 3.90909 17H13.3636C12.5921 17 11.8522 16.6935 11.3066 16.1479C10.761 15.6024 10.4545 14.8625 10.4545 14.0909Z'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M9 7.54544H13.3636'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M6.09088 7.54544H7.54543'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M9 10.4546H13.3636'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M6.09088 10.4546H7.54543'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M9 4.63635H13.3636'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M6.09088 4.63635H7.54543'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M9.9914 14.5909C10.0979 15.3094 10.4321 15.9799 10.9515 16.5H3.90909C3.27016 16.5 2.6574 16.2462 2.20561 15.7944C1.87356 15.4623 1.64845 15.0433 1.55245 14.5909H9.9914Z'
              fill='#647787'
              stroke='#647787'
            />
            <circle cx='15.5' cy='9.5' r='5' fill='white' stroke='#647787' />
            <path d='M16.875 6.75V12.25' stroke='#647787' stroke-width='0.75' />
            <path d='M14.125 6.75V12.25' stroke='#647787' stroke-width='0.75' />
          </svg>
          <span className='pl-3'> Pending Orders</span>
        </div>
      </div>
      <div className='navitem02 navhover'>
        <div className='sidebar_item'>
          <svg
            width='22'
            height='18'
            viewBox='0 0 22 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M3.18182 14.0909V1H16.2727V14.0909C16.2727 14.8624 15.9662 15.6024 15.4207 16.1479C14.8751 16.6935 14.1352 17 13.3636 17'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M10.4545 14.0909H1C1 14.8625 1.30649 15.6024 1.85205 16.1479C2.39761 16.6935 3.13755 17 3.90909 17H13.3636C12.5921 17 11.8522 16.6935 11.3066 16.1479C10.761 15.6024 10.4545 14.8625 10.4545 14.0909Z'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M9 7.54546H13.3636'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M6.09088 7.54546H7.54543'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M9 10.4545H13.3636'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M6.09088 10.4545H7.54543'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M9 4.63637H13.3636'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M6.09088 4.63637H7.54543'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linejoin='round'
            />
            <path
              d='M9.9914 14.5909C10.0979 15.3094 10.4321 15.9799 10.9515 16.5H3.90909C3.27016 16.5 2.6574 16.2462 2.20561 15.7944C1.87356 15.4623 1.64845 15.0433 1.55245 14.5909H9.9914Z'
              fill='#647787'
              stroke='#647787'
            />
            <circle cx='16.5' cy='9.5' r='5' fill='white' stroke='#647787' />
            <path d='M13.75 9.225L15.4 10.875L19.25 8.125' stroke='#647787' />
          </svg>
          <span className='pl-3'> Reconcilled Orders</span>
        </div>
      </div>
      <div className='navitem02 navhover'>
        <div className='sidebar_item'>
          <svg
            width='17'
            height='18'
            viewBox='0 0 17 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M8.27272 9C6.26472 9 4.63635 7.37164 4.63635 5.36364V4.63636C4.63635 2.62836 6.26472 1 8.27272 1C10.2807 1 11.9091 2.62836 11.9091 4.63636V5.36364C11.9091 7.37164 10.2807 9 8.27272 9Z'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linecap='square'
            />
            <path
              d='M15.5455 15.4785C15.5455 14.1695 14.6749 13.0182 13.4116 12.6742C12.0342 12.2982 10.1535 11.9091 8.27273 11.9091C6.392 11.9091 4.51127 12.2982 3.13382 12.6742C1.87055 13.0182 1 14.1695 1 15.4785V17H15.5455V15.4785Z'
              stroke='#647787'
              stroke-miterlimit='10'
              stroke-linecap='square'
            />
          </svg>

          <span className='pl-3'>Merchant Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Navlist;
