import type { Produto } from "../entity/Produto";


const BASE_URL = import.meta.env.VITE_URL_PRODUTOS;;

export default async function getProdutcs(offset= 0, limit = 10): Promise<Produto[]> {
    const res = await fetch(`${BASE_URL}/products?offset=${offset}&limit=${limit}`);

    if (!res.ok){
        throw new Error('Não foi possivel trazer os produtos')
    }
    return res.json()
}