
interface ImagemProdutoProps {
    src: string;
    alt: string;
}

function ImagemProduto({ src, alt }: ImagemProdutoProps) {
    return (
        <img className="produtos-img"
            src={src}
            alt={alt}
            onError={(e) => 
                e.currentTarget.src = "/placeholder.png"
            }
        />
    )
}

export default ImagemProduto