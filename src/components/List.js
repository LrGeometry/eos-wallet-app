import React from 'react';

const List = ({ data, renderItem, dispatch, ...props }) => (
  <ul {...props}>
    {data.map((item, key) =>
      <li key={item.id || key}>{renderItem({ key, ...item })}</li>)}
  </ul>
);

export default List;
