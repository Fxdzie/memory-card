import './Header.css';
import Score from "../Score/Score";

function Header(){
    return (
        <header className='header'>
          <h1>Memory Card Game</h1>
          <Score />
        </header>
      );
}

export default Header;
