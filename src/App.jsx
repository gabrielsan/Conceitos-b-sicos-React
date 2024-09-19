import Titulo from "./Titulo"

function App(){
  return(
    <div>
      <Titulo cor="blue"/>
      <Titulo cor="red" nome="Santin [Props]" paragrafo={true} />
      <Titulo cor="purple"/>
    </div>
  )
}

export default App