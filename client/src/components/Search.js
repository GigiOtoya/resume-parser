import React from 'react'
import Card from './Cards'
import JSONDATA from './Submissions.json'
import { useState } from 'react'
import './Search.css'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className='Wrapper'>
      <div className='Search'>
          <input type='text' placeholder='Search...' onChange={event => {
            setSearchTerm(event.target.value);
            }}/>
          <div className='Cards'>
            {JSONDATA.filter((val) => {
              if (searchTerm === "") {
                return val
              }
              else if ((val['Skills'].toLowerCase().includes(searchTerm.toLowerCase()))
                      || (val['Education'].toLowerCase().includes(searchTerm.toLowerCase()))) {
                return val
              }
            }).map((val, key) => {
              return (
                <Card className='sdfdsf'
                  name={val['First Name'] + " "+ val['Last Name']} key={key}
                  education={val['Education']}
                  skills={val['Skills']}
                  work={val['Work Experience']}>
                </Card>
            );
          })}
          </div>    
      </div>
    </div>
  )
}

export default Search