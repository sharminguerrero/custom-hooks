import { useEffect, useState } from "react";

export const useFetch = (url) => {

const [state, setState] = useState ({
    results: null,
    isLoading: true,
    hasError: null,
})

const getFetch = async () => {

    /*setState({
        ...state,
        isLoading: true,
    });*/

    const resp = await fetch(url);
    const results = await resp.json();

    setState({
        results,
        isLoading: false,
        hasError: null,
    })
} 

useEffect(() => {
getFetch();
}, [url])


  return{
    results: state.results,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}