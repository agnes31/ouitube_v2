export default function Content() {
    
    const formations : string[] = [
        "Formation React",
        "Formationv TypeScript",
        "Formation Node.js",    
    ];

    const isDisplay: boolean = true;
    const age: number = 25

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
            {isDisplay ? <button>Display</button> : null}
        </div>
    );
}
