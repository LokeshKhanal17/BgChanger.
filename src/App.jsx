import { useState } from 'react'

function App() {
  const [color, setColor] = useState('Red');

  const colors = ['Red','Olive','Green','Yellow','Purple',
  'Grey','Black','White','Blue','Orange','Pink','Brown'];

  return (
    <div className='w-screen h-screen'
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-3 rounded-l bg-white'>
          <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg' 
          style={{backgroundColor:colors[0]}}
          onClick={()=>setColor(color[0])}>
            {colors[0]}
            </button>
            <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg' 
          style={{backgroundColor:color[1]}}
          onClick={()=>setColor(colors[1])}>
            {colors[1]}
            </button>
            <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg' 
          style={{backgroundColor:colors[2]}}
          onClick={()=>setColor(colors[2])}>
            {colors[2]}
            </button>
            <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg' 
          style={{backgroundColor:colors[3]}}
          onClick={()=>setColor(colors[3])}>
            {colors[3]}
            </button>
            <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg' 
          style={{backgroundColor:colors[4]}}
          onClick={()=>setColor(colors[4])}>
            {colors[4]}
            </button>
            <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg' 
          style={{backgroundColor:colors[5]}}
          onClick={()=>setColor(colors[5])}>
            {colors[5]}
            </button>
            <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
          style={{backgroundColor:colors[6]}}
          onClick={()=>setColor(colors[6])}>
            {colors[6]}
            </button>
            <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
          style={{backgroundColor:colors[7]}}
          onClick={()=>setColor(colors[7])}>
            {colors[7]}
            </button>
            <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
          style={{backgroundColor:colors[8]}}
          onClick={()=>setColor(colors[8])}>
            {colors[8]}
            </button>
            <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
          style={{backgroundColor:colors[9]}}
          onClick={()=>setColor(colors[9])}>
            {colors[9]}
            </button>
            <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
          style={{backgroundColor:colors[10]}}
          onClick={()=>setColor(colors[10])}>
            {colors[10]}
            </button>
            <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
          style={{backgroundColor:colors[11]}}
          onClick={()=>setColor(colors[11])}>
            {colors[11]}
            </button>

        </div>
      </div>
      

    </div>
      
    
  )
}

export default App
