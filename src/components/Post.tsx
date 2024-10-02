function Post() {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  return (
    <div className="text-center mt-10">
      <ul className="text-4xl font-bold text-blue-500">
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Post;

// somthing changed