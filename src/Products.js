function Products(props) {
    const { data } = props;
    return (
        <div>
            <h5>list of items</h5>
            <ol>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </div>
    )
}
export default Products;