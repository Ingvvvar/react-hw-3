import React from 'react';
export const List = ({ items }) => {
  const elements = items.map((item, index) => <li key={index}>{item}</li>);
  return  (
    <div>
    <p>массив имён:</p>
    <ul>{ elements }</ul>
    </div>
  )
}