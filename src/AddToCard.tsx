import React, { useState } from 'react'
import { profileProps } from './TypeRef'

interface IProps{
    people:profileProps["person"],
    setArrProfile:React.Dispatch<React.SetStateAction<profileProps['person']>>
}

const AddToCard:React.FC<IProps> = ({people, setArrProfile}) => {
    const[currentProfile, setProfile]= useState(
        {
            name:"",
            img:"",
            note:"",
            caption:"",
            
        }
    )

    const handleOnchange=(e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>{
        setProfile({...currentProfile,[e.target.name]:e.target.value })
      
    }
    const handleSubmit=():void=>{
        if(
            !currentProfile.name||
            !currentProfile.img
        ){
            return
        }
        
        setArrProfile([...people,{
            name:currentProfile.name,
            img:currentProfile.img,
            note:currentProfile.note,
            caption:currentProfile.caption,
        }])
         
        setProfile({
            name:"",
            img:"",
            note:"",
            caption:"",
           })
        
    }
  return (
    <div>

    <div>Add to Card function</div>
    <div>
        <input onChange={ e=>handleOnchange(e)} name='name' placeholder='name' value={currentProfile.name}></input>
    </div>
    <div>
        <input onChange={ e=>handleOnchange(e)} name='img' placeholder='image' value={currentProfile.img}></input>
    </div>
    <div>
        <input onChange={ e=>handleOnchange(e)} name='note' placeholder="notes" value={currentProfile.note}></input>
    </div>
    <div>
        <textarea onChange={ e=>handleOnchange(e)} name='caption' placeholder='Description' rows={10} value={currentProfile.caption}></textarea>
    </div>
        <button onClick={()=>handleSubmit()}>submint</button>
    </div>
    
  )
}

export default AddToCard