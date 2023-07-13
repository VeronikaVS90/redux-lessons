import { useDispatch } from "react-redux";

const deposit = value => {
  return {
    type: 'account/deposit',
    payload: value,
  };
};

const withdraw = value => {
  return {
    type: 'account/withdraw',
    payload: value,
  };
};

export const Account = () => {
    const dispatch = useDispatch()
  
    return (
    <div>
      <p>Balance: 0</p>
      <button onClick={() => dispatch(deposit(10))}>Deposit</button>
      <button onClick={() => dispatch(withdraw(5))}>Withdraw</button>
    </div>
  );
};
