import React from 'react'

export const Search = props => {
    return (
        <div className='col col-sm-4'>
            <input 
                className='form-control' 
                placeholder='search'
                onChange={e => props.setSearch(e.target.value)} 
                value={props.value}
                />
        </div>
    )
}
