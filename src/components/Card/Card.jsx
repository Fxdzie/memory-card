import { memo,useCallback,useState } from "react";
import './Card.css'
import Loader from "../Loader/Loader";

function Card({imgUrl,imgId,category,processTurn}){
    const [isLoading, setIsLoading] = useState(true);
    const [url, setUrl] = useState('');

    imgUrl.then((value)=>{
        setUrl(value);
    });

    const handleImageLoad = useCallback(()=>{
        setIsLoading(false);
    },[]);

    const handleClick = useCallback(()=>{
        processTurn(imgId);
    },[processTurn,imgId]);

    return (
        <div className="card-container" onClick={handleClick}>
            {isLoading && (
                <div className="loaderContainer">
                    <Loader message = 'Loading...'/>
                </div>
            )}
            <img 
                src={url} 
                alt={category}
                onLoad={handleImageLoad}
                className={isLoading ? "image-hidden": 'image'} />
        </div>
    );

}

export default memo (Card);