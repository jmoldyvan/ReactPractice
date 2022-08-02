import React from "react"
import Loading from './components/Loading'
import PokePic from './components/PokePic'
import Guesses from './components/Guesses'

// https://pokeapi.co/api/v2/pokemon/{id or name}/limit 905
let urls = []
for (let i = 1; i < 494; i++) {
    urls.push(`https://pokeapi.co/api/v2/pokemon/${i}/?limit=500`)
}

export default function App() {
    const [loading, setLoading] = React.useState(true);
    const [allPokemonData, setAllPokemonData] = React.useState([]);
    let[selectedPokemonData, setSelectedPokemonData] = React.useState({
        id: null,
        name: '',
        weight: null,
        // type0: '',
        // type1: '',
        image: '',
    })


    const fetchPokemon = async () => {
        try{
            const allPokemonData = await Promise.all(
                urls.map((url) => fetch(url).then((res) => res.json()))           
                ) 
            setAllPokemonData(allPokemonData);
            setLoading(false);
            console.log(allPokemonData);
        }   catch (error) {
            console.log(error);
        }
    }
    React.useEffect(() => {
        fetchPokemon();
      }, []);
    if (loading) {
    return <Loading />;
    }

    function getRandomPokemonInfo(){
        let randomPokemon = allPokemonData[Math.floor(Math.random()*allPokemonData.length)]
        setSelectedPokemonData(prevPoke => ({
            ...prevPoke, 
            image: randomPokemon.sprites.front_default, 
            id: randomPokemon.id,
            name: randomPokemon.name,
            weight: randomPokemon.weight,
            id: randomPokemon.id,
        }))
    }


    return (
        
        <main>
            <PokePic selectedPokemonData={selectedPokemonData}  handleClick= {getRandomPokemonInfo} />
            <Guesses />
        </main>
    )
}