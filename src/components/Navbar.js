import React from 'react';
import {Link} from 'react-router-dom'
export default function Navbar() {
  const navbaritems = [
    {title:'Quotes'},
    {title:'Jokes'},
    {title:'Currency Converter'},
    {title:'Random Cat/Dog Images'},
    {title:'Language Flash card'},
    {title:'Book Shelf'},
    {title:'Expense Tracker'},
    {title:'Count Down Timer'},
    {title:'Fitness Tracker'},
    {title:'Budget Calculator'}
  ];
  return (
    <div className="absolute top-0 left-0 w-full bg-pink flex">
      {navbaritems &&
        navbaritems.map((item) => {
          return <div>{item.title}</div>;
        })}
    </div>
  );
}
