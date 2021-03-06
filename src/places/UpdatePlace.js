import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../shared/Input';
import Button from '../shared/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../util/validators';
import './PlaceForm.css';
import { useForm } from '../hooks/form-hook';

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Linnanmäki',
        description:'Huvipuisto',
        imageUrl:'https://images.unsplash.com/photo-1557195218-99ce512183c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        ,
        address:'Tivolikuja 1, 00510 Helsinki',
        location:{
            lat: 60.1881704,
            lng: 24.9382416
       
    },

    creator: 'u1'
},
    {
        id:'p2',
        title:'Linnanmäki',
        description:'Huvipuisto',
        imageUrl:'https://images.unsplash.com/photo-1557195218-99ce512183c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        ,
        address:'Tivolikuja 1, 00510 Helsinki',
        location:{
            lat: 60.1881704,
            lng: 24.9382416
        },

        creator: 'u2'
    }
]

const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true);
    const placeId = useParams().placeId;
  
    const [formState, inputHandler, setFormData] = useForm(
      {
        title: {
          value: '',
          isValid: false
        },
        description: {
          value: '',
          isValid: false
        }
      },
      false
    );
  
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
  
    useEffect(() => {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true
          },
          description: {
            value: identifiedPlace.description,
            isValid: true
          }
        },
        true
      );
      setIsLoading(false);
    }, [setFormData, identifiedPlace]);
  
    const placeUpdateSubmitHandler = event => {
      event.preventDefault();
      console.log(formState.inputs);
    };
  
    if (!identifiedPlace) {
      return (
        <div className="center">
          <h2>Could not find place!</h2>
        </div>
      );
    }
  
    if (isLoading) {
      return (
        <div className="center">
          <h2>Loading...</h2>
        </div>
      );
    }
  
    return (
      <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialValid={formState.inputs.title.isValid}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (min. 5 characters)."
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE PLACE
        </Button>
      </form>
    );
  };
  
  export default UpdatePlace;
  