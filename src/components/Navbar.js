import React from 'react';
export default function Navbar() {
  const navbaritems = [
    'Quotes',
    'Jokes',
    'Currency Converter',
    'Random Cat/Dog Images',
    'Language Flash card',
    'Book Shelf',
    'Expense Tracker',
    'Count Down Timer',
    'Fitness Tracker',
    'Budget Calculator',
  ];
  return (
    <div className="absolute top-0 left-0 w-full bg-pink flex">
      {navbaritems &&
        navbaritems.map((item) => {
          return <div>{item}</div>;
        })}
    </div>
  );
}
