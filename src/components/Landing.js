import React, { useEffect, useState } from 'react';
import { getCoin } from '../services/api';
import Coin from './Coin';
import styles from './Landing.module.css';

//components
import Loader from './loader';

const Landing = () => {
    const [Coins,setCoins]=useState([])
    const [search ,setSearch]=useState("")
    useEffect(()=>{
        const fectchdada=async()=>{
            const data=await getCoin()
            setCoins(data);
        }
        fectchdada()

    },[]);

    const changeHandler=event=>{
        setSearch(event.target.value)
    }
    const searchedCoins=Coins.filter(coin =>coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
       <>
            <input className={styles.input} type='text' placeholder='Search' value={search} onChange={changeHandler}/>
            {
                Coins.length ?
                    <div className={styles.coinCanter}>
                        {searchedCoins.map(coin=><Coin 
                            key={coin.id}
                            name={coin.name}
                            image={coin.image}    
                            symbol={coin.symbol}
                            price={coin.current_price}                    
                            marketCap={coin.market_cap}
                            priceChange={coin.price_change_percentage_24h}
                        />)}
                    </div>
                :<Loader />
            }
       </>
    );
};

export default Landing;