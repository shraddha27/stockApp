import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../store/actions';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [symbol, setSymbol] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(fetchData(symbol));
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Change Stock/Crypto</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
            <input
              type="text"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              placeholder="Enter symbol (e.g., bitcoin)"
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
