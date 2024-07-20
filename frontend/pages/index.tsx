import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/actions';
import { RootState } from '../store/store';
import Table from '../components/Table';
import Modal from '../components/Modal';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.stocks.data);

  useEffect(() => {
    dispatch(fetchData('bitcoin')); // Default to Bitcoin
  }, [dispatch]);

  return (
    <div>
      <h1>Real-Time Stock/Crypto Prices</h1>
      <Table data={data} />
      <Modal />
    </div>
  );
};

export default Home;
