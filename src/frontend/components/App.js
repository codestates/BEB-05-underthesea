import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.png';
import './App.css';

// useState hook : accounts를 저장하고 연결하기 위해 사용
import { useState } from 'react';
// ethers 라이브러리 임포트
import { ethers } from "ethers";
// contractsData 임포트
import MarketplaceAbi from '../contractsData/Marketplace.json';
import MarketplaceAddress from '../contractsData/Marketplace-address.json';
import NFTAbi from '../contractsData/NFT.json';
import NFTAddress from '../contractsData/NFT-address.json';
import Home from './Home';
import Create from './Create';
import MyListedItem from './MyListedItem';
import MyPurchases from './MyPurchases';
import { Spinner } from 'react-bootstrap';


function App() {
  const[loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const [nft, setNFT] = useState({});
  const [marketplace, setMarketplace] = useState({});

  // MetaMask 계정 Login & Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    // Get provider from MetaMask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Set signer
    const signer = provider.getSigner();

    // blockchain에서 컨트랙트 로드
    loadContracts(signer)
  }
  const loadContracts = async (signer) = {
    // Get deployed copies of contracts
    const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer)
    setMarketplace(marketplace)
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
    setNTF(nft)
    setLoading(false)

  }

  return (
    <BrowserRouter>
      <div>
        <Navigation web3Handler={web3Handler} account={account} />
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <Spinner animation="border" style={{ display: 'flex' }} />
            <p className='mx-3 my-0'>Awaiting MetaMask Connection...</p>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={
              <Home />
            } />
            <Route path="/create" element={} />
            <Route path="/my-listed-items" element={} />
            <Route path="/my-purchases" element={} />
          </Routes>
        )}
        {/* <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mx-auto mt-5">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
                <h1 className="mt-5">Dapp University Starter Kit</h1>
                <p>
                  Edit <code>src/frontend/components/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LEARN BLOCKCHAIN <u><b>NOW! </b></u>
                </a>
              </div>
            </main>
          </div>
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
