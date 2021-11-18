import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';


describe('Pruebeas en <PriemraApp/>', () => {
    // test('should shows the message "Hola, Soy Goku"', () => {
    //     const saludo = 'Hola, Soy Goku';
    //     const {getByText} = render(<PrimeraApp saludo={saludo}/>)

    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('should shows <PrimeraApp/> successfuly', () => {
        const saludo ='Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should shows subtitle sent by props', ()=> {
        const saludo ='Hola, Soy Goku';
        const subtitle = 'Soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subtitle}
            />
        );

        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);
        expect(textoParrafo).toBe(subtitle);

    })
    
        
})
