import { Component } from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css"

export default class Statistics extends Component {
  static defaultProps = {};

  static propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
      }),
    ),
  };

  render() {
    return (
      <section className={css.statistics}>
        {this.props.title && <h2 className={css.title}>{this.props.title}</h2>}
        <ul className={css.stat_list}>
          {this.props.stats.map((stat) => (
            <li className={css.item} key={stat.id} style={{backgroundColor: `rgba(0, 256, 100, ${stat.percentage}%)`}}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          ))}          
        </ul>
      </section>
    );
  }
}
