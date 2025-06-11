import '../Card.css'

function Card({ shop }) {
  return (
    <div className="card">
      <div className="card-title">{shop.name}</div>
      <div className="card-address">{shop.address}</div>
      {shop.phone && <div className="card-phone">{shop.phone}</div>}
      <div>Rating: {shop.rating}</div>
      <a className="card-link" href={shop.website} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </div>
  )
}

export default Card;