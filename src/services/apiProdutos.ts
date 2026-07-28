import type { Produto } from "../entity/Produto";




const BASE_URL = "https://api.escuelajs.co/api/v1";

export default async function getProdutcs(offset= 0, limit = 10): Promise<Produto[]> {
    const res = await fetch(`${BASE_URL}/products?offset=${offset}&limit=${limit}`);

    if (!res.ok){
        throw new Error('Não foi possivel trazer os produtos')
    }
    return res.json()
}