import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThumbDetail from "./ThumbDetail";

function Home() {
  const [countries, setCountries] = useState([]);
  const [mode, setMode] = useState(true);
  const [iconBtn,setIconBtn] = useState('<i class="far fa-sun"></i> Light Mode')

  useEffect(() => {
    getCountries
  }, []);

  const getCountries = async() => {
    const res = await fetch("https://restcountries.com/v2/all")
    const data = await res.json()
    await setCountries()
  };

  const darkMode = ()=>{
    if(mode){
      document.documentElement.classList.add('dark')
      setIconBtn('<i class="fa-sharp fa-regular fa-moon"></i> Dark Mode')
      setMode(current => current  = !current)
    }
    if(!mode){
      document.documentElement.classList.remove('dark')
      setIconBtn('<i class="far fa-sun"></i> Light Mode')
      setMode(current => current  = !current)
    }
  }

  // search codetry
  const searchCountry = name=>{
    if(name.length <3 || name === '') return
    fetch(`https://restcountries.com/v2/name/${name}`)
    .then(res => res.json())
    .then(data =>{
      setCountries(data)
    })
  }

  const filterByRegion = region =>{
    if(region === '') return
    fetch(`https://restcountries.com/v2/region/${region}`)
    .then(res=> res.json())
    .then(data =>{
      setCountries(data)
    })
  }
  return <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
    <div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
      <div className="flex container mx-auto">
        <h1 className="font-bold text-xl">Where in the world</h1>
        <div className="ml-auto font-medium">
          <button onClick={()=> darkMode()} dangerouslySetInnerHTML={{__html : iconBtn}}></button>
        </div>
      </div>
    </div>
    <div className="flex container mx-auto mb-16">
      <i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-m text-gray-400"></i>
      <input className="pl-10 p-2 shadow-md rounded-md w-1/3 dark:bg-gray-700" onChange={(name)=>searchCountry(name.target.value)} 
      type="text" placeholder="Search for a country..."/>
      <select className="ml-auto my-2 p-2 shadow-md rounded-md font-medium dark:bg-gray-700" onChange={ values=> filterByRegion(values.target.value)}>
        <option>Filter by region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>

      </select>
    </div>
    <div className="container grid grid-cols-4 gap-16 mx-auto">
      {countries.map((country, index)=> <Link to={{pathname: 'details', state: country}} key={index}>
        <ThumbDetail title={country.name}
        image_url={country.flag}
        population={country.populatio}
        region={country.region}
        capital={country.capital}
        />
      </Link>)}
    </div>
  </div>;
}

export default Home;
