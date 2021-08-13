import React, { useState, useEffect } from 'react'
import TableMarket from '../../components/TableMarket'
import './style.css'
import Destemidos from '../../components/Destemidos'

const headCells = [
  { id: 'id', numeric: false, disablePadding: true, label: '#', sticky: true },
  { id: 'coin', numeric: false, disablePadding: true, label: 'Moeda', sticky: true },
  { id: 'alerts', numeric: true, disablePadding: false, label: 'Alertas', sticky: false },
  { id: 'galaxyScore', numeric: true, disablePadding: false, label: 'Pontuação Galatica™', sticky: false },
  { id: 'correlationRank', numeric: true, disablePadding: false, label: 'Classificação Correlacionada', sticky: false },
  { id: 'price', numeric: true, disablePadding: false, label: 'Preço em USD', sticky: false },
  { id: '1hChangeUSD', numeric: true, disablePadding: false, label: 'Variação(%) em 1H(USD)', sticky: false },
  { id: '24hChangeUSD', numeric: true, disablePadding: false, label: 'Variação(%) em 24H(USD)', sticky: false },
  { id: '24hChangeBTC', numeric: true, disablePadding: false, label: 'Variação(%) em 24H(BTC)', sticky: false },
  { id: 'marketCap', numeric: true, disablePadding: false, label: 'Capitalização do Mercado', sticky: false },
  { id: 'marketVolume', numeric: true, disablePadding: false, label: 'Volume no Mercado', sticky: false },
  { id: 'marketDominance', numeric: true, disablePadding: false, label: 'Dominancia no Mercado', sticky: false },
  { id: 'volatily', numeric: true, disablePadding: false, label: 'Volatilidade do preço', sticky: false },
  { id: 'circulatingSupply', numeric: true, disablePadding: false, label: 'Suprimento de Circulação', sticky: false},
  { id: 'socialVol', numeric: true, disablePadding: false, label: 'Volume Social', sticky: false },
  { id: 'socialEng', numeric: true, disablePadding: false, label: 'Engajamento Social', sticky: false },
  { id: 'socialCont', numeric: true, disablePadding: false, label: 'Contribuição Social', sticky: false },
  { id: 'socialDom', numeric: true, disablePadding: false, label: 'Dominancia Social', sticky: false },
  { id: 'averageSent', numeric: true, disablePadding: false, label: 'Avaliação Media', sticky: false },
  { id: 'bullishSent', numeric: true, disablePadding: false, label: 'Avaliação de Alta da Moeda', sticky: false },
  { id: 'bearishSent', numeric: true, disablePadding: false, label: 'Avaliação de Baixa da Moeda', sticky: false },
  { id: 'sharedLinks', numeric: true, disablePadding: false, label: 'Links Compartilhados', sticky: false },
  { id: 'twitterVol', numeric: true, disablePadding: false, label: 'Movimentação Social no Twitter', sticky: false },
  { id: 'redditVol', numeric: true, disablePadding: false, label: 'Movimentação Social no Reddit', sticky: false },
  { id: 'mediumVol', numeric: true, disablePadding: false, label: 'Movimentação Social Média', sticky: false },
  { id: 'youtubeVol', numeric: true, disablePadding: false, label: 'Movimentação Social no Youtube', sticky: false },
  { id: 'newsVol', numeric: true, disablePadding: false, label: 'Movimentação de noticias', sticky: false },
  { id: 'spamVol', numeric: true, disablePadding: false, label: 'Volume de Spam', sticky: false },
]

const API = process.env.REACT_APP_API_URL

function Markets() {
  const [coins, setCoins] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false)
  const [loading, setloading] = useState(false)
  const API = process.env.REACT_APP_API_URL

  useEffect(() => {
    if (!isUpdate) {
      setIsUpdate(true)
      setloading(true)
      fetch(
        `${API}/markets`,
        { method: 'get' }
      )

      .then(async response => {
        const { data } = await response.json()

          setCoins(data)        

      }).finally(() => {
        setloading(false)

      })
    }                    

  }, [isUpdate])

  return (
    <>
      <div className='box'>
        <h1>Mercado</h1>
        <h2>Clique no nome da cryptmoeda para realizar a compra</h2>
      <div className='box-table'>
        <button className="btn-market-refrsh" onClick={() => setIsUpdate(false)}>{loading ? "atualizando" : "Atualizar Página"}</button>
        <TableMarket rows={coins} headCells={headCells} />
      </div>
    </div>
    </>
  )
}

export default Markets