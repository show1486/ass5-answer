import React, {useEffect, useState}from 'react'
import { getCountries } from '../api/countries'
import { Country } from '../types/country'
import CountryCard from './CountryCard'
const CountryList:React.FC = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<Country[]>([])
useEffect(()=>{
    const fetchCountries = async ()=>{
        try {
            const data : Country[] = await getCountries();
            setCountries(data);
        } catch (error) {
            alert(error);
        }
    }
    fetchCountries();
},[])

const handleSelectCountry = (country : Country) : void =>{
    if(!selectedCountries.find((selectedCountry : Country)=>
        selectedCountry.name.common === country.name.common)){
            setSelectedCountries([...selectedCountries, country])

            setCountries(countries.filter((countrys : Country)=>{
                return countrys.name.common !== country.name.common
            }))
        }else{
            setSelectedCountries(selectedCountries.filter((selectedCountry:Country) =>{
                return selectedCountry.name.common !== country.name.common;
            
            }))
             setCountries([country, ...countries])
            
        } 
}

  return (
    <div>
          <div>
    <h1>선택된 나라목록</h1>
    {selectedCountries.map((country)=>{
        return <CountryCard country={country} key={country.name.common}
        handleSelectCountry={handleSelectCountry}/>
    })}
    </div>

    <div>
    <h1>나라목록</h1>
    {countries.map((country)=>{
        return <CountryCard country={country} key={country.name.common}
        handleSelectCountry={handleSelectCountry}/>
    })}
    </div>

  

    </div>
    
  )
}

export default CountryList
