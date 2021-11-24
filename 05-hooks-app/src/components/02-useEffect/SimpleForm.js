import React, { useEffect, useState } from 'react'
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    // Similar a ngOnInit
    useEffect(() => {
        console.log('Hey');
    }, []);

    useEffect(() => {
        // console.log('formState changed');
    }, [formState]);

    useEffect(() => {
        // console.log('Email cambio');
    }, [email]);

    const handleInputchange = ( {target} ) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };

    return (
        <>
        <h1>useEffect</h1>
        <hr/>
        
        <div className="form-group">
            <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={ handleInputchange }
            />
        </div>

        <div className="form-group">
            <input 
                type="text"
                name="email"
                className="form-control"
                placeholder="Tu email"
                autoComplete="off"
                value={email}
                onChange={ handleInputchange }
            />
        </div>

        { name ==='123' && <Message/> }
        
        </>
        )
    }
    