export default function Header () { 
    
    let style : Record<string,string> = {
        color: 'purple',
        backgroundColor: 'lightblue'
    }

    const title : string = 'Hello World 2024! - Introduction a JSX avec ouitube_v2';
    
    return (
        <header style={style}>
            <h1>{title}</h1>
        </header>
    );
}   


