import React from 'react';
import "@testing-library/jest-dom"

import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { getGifs } from '../../helpers/getGifs';

jest.mock("../../hooks/useFetchGifs")

describe('Pruebas en <GifGrid />', () => {
    
    const category = "Hola mundo"
    
    test('debe mostrarse correctamente (snapshot) ', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow ( <GifGrid category= { category }/>)
        
        expect( wrapper ).toMatchSnapshot()
        
    })
    
    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
       
        const gifs = [{
            id: "ABC",
            url: "https://localhost",
            title: "cualquiier cosa"
        },
        {
            id: "123",
            url: "https://localhost2",
            title: "cualquiier cosa 2"
        }];

        useFetchGifs.mockReturnValue({
            data: gifs, 
            loading: false
        })

        const wrapper = shallow ( <GifGrid category= { category }/>)

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find("p").exists() ).toBe(false)
        expect( wrapper.find("GifGridItem").length ).toBe( gifs.length )

        })
        

})
