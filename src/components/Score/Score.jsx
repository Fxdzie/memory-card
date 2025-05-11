import { useLocalStorage } from "@uidotdev/usehooks";
import './Score.css'

function Score() {
  const [score] = useLocalStorage("score", 0);
  const [bestScore] = useLocalStorage("bestScore", 0);
  
  return (
    <div className='score-container'>
      <div>Score: {score}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  );
}

export default Score;