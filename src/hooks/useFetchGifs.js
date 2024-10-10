import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Agregar estado de carga

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false); // Cambiar a false una vez que se obtienen las imágenes
    };

    useEffect(() => {
        getImages();
    }, [category]); // Dependencia en category

    return {
        images, // Cambiar 'image' a 'images'
        isLoading
    };
};
