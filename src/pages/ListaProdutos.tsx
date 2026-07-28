import { Link, useSearchParams,  } from "react-router-dom";
import Button from "../components/button/Button";
import type { Produto } from "../entity/Produto";
import getProdutcs from "../services/apiProdutos";
import { useEffect, useState } from "react";



function ListaProdutos() {
    const [seachParams] = useSearchParams()
    const page  = seachParams.get("page");
    const ITENS_POR_PAGINA = 8;
    const paginaAtual = Number(page) || 1;
    const offset = (paginaAtual - 1) * ITENS_POR_PAGINA;

    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        async function fecthProdutos() {
            const data = await getProdutcs(offset, ITENS_POR_PAGINA);
            setProdutos(data);
        }
        fecthProdutos();
    }, [offset])


    return (
        <>
            <div className="container-app">
                <div className="produtos-grid">
                    {produtos.map((produto) => (
                        <div className="produto" key={produto.id}>
                            <img className="produto-img" src={produto.image} alt="" />
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
                    {paginaAtual > 1 && (<Link
                        to={`/produtos?page=${paginaAtual - 1}`}
                    >
                        <button className="paginacao-botao">Anterior</button>
                    </Link>)}
                    <span className="paginacao-pagina-atual">Pagina Atual: {paginaAtual}</span>
                    {produtos.length === ITENS_POR_PAGINA && (
                        <Link
                            to={`/produtos?page=${paginaAtual + 1}`}
                        >
                            <button className="paginacao-botao">Próximo</button>
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}

export default ListaProdutos