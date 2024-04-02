function Order(props) {
  const { items } = props;
  return (
    <div>
      <h2>Order</h2>
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
  }
export default Order;