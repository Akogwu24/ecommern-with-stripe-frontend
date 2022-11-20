import { BallTriangle } from 'react-loader-spinner';

export default function FullPageLoader() {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color='#4fa94d'
      ariaLabel='ball-triangle-loading'
      wrapperClass={{}}
      wrapperStyle=''
      visible={true}
    />
  );
}
