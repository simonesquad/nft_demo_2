import './App.css';
import Header from './components/Header'
import Punklist from './components/Punklist';
import Main from './components/Main';
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [punkListData, setPunkListData] = useState([])
// right now this isn't rendering for me because of error code 429 TOO MANY REQUESTS

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xe0B43E22E3397B30596dBA157d4B2Af62760f8E3&order_direction=ascending')
      console.log(openseaData.data.asseets)
      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])
// this is where the data is being filtered from the open sea API call, which currently isn't working on mine
  return (
  <div className='app'>
   <Header />
   <Main />
    <Punklist punkListData={punkListData} />
   </div>
  );
}

export default App;
