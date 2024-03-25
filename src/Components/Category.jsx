import React from 'react'

function Category({cat, SetCatName}) {

    let billa = cat.map((v,i)=>{
      return(
            <li onClick={()=>SetCatName(v)} key={i} className='p-2 my-2 text-xl font-mono bg-gray-800 hover:cursor-pointer hover:scale-105 duration-300'> {v} </li>
      )  
    })
  return (
    <div>
      <h1 className=' bg-cyan-900 lg:text-3xl text-2xl font-semibold p-2.5'>Products Categories</h1>
      <ul>
        {billa}
      </ul>
    </div>
  )
}

export default Category
