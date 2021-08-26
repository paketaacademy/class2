
import BoardBox from '../../components/Board'
import DetailsBoard from "../../components/DetailsBoard"
import List from "../../components/List/list"
import Menu from "../../components/Menu"

function Board() {
  return (
    <BoardBox />
    <>
      <Menu />
      <DetailsBoard />
      <List />
    </>
  )
}

export default Board