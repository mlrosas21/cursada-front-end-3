import React, { useState } from 'react'
import Item from './Item'
import myPoke from './myPoke.json'
import './Shop.css'

const Shop = ({total, setTotal}) => {

  return (
    <div className='shop'>
        {myPoke.map(item => 
          <Item total={total} setTotal={setTotal} item={item}/>
        )}
    </div>
  )
}

export default Shop