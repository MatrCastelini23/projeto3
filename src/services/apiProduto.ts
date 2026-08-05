import { useEffect, useState } from "react";
import type { Produto } from "../entity/Produto";

const BASE_URL = import.meta.env.VITE_URL_PRODUTOS

interface IUseFetchProdutoResult {
    produto: Produto | null;
    loading: boolean,
    error: unknown,
}

function useFetchProduto(produtId: number): IUseFetchProdutoResult {
    const [produto, setProduto] = useState<Produto | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>();

    useEffect(() => {
        fetch(`${BASE_URL}/products/${produtId}`)
            .then(res => {
                if (!res.ok) throw new Error(`Error ${res.status}`);
                return res.json();
            })
            .then(data => { setProduto(data); setLoading(false) })
            .catch(err => { setError(err); setLoading(false) })
    }, [`${BASE_URL}`])

    return { produto, loading, error };
}

export default useFetchProduto;