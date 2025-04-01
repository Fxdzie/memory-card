import { memo,useCallback,useState } from "react";

function Card({imgUrl,imgId,category,processTurn}){
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = useCallback(()=>{
        setIsLoading(false);
    },[]);

    const handleClick = useCallback(()=>{
        processTurn(imgId);
    },[processTurn,imgId]);

    return (
        <div className="container" onClick={handleClick}>
            {isLoading && (
                <div className="loaderContainer">
                    //put loading component
                </div>
            )}
            <img 
                src={imgUrl} 
                alt={category}
                onLoad={handleImageLoad}
                className={"image"+`${isLoading ? 'hidden' : ''}`} />
        </div>
    );

}

export default memo (Card);