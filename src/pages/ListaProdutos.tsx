import { Link } from "react-router-dom";
import Button from "../components/button/Button";
const produtos = [
    {
        id: 1,
        nome: "Geladeira Frost Free 400L",
        qtd: 12,
        preco: 2899.90,
        descricao: "Geladeira duplex com sistema frost free, painel eletrônico e dispenser de água.",
        imagem: "geladeira.png"
    },
    {
        id: 2,
        nome: "Máquina de Lavar Roupa 12kg",
        qtd: 8,
        preco: 1799.00,
        descricao: "Lavadora de roupas com 12 ciclos de lavagem, cesto em inox e função eco.",
        imagem: "maquina_de_lavar.png"
    },
    {
        id: 3,
        nome: "Fogão 5 Bocas",
        qtd: 15,
        preco: 1299.50,
        descricao: "Fogão de piso com 5 queimadores, acendimento automático e forno autolimpante.",
        imagem: "fogao.png"
    },
    {
        id: 4,
        nome: "Lava-Louças 10 Serviços",
        qtd: 6,
        preco: 2399.00,
        descricao: "Lava-louças compacta com 6 ciclos de lavagem e baixo consumo de água.",
        imagem: "lava_louca.png"
    },
    {
        id: 5,
        nome: "Microondas 30L",
        qtd: 20,
        preco: 599.90,
        descricao: "Microondas com grill, painel touch e 10 níveis de potência.",
        imagem: "microondas.png"
    },
    {
        id: 6,
        nome: "Cafeteira Elétrica",
        qtd: 25,
        preco: 189.90,
        descricao: "Cafeteira com capacidade para 30 xícaras, corta pingos e desligamento automático.",
        imagem: "cafeteira.png"
    }
];

function ListaProdutos() {
    return (
        <>
            <div className="container-app">
                <h1>Produtos em Destaque</h1>
                <div className="produtos-grid">
                    {produtos.map((produto) => (
                        <div className="produto" key={produto.id}>
                            <img className="produto img" src={produto.imagem} alt="" />
                            <h2 className="produto-titulo">{produto.nome}</h2>
                            <h4 className="produto-preco">Por: R$ {produto.preco}</h4>
                            <p className="produto-descricao">{produto.descricao}</p>
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
            </div>
        </>
    )
}

export default ListaProdutos