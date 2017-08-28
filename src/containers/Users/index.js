import React, { Component } from 'react';
import { Icon, List } from '../../components';
import { Link } from 'react-router-dom';
import UsersQuery from '../../query/users';

const User = ({ url, name, status, icon }) => (
  <div className="transaction">
    <Link to={url}>
      <div className="user-meta d-flex flex-row items-center">
        <Icon
          className="transaction-thumbnail"
          url={icon}
        />
        <div className="transaction-data ml-3">
          <div className="transaction-sender mb-1"><a>{name}Demo Name</a></div>
          <div className="transaction-memo mb-0">{status}</div>
        </div>
      </div>
    </Link>
  </div>
);

class Users extends Component {
  static defaultProps = {
    data: UsersQuery(),
  }

  render() {
    const { data } = this.props;

    return (
      <List
        data={data}
        renderItem={User}
      />
    );
  }
}

export default Users;
