import ProductCard from "../components/ProductCard/ProductCard";

const Content: React.FC = () => {
  return (
    <main style={{ flex: 1, padding: "1rem", background: "#f9f9f9" }}>
      <h1>Welcome to Your Store!</h1>
      <p>Here’s where your products and store content will go.</p>

      <ProductCard
        productId="4"
        productName="Bluetooth Speaker"
        price={49.99}
        description="Some description"
        imageUrl="/images/speaker.jpg"
      />

    </main>
  );
};

export default Content;
