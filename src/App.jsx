import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Category from './Components/Category'

import axios from 'axios'

function App() {

  let [finalCat, SetFinalCat] = useState([])
  let [finalProduct, SetFinalProduct] = useState([])
  let [catName, SetCatName]= useState('')



  let getCategory = () =>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data)
    .then((finalRes)=>{
    SetFinalCat(finalRes)
    })
  }

let getProduct = () => {
    axios.get('https://dummyjson.com/products')
    .then((res)=>res.data)
    .then((finalRes)=>{
    SetFinalProduct(finalRes.products);
    })
}

  useEffect(()=>{
    getCategory();
    getProduct();
  },[])

 useEffect(()=>{
  if(catName!==""){
    axios.get(`https://dummyjson.com/products/category/${catName}`)
    .then((res)=>res.data)
    .then((finalRes)=>{
    SetFinalProduct(finalRes.products);
    })
  }
 })


  let lil = finalProduct.map((v,i)=>{
    return(
      <Products key={i} pdata={v}/>
    )
  })

  return (
    <>
    <div className='w-[100%] text-white py-5'>
        <h1 className='mx-auto lg:text-4xl text-3xl font-bold text-center lg:mb-5 mb-3 w-full'>Our Products</h1>

      <div className='max-w-[1240px] mx-auto px-4'>
        <div className='grid gap-5 lg:grid-cols-[30%_auto]'>
          <div>
            <Category cat={finalCat} SetCatName={SetCatName}/>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 content-start'>
            {lil}
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default App


function Products({pdata}) {
  return (
    <div>
       <div className='p-3 w-full h-[28rem] aspect-auto card1 shadow-xl shadow-purple-900 bg-gray-200 text-black flex flex-col justify-center items-center gap-2'>
            <img src={pdata.thumbnail}  className='w-[100%] h-[250px] mt-2 border-2 border-black rounded-md'/>
            <h2 className='font-extrabold text-lg'>{pdata.title}</h2>
            <p className='text-sm font-normal'>{pdata.description}</p>
            <span className='text-xl font-sans font-extrabold'>{pdata.brand}</span>
          </div>
    </div>
  )
}