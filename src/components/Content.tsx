import { useEffect, useState } from 'react';

export default function Content() {
    
    const formations : string[] = [
        "Formation React",
        "Formationv TypeScript",
        "Formation Node.js",    
    ];

    // const isDisplay: boolean = true;
    const age: number = 25
    // let clickCount: number = 0
    const [clickCount, setClickCount] = useState<number>(0)

    const handleMoins = () => {
        const moinsClickCount = clickCount - 1 
        setClickCount(moinsClickCount);
        
    }
    const handlePlus = () => {
        const plusClickCount = clickCount + 1 
        setClickCount(plusClickCount);
        
    }

    useEffect(() => {
    
    document.title = `Vous avez cliqué ${clickCount} fois`;
    
    //     const content = document.querySelector('.content');
    // console.log(content);
    // setClickCount(clickCount + 1)

    // },[]);
    });

    return (
        <div className='content'> 
            <h2>Nombre de Formations: {formations.length}</h2>
            <h2>Age: {age}</h2>
            <ul>
                {
                    formations.map((name: string, index: number) => {
                        return <li key={index}>{name}</li>;
                    })
                }
            </ul>
            {/* {isDisplay ? <button>Display</button> : null} */}
            <button onClick = {handleMoins}>- </button>
            <p>Vous avez cliqué {clickCount}</p>
            <button onClick = {handlePlus}>+ </button>
        </div>
    );
}
