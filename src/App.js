import React from 'react';
import './style.css';
import { Navbar } from './components/';
import {Routes,Route} from 'react-router-dom'
import { Books, Budget, Countdown, Currency, Expense, Fitness, Jokes, Language, Quotes } from './pages';
export default function App() {
  return (
    <div>
      <Navbar />
      <div className="m-20">
        <Routes>
          <Route path="/books" element={<Books/>}></Route>
          <Route path="/budget" element={<Budget/>}></Route>
          <Route path="/countdown" element={<Countdown/>}></Route>
          <Route path="/currency" element={<Currency/>}></Route>
          <Route path="/expense" element={<Expense/>}></Route>
          <Route path="/fitness" element={<Fitness/>}></Route>
          <Route path="/jokes" element={<Jokes/>}></Route>
          <Route path="/language" element={<Language/>}></Route>
          <Route path="/quotes" element={<Quotes/>}></Route>
          <Route path="./" element={<Quotes/>} exact></Route>
        </Routes>
      </div>
    </div>
  );
}
