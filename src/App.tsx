import logo from './logo.svg';
import './App.scss';
import {Card} from 'components/Card/Card';
import {useGetUsers} from 'utils/getUsers';

export const App = () => {
  const {data, error, isLoading} = useGetUsers();

  if (error) {
    return <div>We have an error...</div>;
  }

  if (isLoading) {
    return <div>...</div>;
  }

  return (
    <div className='app'>
      <main className='app__container'>
        <img src={logo} className='app__logo' alt='logo' />
        <Card cardData={data[0]} />
      </main>
    </div>
  );
};
