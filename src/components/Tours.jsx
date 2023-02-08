import Tour from './Tour'
import Loading from './Loading'
import {useEffect, useState} from 'react'
export default function Tours(){
  const [load,setLoad]=useState(false)
  const [loading,setLoading]=useState(true)
  const url='https://course-api.com/react-tours-project'
  const [data,setData]=useState([])
  const fetchApi=async()=>{
    setLoading(true)
    const response=await fetch(url)
    const result=await response.json();
    setLoading(false);
    setData(result)
  }
  const handleDelete=(delId)=>{
    setData(data.filter((item)=>{
      return item.id!==delId
    }))
  }
  const handleLoad=()=>{
    setLoad(!load)
  }
  useEffect(()=>{
    fetchApi();
  },[load])
  return(
    <>
    {loading && <Loading/>}
    {!loading && data.length>0? data.map((item)=>{
      const {id,name,image,price,info}=item;
      return <div  key={id}><Tour id={id} name={name} image={image} price={price} info={info} handleDelete={handleDelete}/></div>
    }):!loading && <div className='d-flex flex-column justify-content-center'><h1>No Tours Left</h1><button onClick={handleLoad} className='btn btn-info'>Refresh</button></div>}
      </>
  )
}