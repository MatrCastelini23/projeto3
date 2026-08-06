import useFetchProdutos from "../../api/apiProdutos"
import ImagemProduto from "../ImagemProduto"
import { Link } from "react-router-dom"
import Loading from "../screenEffect/Loading"
import ErrorMessage from "../screenMessages/ErrorMessage"

function GridProdutos() {

    const { produtos, loading, error } = useFetchProdutos(0, 5)

    if (loading) return (
        <Loading />
    )

    if (error) return (
        <ErrorMessage />
    )
    if (!produtos) return (
        <div>
            <h2>Sem destaques</h2>
        </div>
    )
    return (
        <>
            <div className="items-center justify-center">
                <span className="text-2xl font-medium justify-center p-10">Produtos em destaque</span>
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