export default function Quotes() {
    const quotes = [
        'quote1',
        'quote2'
    ]
    const generateRandom = ()=>{
        console.log('hello world')
    }
    return <div>
        <h1>Quotes</h1>
        <button className="bg-blue-300 p-2 hover:bg-blue-400 rounded-lg" type="button" onClick={()=>generateRandom()}>Generate Quotes</button>
        </div>
}