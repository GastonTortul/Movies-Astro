import { useState, useEffect } from "react"
import { Button } from "./ui/Button"
import {Card} from './ui/Card'
import { Search } from "./ui/Search"

export const Main = () => {

    const [page, setPage] = useState(1)
    const[genders, setGenders] = useState([])
    const[selectedGender, setSelectedGender] = useState("")
    const [movies, setMovies] = useState ([])
    const [filteredMovies, setFiltered]
    const[loading, setLoading] = useState (false)
    const getGenders = async ()=>{
        try{
            const url =
            const
            }
        }
    const addPage = () => {
        setPage (page + 1)
    }
    const getMovies = async ()=>{
        try{   
            setLoading(true)
            const url = ´https://api.themoviedb.org/3/movie/popular?language=es-ES&page=${page}´
            
            const req = await fetch(url, config)
            if (req.status === 200){
                const res = await req.json()
                setMovies([movies.concat(res.results)])
            }
        }
        } catch(err){
            console.error(err)
        } finally{
            setLoading(false)
        }
        
    ``

    useEffect(() =>{
        Pormise.all(getMovies(), getGenders())
    
    }, [page])

    const filterMovies= () => {

        if(selectedGender === ""){
            setFilteredMovies(movies)
        }else{
            const fm= movies.filter(movie=>{
              if(movie.genre_ids.includes(selectedGender)){
                return movie
              }  
            })
            setFilteredMovies(fm)
        }
    }
    useEffect(()=>{
        getGenders()
    }, [])

    useEffect(() =>{
        getMovies()
    }, [page])

    useEffect(()=>{
        filterMovies()
    }, [movies, selectedGender])

    
    return <div className="contenedor main">
    <Search 
        selectedGender = {selectedGender}
        setSelectedGender = {setSelectedGender} 
        genders = {genders}
     />
    <section className="main_cards">

        {
            
        }
        
    </section>
    {
        loading ? <p>Cargando...</p> : <Button onClick = {addPage}>Ver Más</Button>
    }
    
    </div>
} 
