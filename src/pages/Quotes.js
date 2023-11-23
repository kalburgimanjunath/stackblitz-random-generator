import React,{useState,useEffect} from 'react'
export default function Quotes() {
    const [quotes,setQuotes] = useState([
        'quote1',
        'quote2',
        'quote3'
    ])
    const [newQuote,setNewQuote]= useState('hello world')
    const generateRandom = ()=>{
        console.log('hello world')
        const randomGen = Math.floor(Math.random() * 3);
        setNewQuote(quotes[randomGen])
    }
    return <div>
        <h1>Quotes</h1>
        <button className="bg-blue-300 p-2 hover:bg-blue-400 rounded-lg" type="button" onClick={()=>generateRandom()}>Generate Quotes</button>
        <div>{newQuote}</div>
        </div>
}