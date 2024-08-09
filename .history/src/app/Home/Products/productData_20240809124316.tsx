// Define interfaces for TypeScript to enforce type safety.
interface Feature {
  category: string;
  title: string;
  src: string;
  content: string | null; // Explicitly indicate that content can be a string or null.
  sizes: string; // Add a sizes property for the images.
}

interface Product {
  productName: string;
  features: Feature[];
}

// Define the product data using the interfaces above.
const productData: Product = {
  productName: "cliniQX",
  features: [
    {
      category: "AI Healthcare",
      title: "Advanced AI for Medical Diagnostics",
      src: "/apple-1.jpg", // Ensure these paths are correct and the assets are properly hosted.
      content: "Integrating advanced AI to enhance diagnostic accuracy and efficiency.",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    },
    {
      category: "EHR Integration",
      title: "Seamless EHR Integration",
      src: "/apple-2.jpg",
      content: "Streamlining data across platforms to improve healthcare outcomes.",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    },
    {
      category: "User Experience",
      title: "User-Friendly Design",
      src: "/apple-3.jpg",
      content: "Designed with the end-user in mind, ensuring ease of use and accessibility.",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    },
  ]
};

export default productData;
