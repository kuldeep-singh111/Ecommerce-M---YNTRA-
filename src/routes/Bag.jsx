import React from 'react'
import BagSummery from '../components/BagSummery'
import Bagitem from '../components/Bagitem'
import { useSelector } from 'react-redux'


const Bag = () => {

    const bagItems = useSelector(state => state.bag);
    const items = useSelector(state => state.items);
    const finalItems = items.filter(item => {
        const itemIndex = bagItems.indexOf(item.id);
        return itemIndex >= 0;
    });

    return (
        <main className='main-container'>
            <div className="bag-page">
                <div className="bag-items-container">
                    {finalItems.map(item => <Bagitem item={item} />)}
                </div>
                <BagSummery />


            </div>
        </main>


    )
}

export default Bag