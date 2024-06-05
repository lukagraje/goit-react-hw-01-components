import { Component } from "react";
import PropTypes from "prop-types";
import css from "./FriendList.module.css";
import clsx from "clsx";

export default class FriendList extends Component {
  static defaultProps = {};

  static propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
      }),
    ),
  };

  render() {
    return (
      <ul className={css.friendList}>
        {this.props.friends.map((friend) => (
          <li className={css.item} key={friend.id}>
            <span
              className={clsx(css.status, { [css.isOnline]: friend.isOnline })}>
              
            </span>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    );
  }
}
