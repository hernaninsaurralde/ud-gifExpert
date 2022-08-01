
function GifItem({id, title, url}) {
    return ( 
    <div className="card">
       <img src={url} alt={title}></img>
       <p key={id}>{title}</p>
         
    </div>
     );
}

export default GifItem;