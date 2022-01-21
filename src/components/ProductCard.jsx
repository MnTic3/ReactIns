function ProductCard({ img, name, qLikes, qComments, qViews }) {
    return (
        <li className="cardProduct">
            <div className="containerImg">
                <img src={img} alt="aguila_beer" />
            </div>
            <span className="titleProduct">{name}</span>
            <div className="footerCard">
                <span className="titleProduct">{qLikes}</span>
                <i className="fas fa-heart hearthIcon"></i>
                <span className="titleProduct">{qComments}</span>
                <i className="fas fa-comment-dots"></i>
                <span className="titleProduct">{qViews}</span>
                <i className="fas fa-eye"></i>
            </div>
        </li>
    )
}

export default ProductCard
