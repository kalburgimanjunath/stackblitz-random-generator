import React,{useState,useEffect} from 'react'
export default function Jokes() {
    const [jokes,setJokes] = useState([
        'joke1',
        'joke2',
        'joke3'
    ])
    const [isNewJoke,setRandomNewJoke]= useState(false) 
    const [newJoke,setNewJoke]= useState('hello world')
    // const generateRandom = ()=>{
    //     const randomGen = Math.floor(Math.random() * 3);
    //     setJokes(jokes[randomGen])
    // }
    const loadJokes = ()=>{
        fetch('https://v2.jokeapi.dev/joke/Any?format=json')
        .then(res=>res.json())
        .then(result=>setJokes(result['joke']))
        .catch(err=>console.log(err))

    }
    useEffect(()=>{
        return loadJokes();
    },[isNewJoke])
    return <div>
        <h1>jokes</h1>
        <button 
        className="bg-blue-300 p-2 hover:bg-blue-400 rounded-lg" 
        type="button" onClick={()=>{
            // generateRandom();
        setRandomNewJoke(!isNewJoke)}}>
            Generate jokes</button>
        <div>{isNewJoke} {newJoke}</div>
        </div>
}