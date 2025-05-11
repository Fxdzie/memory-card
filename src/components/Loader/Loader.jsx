import './Loader.css'

function Loader({message = 'Loading...'}){
    return (
        <div className="loading" data-testid="loader">
          <div className="spinner"/>
          <div>{message}</div>
        </div>
      );
}

export default Loader;