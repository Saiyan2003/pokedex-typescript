import React, { useEffect, useState } from 'react'

/* Importing the bootstrap library. */
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure';
import { Card, ListGroup } from 'react-bootstrap';
import { Pokemon } from '../models/pokemon';
import { getPokemons } from '../controller/getpokemon';

const Listado = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const [query, setQuery] = useState("");

    useEffect(() => {
        const ObtenerTodos = async () => {
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        ObtenerTodos();
    }, []);
    
    const filtrarPokemon = pokemons?.slice(0,200).filter((pokemon) =>{
        return pokemon.name.toLowerCase().match(query.toLowerCase());
    })

    return (
        <>
            <h1>Pokedex</h1>

            <header>
                <input value={query}
                    placeholder={'Buscar pokemon'}
                    type={'text'}
                    onChange={(event) => setQuery(event.target.value.trim())} />
            </header>

            <div className='content-wrapper'>
                <div className='content'>
                    <div className="row gap-3">

                        {
                            filtrarPokemon?.slice(0, 200).map((p) => (
                                <Card className='mx-auto' style={{ width: '18rem' }} key={p.id}>
                                    <Card.Header><b>Tipo :</b> {p.type} </Card.Header>
                                    <Card.Img width="80" height="100" className='d-block mx-auto w-50' variant="top" src={p.gif} />
                                    <Card.Body>
                                        <Card.Title>{p.id} -{p.name}</Card.Title>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>
                                                <Figure.Image
                                                    width={16}
                                                    height={16}
                                                    alt={'10x10'}
                                                    src="https://cdn-icons-png.flaticon.com/512/3599/3599696.png"
                                                />
                                                <b> HP :</b> {p.hp}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Figure.Image
                                                    width={16}
                                                    height={16}
                                                    alt={'10x10'}
                                                    src="https://cdn-icons-png.flaticon.com/128/934/934478.png"
                                                />
                                                <b> Ataque :</b> {p.attack}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Figure.Image
                                                    width={16}
                                                    height={16}
                                                    alt={'10x10'}
                                                    src="https://cdn-icons-png.flaticon.com/512/9848/9848633.png"
                                                />
                                                <b> Defensa :</b> {p.defense}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Figure.Image
                                                    width={16}
                                                    height={16}
                                                    alt={'10x10'}
                                                    src="https://cdn-icons-png.flaticon.com/512/1671/1671062.png"
                                                />
                                                <b> E.Ataque :</b> {p.sp_atk}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Figure.Image
                                                    width={16}
                                                    height={16}
                                                    alt={'10x10'}
                                                    src="https://cdn-icons-png.flaticon.com/512/1671/1671062.png"
                                                />
                                                <b> E.Defensa :</b> {p.sp_def}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Figure.Image
                                                    width={16}
                                                    height={16}
                                                    alt={'10x10'}
                                                    src="https://cdn-icons-png.flaticon.com/512/8853/8853763.png"
                                                />
                                                <b> Velocidad :</b> {p.speed}
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Listado;