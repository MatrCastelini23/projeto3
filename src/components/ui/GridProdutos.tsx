import useFetchProdutos from "../../services/apiProdutos"
import { ClipLoader } from "react-spinners"
import ImagemProduto from "../ImagemProduto"
import { Link } from "react-router-dom"

function GridProdutos() {

    const { produtos, loading, error } = useFetchProdutos(0, 5)

    if (loading) return (
        <div className="spinner-container flex items-center justify-center h-200">
            <ClipLoader className="" />
        </div>
    )

    if (error) return (
        <div>
            <h1>Aconteceu alguma coisa!</h1>
            <h2>Recarregue a pagina ou tente novamente mais tarde</h2>
        </div>
    )
    if (!produtos) return (
        <div>
            <h2>Sem destaques</h2>
        </div>
    )
    return (
        <>
            <div className="items-center justify-center ">
                <span className="text-2xl font-medium justify-center">Produtos em destaque</span>
                <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
                    {produtos.map((p) => (
                        <div className="produto">
                            <ImagemProduto
                                src={p.images}
                                alt={p.slug}
                            />
                            <h1>{p.title}</h1>
                            <h3>{p.category.name}</h3>
                            <Link
                                to={`/produto/${p.id}`}
                            >
                                <button className="produto-botao">Ver Detalhes</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default GridProdutos