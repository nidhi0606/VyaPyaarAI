import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

export async function generateProductListing(productData: {
  productName: string;
  description: string;
  category: string;
  platform: string;
 

}) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
You are an expert eCommerce content writer. Given the product details below, generate:
1. A catchy **Listing Title**
2. 5 **Key Features** (as bullet points)
3. A compelling **SEO-Optimized Description**

Product Info:
- Name: ${productData.productName}
- Description: ${productData.description}
- Category: ${productData.category}
- Platform: ${productData.platform}

Format your output like this JSON:
{
  "title": "...",
  "bulletPoints": ["...", "...", "...", "...", "..."],
  "seoDescription": "..."
}
`;

  const result = await model.generateContent(prompt);
  const response = await result.response.text();

  try {
    const parsed = JSON.parse(response);
    return parsed;
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    throw new Error("Invalid response from Gemini API");
  }
}
