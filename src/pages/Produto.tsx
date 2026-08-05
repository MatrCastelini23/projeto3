import { useParams } from "react-router-dom"
import useFetchProduto from "../services/apiProduto";
import { ClipLoader } from "react-spinners";
import ImagemProduto from "../components/ImagemProduto";


function Produto() {
    const { produtoId } = useParams();
    const { produto, loading, error } = useFetchProduto(Number(produtoId));

    if (loading) return (
        <div>
            <ClipLoader />
        </div>
    )

    if (error) return (
        <div>
            <h1>Erro ao carregar produtos</h1>
        </div>
    )

    if (!produto) return (
        <div>
            <h1>Produto fora do estoque</h1>
        </div>
    )

    return (
        <>
            <div className="container">
                <div className="flex flex-col m-20 items-center justify-center gap-6 p-7 md:flex-row md:gap-8">
                    <div>
                        <img
                            src={produto.images}
                            alt={produto.slug}
                            className="rounded-4xl"
                        />
                    </div>
                    <div className="items-center p-1.5 m-2 box-border md:items-start rounded-4xl">
                        <h1 className="text-3xl font-medium p-1.5">{produto.title}</h1>
                        <h2 className="text-2xl font-medium p-1.5">{produto.category.name}</h2>
                        <h3 className="text-2xl font-medium p-1.5">R$ {produto.price}</h3>
                        <p className="text-1xl font-medium p-1.5">{produto.description}</p>
                        <button className="bg-blue-800 font-medium m-1 p-1.5 rounded-4xl text-gray-200">Comprar agora</button>
                        <button className="bg-blue-800 font-medium m-1 p-1.5 rounded-4xl text-gray-200">Colocar no Carrinho</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Produto