const Lankingcard = ({ item }) => {
  return (
    <div className="lankingcard">
      <img src={item.img} alt={item.name} />
      <div className="lankingcard__info">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
}

