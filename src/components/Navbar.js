import React from 'react';
import {Link} from 'react-router-dom'
export default function Navbar() {
  const navbaritems = [
    {title:'Quotes',link:"quotes"},
    {title:'Jokes',link:"jokes"},
    {title:'Currency Converter',link:"currency"},
    {title:'Random Cat/Dog Images',link:"random"},
    {title:'Language Flash card',link:"language"},
    {title:'Book Shelf',link:"books"},
    {title:'Expense Tracker',link:"expense"},
    {title:'Count Down Timer',link:"countdown"},
    {title:'Fitness Tracker',link:"fitness"},
    {title:'Budget Calculator',link:"budget"}
  ];
  return (
    <div className="absolute bg-pink-100 top-0 left-0 w-full bg-pink flex">
      {navbaritems &&
        navbaritems.map((item) => {
          return <div><Link to={`./${item.link}`}>{item.title}</Link></div>;
        })}
    </div>
  );
}
