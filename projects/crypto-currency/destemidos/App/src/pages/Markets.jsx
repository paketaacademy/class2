import React, { useState, useEffect } from 'react';
import TableMarket from '../components/TableMarket';
import api from '../api';


const headCells = [
    { id: 'id', numeric: false, disablePadding: true, label: '#', sticky: true },
    { id: 'coin', numeric: false, disablePadding: true, label: 'Coin', sticky: true },
    { id: 'alerts', numeric: true, disablePadding: false, label: 'Alerts', sticky: false },
    { id: 'galaxyScore', numeric: true, disablePadding: false, label: 'Galaxy Score™', sticky: false },
    { id: 'altRank', numeric: true, disablePadding: false, label: 'AltRank™', sticky: false },
    { id: 'correlationRank', numeric: true, disablePadding: false, label: 'Correlation Rank', sticky: false },
    { id: 'price', numeric: true, disablePadding: false, label: 'Price', sticky: false },
    { id: '1hChangeUSD', numeric: true, disablePadding: false, label: '1H % Change (USD)', sticky: false },
    { id: '24hChangeUSD', numeric: true, disablePadding: false, label: '24H % Change (USD)', sticky: false },
    { id: '24hChangeBTC', numeric: true, disablePadding: false, label: '24H % Change (BTC)', sticky: false },
    { id: 'marketCap', numeric: true, disablePadding: false, label: 'Market Cap', sticky: false },
    { id: 'marketVolume', numeric: true, disablePadding: false, label: 'Market Volume', sticky: false },
    { id: 'marketDominance', numeric: true, disablePadding: false, label: 'Market Dominance', sticky: false },
    { id: 'volatily', numeric: true, disablePadding: false, label: 'Volatility', sticky: false },
    { id: 'circulatingSupply', numeric: true, disablePadding: false, label: 'Circulating Supply', sticky: false },
    { id: 'socialVol', numeric: true, disablePadding: false, label: 'Social Volume', sticky: false },
    { id: 'socialEng', numeric: true, disablePadding: false, label: 'Social Engagement', sticky: false },
    { id: 'socialCont', numeric: true, disablePadding: false, label: 'Social Contributors', sticky: false },
    { id: 'socialDom', numeric: true, disablePadding: false, label: 'Social Dominance', sticky: false },
    { id: 'averageSent', numeric: true, disablePadding: false, label: 'Average Sentiment', sticky: false },
    { id: 'bullishSent', numeric: true, disablePadding: false, label: 'Bullish Sentiment', sticky: false },
    { id: 'bearishSent', numeric: true, disablePadding: false, label: 'Bearish Sentiment', sticky: false },
    { id: 'sharedLinks', numeric: true, disablePadding: false, label: 'Shared Links', sticky: false },
    { id: 'twitterVol', numeric: true, disablePadding: false, label: 'Twitter Volume', sticky: false },
    { id: 'redditVol', numeric: true, disablePadding: false, label: 'Reddit Volume', sticky: false },
    { id: 'mediumVol', numeric: true, disablePadding: false, label: 'Medium Volume', sticky: false },
    { id: 'youtubeVol', numeric: true, disablePadding: false, label: 'Youtube Volume', sticky: false },
    { id: 'newsVol', numeric: true, disablePadding: false, label: 'News Volume', sticky: false },
    { id: 'spamVol', numeric: true, disablePadding: false, label: 'Spam Volume', sticky: false },
];

function Markets() {
    const [coins, setCoins] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        if (!isUpdate) {
            setIsUpdate(true);
            setloading(true);
            api.get('/market').then((response) => {
                setCoins(response.data.data)
                console.log("teste", response);
            }).finally(() => {
                setloading(false);
            })

        }

    }, [isUpdate])

    return (
        <>

            <button onClick={() => setIsUpdate(false)}>{loading ? "atualizando" : "Atualizar Página"}</button>
            <TableMarket rows={coins} headCells={headCells} />
        </>
    )

}

export default Markets;