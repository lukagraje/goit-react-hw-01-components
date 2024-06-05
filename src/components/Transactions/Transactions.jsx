import { Component } from "react";
import PropTypes from "prop-types";
import css from "./Transactions.module.css";

export default class Transactions extends Component {
  static defaultProps = {
    transactions: [],
  };

  static propTypes = {
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
      }),
    ),
  };

  render() {
    return (
      <table className={css.transactionsHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {this.props.transactions.map((trans) => (
            <tr key={trans.id}>
              <td>{trans.type}</td>
              <td>{trans.amount}</td>
              <td>{trans.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
