import { useEffect, useState } from "react";
import type { Produto } from "../entity/Produto";

const BASE_URL = import.meta.env.VITE_URL_PRODUTOS

interface IUseFetchProdutosResult {
    produtos: Produto[] | null;
    loading: boolean;
    error: unknown;
};


function useFetchProdutos(offset: number, limit: number): IUseFetchProdutosResult {
    const [produtos, setProdutos] = useState<Produto[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        fetch(`${BASE_URL}/products?offset=${offset}&limit=${limit}`)
            .then(res => {
                if (!res.ok) throw new Error(`Erro ${res.status}`)
                return res.json();
            })
            .then(data => { setProdutos(data); setLoading(false) })
            .catch(err => { setError(err); setLoading(false) })
    }, [`${BASE_URL}/products?offset=${offset}&limit=${limit}`]);


    return { produtos, loading, error }
}

export default useFetchProdutos