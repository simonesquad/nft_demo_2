import './App.css';
import Header from './components/Header'
import CollectionCard from './components/CollectionCard';
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

  return (
  <div className='app'>
   <Header />
   <CollectionCard 
      id={0} 
      name={'Bandana Punk'} 
      traits={[{'value': 7}]}
      image='https://ipfs.thirdweb.com/ipfs/QmRGiD2K1G6h34f5BiEvNgyMdUey2FDh4nJc4WRoPXCAuC/0.png'
    />
   </div>
  );
}

export default App;
