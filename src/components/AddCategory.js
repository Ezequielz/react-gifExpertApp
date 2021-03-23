import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {


    const [inpuntValue, setinpuntValue] = useState("");


    const handleInpuntChange = (e) =>{
        setinpuntValue( e.target.value)
    } 
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if( inpuntValue.trim().length > 2){
            setCategories( cats => [inpuntValue,...cats])
            setinpuntValue("")
        }
        
       
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value = {inpuntValue}
                onChange={ handleInpuntChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}