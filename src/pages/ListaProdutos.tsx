import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import ImagemProduto from "../components/ImagemProduto";
import useFetchProdutos from "../services/apiProdutos";
import { ClipLoader } from "react-spinners";
import { useState } from "react";

const QTD_POR_PAGINA = 8;



function ListaProdutos() {
    const [paginaAtual, setPaginaAtual] = useState(0);
    const { produtos, loading, error } = useFetchProdutos(paginaAtual, QTD_POR_PAGINA);

    const goBack = () => (
        setPaginaAtual((prev) => (prev - 1))
    )

    const goForward = () => (
        setPaginaAtual((prev) => (prev + 1))
    )

    if (loading) return (<div className="spinner-container flex items-center justify-center h-100">
        <ClipLoader color="blue" loading={loading} size={50} aria-label="Loading Spinner" />
    </div>)

    if (error) return (<div>Ocorreu um erro ao carregar </div>)
    if (!produtos) return null;

    return (
        <>
            <div className="container-app">
                <div className="produtos-grid">
                    {produtos.map((produto) => (
                        <div className="produto" key={produto.id}>
                            <ImagemProduto
                                src={produto.images}
                                alt={produto.title}
                            />
                            <h2 className="produto-titulo">{produto.title}</h2>
                            <h4 className="produto-preco">Por: R$ {produto.price}</h4>
                            <p className="produto-descricao">{produto.category.name}</p>
                            <Link
                                to={`/produto/${produto.id}`}
                            >
                                <Button classe="produto-botao">
                                    Ver Detalhes
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="paginacao">
                    {paginaAtual >= 1 ?
                        <button
                            className="paginacao-botao"
                            onClick={goBack}
                        >
                            Anterior
                        </button>
                        : null}
                    <h1 className="paginacao-pagina-atual">Pagina atual: {paginaAtual + 1}</h1>
                    <button
                        className="paginacao-botao"
                        onClick={goForward}
                    >
                        Proximo
                    </button>
                </div>
            </div>
        </>
    )
}

export default ListaProdutos