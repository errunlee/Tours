import { useState ,useEffect} from "react"
export default function Tour({id,name,image,price,info,handleDelete}) {
  let [more,setMore]=useState(false)
  let [description,setDescription]=useState(info)
  useEffect(()=>{
    if(description.length>200){
    setDescription(description.slice(0,200)+' ...')
  }
  },[])
  const handleMore=()=>{
    setMore(true);
    setDescription(info);
  }
  const handleLess=()=>{
    if(description.length>200){
    setDescription(description.slice(0,200)+' ...')
  }
    setMore(false);
  }
  return (
    <>
      <div className="card mx-3 my-2 shadow-lg position-relative" style={{width:'20rem'}}>
        <img className="card-img-top" src={image} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}               <button onClick={!more?handleMore:handleLess} className='btn d-block text-primary font-weight-bolder'>{!more?'ReadMore':'ReadLess'}</button></p>
            <button onClick={()=>{handleDelete(id)}} className="btn btn-info">Not interested</button>
            <span className='price'>${price}</span>
          </div>
      </div>
    </>
  )
}