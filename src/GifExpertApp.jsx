import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


//import React from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes( newCategory)) return;
        //console.log(newCategory);
        //categories.push(newCategory);

        setCategories( [ newCategory, ...categories ]);
        //setCategories( cat=> [ ...cat,'Valorant']);
    }
   

    return (
        <>
        <h1>GifExpertApp</h1>

        <AddCategory 
        //setCategories={ setCategories } 
        onNewCategory={ (value) => onAddCategory(value) }
        currentCategories={ categories }
        />
           { 
            categories.map( (category) => (
                    <GifGrid key={ category } category={ category}/>
                )) 
            }
    </>
    )
   
}