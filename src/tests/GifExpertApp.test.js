import React from 'react';
import "@testing-library/jest-dom"
import { shallow } from "enzyme"
import { GifExpertApp } from "../GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => {
    
    test('debe de mostrarse correctamente (snapshot)', () => {
        
        const wrapper = shallow( <GifExpertApp /> )

        expect( wrapper ).toMatchSnapshot()


    })

    test('debe de mostrar una lista de categorias', () => {
        
        const categories = ["one punch", "Dragon ball"]
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> )

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find("GifGrid").length ).toBe(categories.length)
    })
    
    

})
