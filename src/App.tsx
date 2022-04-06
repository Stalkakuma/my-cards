import {useState} from 'react';
import classNames from 'classnames';
import {Card} from 'components/Card/Card';
import {dataBase} from './utils/db';
import {ReactComponent as Arrow} from './assets/arrow.svg';
import './App.scss';

export const App = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(dataBase.users);

  const handleApproval = () => {
    const newData = data.slice();
    const currentPage = newData[page];
    const updatedPage = {
      ...currentPage,
      approved: !currentPage.approved,
    };
    newData[page] = updatedPage;
    setData(newData);
  };

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
            <Card handleApproval={handleApproval} cardData={data[page]} />
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
