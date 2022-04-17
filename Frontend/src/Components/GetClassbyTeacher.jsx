
import React from 'react'
import { useSelector } from 'react-redux';

export default function GetClassbyTeacher({id}) {
  
         
  const {classes } = useSelector((state) => state.class);
  
  
  let c=classes.filter((e)=>{
   return e.teacher==id
  })

  
    return (
    <div>
    {c.length}
    
    </div>
  )
}
