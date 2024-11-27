// interface Footprops {
//     title: string;
//     copyright: string;
//   }


// export default function Footer(props: Footprops): JSX.Element {
  export default function Footer({ title, copyright, handleFooterClick}: { title: string; copyright? : string; handleFooterClick: (data:any) => void; }) {
  console.log({ title, copyright });

    const style: React.CSSProperties = {
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed',
      left: '0',
      bottom: '0',
      width: '100%',
    };

    // const CopyRight: string = "All rights reserved";
    return (
      // <footer style={style} onClick={handleFooterClick}>
      <footer style={style} onClick={() => handleFooterClick({title, copyright})}>
          <h3>{title}</h3>
          {copyright && <p>{copyright}</p>}
      </footer>
    );
  }