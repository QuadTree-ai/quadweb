// src/app/Home/Products/productData.ts

// Define interfaces for TypeScript to enforce type safety if using TypeScript.
// These interfaces help ensure that each piece of product data adheres to a specific structure.

interface Feature {
  category: string;
  title: string;
  src: string;
  content: string | null; // Make explicit that content can be a string or null.
}

interface Product {
  productName: string;
  features: Feature[];
}

// Define the product data using the interfaces above. This is optional if you are not using TypeScript.

const productData: Product = {
  productName: "cliniQX",
  features: [
    {
      category: "AI Healthcare",
      title: "Advanced AI for Medical Diagnostics",
      src: "/apple-1.jpg", // Ensure these paths are correct and the assets are properly hosted.
      content: "Integrating advanced AI to enhance diagnostic accuracy and efficiency." // Example content, replace 'null' with actual content if available.
    },
    {
      category: "EHR Integration",
      title: "Seamless EHR Integration",
      src: "/apple-2.jpg",
      content: "Streamlining data across platforms to improve healthcare outcomes."
    },
    {
      category: "User Experience",
      title: "User-Friendly Design",
      src: "/apple-3.jpg",
      content: "Designed with the end-user in mind, ensuring ease of use and accessibility."
    },
  ]
};

export default productData;
