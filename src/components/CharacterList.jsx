import { useEffect, useState } from 'react'
import Character from './Character'

function NavPage({page, setPage}) {
    return (
        <header className='d-flex justify-content-between aling-items-center'>
            <p>Page: { page }</p>
            <button className='btn btn-primary btn-sm'
                onClick={() => setPage(page + 1)}
            >
                Page {page + 1}
            </button>
        </header>
    )
}

const CharacterList = () => {

    const [characters, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const data = await response.json();
            setLoading(false);
            setCharacter(data.results);
        }

        fetchData()
    }, [page])

    return (
        <div className='container'>  

            <NavPage page={page} setPage={setPage}/>

            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div className="row">  
                    {characters.map((character) => {
                        return (
                            <div className="col-md-4" key={character.id}>
                                <Character character={character} />
                            </div>
                        );
                    })} 
                </div>
            )}

            <NavPage page={page} setPage={setPage}/>
        </div>           
    )
}

export default CharacterList
