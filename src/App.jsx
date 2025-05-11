import CardsGrid from "./components/CardsGrid/CardsGrid"
import useFetch from "./hooks/useFetch"
import './App.css'
import Header from "./components/Header/Header";
import Subtitle from "./components/Subtitle/Subtitle";


function App() {
  const {data,loading,error} = useFetch();

  if(loading) return <div>Loading ...</div>;
  if(error) return <p>Error: {error}</p>
  return (
    <div className="app-container">
      <Header />
      <Subtitle/>
      <CardsGrid data={data}/>
    </div>
  )
}

export default App
