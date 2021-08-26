import BoardBox from '../../components/Board'
import DetailsBoard from '../../components/DetailsBoard'
import Menu from "../../components/Menu"

function Board() {
  return (    
    <>
      <Menu />
      <DetailsBoard />
      <BoardBox />      
    </>
  )
}

export default Board