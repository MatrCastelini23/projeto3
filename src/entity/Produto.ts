export interface ProdutoCategoria{
    id: number;
    name: string;
    image: string;
}

export interface Produto{
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: ProdutoCategoria;
    image: string;
}