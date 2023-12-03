import { Hourglass } from 'react-loader-spinner';

export function Loader() {
  return (
    <Hourglass
      visible={true}
      height="60"
      width="60"
      ariaLabel="hourglass-loading"
      wrapperStyle={{ marginLeft: '160px' }}
      wrapperClass=""
      colors={['#6fce30', '#8fed72']}
    />
  );
}
