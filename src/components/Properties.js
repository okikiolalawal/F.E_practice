export const Properties = (props) => {
  return (
    
    <>
    
    <div className='border shadow-sm col-3 mx-auto my-3'>
    <div className={`${props.color}`}onMouseDown={()=>props.func("Lawal")}>
        <div className='text-center'>{props.Name}</div>
        <div className='text-center'>{props.age}</div>
    </div>
    </div>
    
    </>
   
  )
}
