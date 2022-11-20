import { Link, useLocation } from 'react-router-dom';

export const SuccessPage = () => {
  const { state } = useLocation();
  console.log('state', state);

  return (
    <div className='success-page'>
      <div className='wrapperAlert'>
        <div className='contentAlert'>
          <div className='topHalf'>
            <p>
              <svg viewBox='0 0 512 512' width='100' title='check-circle'>
                <path d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z' />
              </svg>
            </p>
            <h1>Congratulations</h1>

            <ul className='bg-bubbles'>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className='bottomHalf'>
            <p>Well Done!, you actually managed to accomplish something today...</p>
            <Link to='/'>
              <button id='alertMO'>Moving On</button>
            </Link>

            <button style={{ padding: 0, marginLeft: '30px', backgroundColor: 'rgba(150, 242, 202,1)', color: '#333' }} id='alertMO'>
              <a
                href={state?.receipt_url}
                rel='noreferrer'
                target='_blank'
                style={{ borderRadius: '10px', backgroundColor: 'rgba(150, 242, 202,1)', padding: '10px', textDecoration: 'none' }}
              >
                Open Reciept
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
