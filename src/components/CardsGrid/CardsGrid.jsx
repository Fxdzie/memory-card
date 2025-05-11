import { memo,useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import useFetch from "../../hooks/useFetch";
import './CardsGrid.css'

const getKey = () => crypto.randomUUID();

function CardsGrid(data){
    const [images,setImages] = useState(data?.data?.images || []);
    const [clickedImages, setClickedImages] = useLocalStorage("clickedImages",[]);
    const [score, setScore] = useLocalStorage("score",0);
    const [bestScore,setBestScore] = useLocalStorage("bestScore",0);
    const [isLoading,setIsLoading] = useState(!data?.data?.images?.length);

    const { data: fetchedData, fetchData, error} = useFetch();

    useEffect(()=>{
        if (fetchedData?.images){
            setImages(fetchedData.images);
            setIsLoading(false);
            setClickedImages([]);
        }
    },[fetchedData]);

    function updateBestScore(currentScore){
        if (currentScore>bestScore){
            setBestScore(currentScore);
        }
    }

    function processTurn(imgId){
        const newClickedImages = [...clickedImages,imgId];
        setClickedImages(newClickedImages);

        if(clickedImages.includes(imgId)){
            updateBestScore(score);
            setClickedImages([]);
            setScore(0);
        }else{
            const newScore = score + 1;
            setScore(newScore);

            if(newClickedImages.length === images.length){
                updateBestScore(newScore);
                fetchData();
                setClickedImages([]);
            } else{
                const shuffled = [...images].sort(()=>Math.random()-0.5);
                setImages(shuffled);
            }
        }
    }

    if(error){
        return <p>Failed to fetch data</p>;
    }

    if(isLoading){
        return <Loader message='Loading new images...'/>;
    }

    // const promise1 = Promise.resolve(images[0].image.original.url);
    // promise1.then((value)=>{
    //     console.log(value);
    // });

    
    return (
        <div className="grid-container">
            {images.map((item)=>(
                <Card 
                    key={getKey()}
                    imgUrl={item?.image?.original?.url || ""}
                    imgId={item?.id}
                    category={item?.category}
                    processTurn={(imgId)=>processTurn(imgId)}
                />
            ))}
        </div>
    )
}


export default memo (CardsGrid);