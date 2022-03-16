import {useState} from 'react';
import classNames from 'classnames';
import {Card} from 'components/Card/Card';
import {useGetUsers} from 'utils/getUsers';
import {ReactComponent as Arrow} from './assets/arrow.svg';
import './App.scss';

export const App = () => {
  const [page, setPage] = useState(0);
  const {data, error, isLoading} = useGetUsers();

  // const handleApproval = () => {
  //   const newData = [...data];
  //   console.log(newData);
  // };

  const handlePrevPage = () => {
    if (page !== 0) {
      setPage((prev) => prev - 1);
    }
  };
  const handleNextPage = () => {
    if (page !== data.length - 1) {
      setPage((prev) => prev + 1);
    }
  };

  if (error) {
    return <div>We have an error...</div>;
  }

  if (isLoading) {
    return <div>...</div>;
  }

  return (
    <div className='app'>
      <main className='app__container'>
        <div className='app__card-row'>
          <button
            className={classNames('app__button-left', {'app__button-left--hidden': page === 0})}
            onClick={() => handlePrevPage()}
          >
            <div className='app__arrow'>
              <Arrow />
            </div>
          </button>
          <div className='app__card'>
            <Card cardData={data[page]} />
          </div>
          <button
            className={classNames('app__button-right', {'app__button-right--hidden': page === data.length - 1})}
            onClick={() => handleNextPage()}
          >
            <div className='app__arrow'>
              <Arrow />
            </div>
          </button>
        </div>
      </main>
    </div>
  );
};
