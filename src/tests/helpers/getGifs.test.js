import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en getGifs Fetch', () => {

    test('debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs("Dragon ball");

        expect( gifs.length ).toBe( 10 )

    })

    test('cuando no hay argumento debe retornar un array vacio', async() => {
        
        const gifs = await getGifs("");
        expect( gifs.length ).toBe( 0 )

    })
    
})
