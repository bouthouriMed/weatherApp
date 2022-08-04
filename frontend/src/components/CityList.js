import React, {useState, useEffect} from 'react'
import CityItem  from './CityItem'
import { useDispatch, useSelector } from 'react-redux';
import { getCities, addCity } from '../redux/ducks/citySlice'
import { toast } from 'react-toastify'

function CityList() {
  const [city, setCity] = useState('')

  const handleChange = (e) => setCity(e.target.value)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addCity(city)) 
    setCity('')
  }

  const dispatch = useDispatch()
  const { cities, isLoading } = useSelector(state => state.city)
   
  console.log({cities})
  useEffect(() => {
    dispatch(getCities())
  }, [dispatch])

  return (
    <div >
      <form onSubmit={handleSubmit} className='search-box'>
        <input name='city' placeholder="type a city name" value={city} onChange={handleChange} className='search-field' /> 
        <input type='submit' value='Add' className='add-button'/>
       </form>
      {isLoading ? (<span>loading...</span>) : (
         <div className='city-list'>
         {cities.length === 0 && <h3>No city to monitor, please add one</h3>}
         {cities?.map((city) => (
             <CityItem city={city} />
          ))}
       </div>
      )}
    </div>
  )
}

export default CityList