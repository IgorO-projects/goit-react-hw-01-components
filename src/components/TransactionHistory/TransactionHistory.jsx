import Transaction from './Transaction.jsx';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
    
    return(
        <table className={styles.transaction_history}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => {
                  return <Transaction 
                  type={transaction.type}
                  amount={transaction.amount}
                  currency={transaction.currency}
                  key={transaction.id}
                  />
              })}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.array.isRequired,
}

export default TransactionHistory;