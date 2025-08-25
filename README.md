VYAPYAAR AI 
Build with Gemini LLM API for smart business advise
Suggest product advise based on budget location and interest
Recommed betseller platform
Packaging and marketing

The entire system is built using the MERN stack ( MongoDB, Express.js, React, and Node.js) for a seamless and scalable experience, and styled with modern tools like Tailwind CSS and Radix UI.


Deployed link : https://vya-pyaar-ai.vercel.app/

PPT link : https://www.canva.com/design/DAGtI-hPJwg/0p53X7EIgrP5i6RQk5TL0A/edit

Prototype demo video link : https://www.youtube.com/watch?v=GljMqLtc8sw&feature=youtu.be

--------------------------------------------------------------------------------------------------------------

Lession learned: 
Initial Delay : short delay when logging in for the first time after inactivity.

Note on Scraping Feature in Deployment
The product price scraping feature showcased in our demo video is fully functional when running the project locally. It uses Playwright-based scraping combined with live competitor analysis from platforms like Meesho.

However, in the deployed version, this scraping functionality is disabled due to the following reasons:

Server-Side Restrictions: Web scraping requires headless browser execution (via Playwright), which demands specific dependencies and system-level permissions not supported on free-tier deployment platforms like Render or Vercel.

Cold Start & Execution Time: Free-tier services often kill inactive containers and have strict timeouts, making scraping unstable or non-functional.

Browserless Environment: These platforms do not allow headless browsers like Chromium to run smoothly without custom server setup and persistent environments.

✅ To experience full scraping functionality, please run the project locally by cloning the repo and following the setup instructions below.

--------------------------------------------------------------------------------------------------------------
### 🧠 How It Works

Our smart selling assistant is powered by a combination of AI and real-time web scraping. When you enter your product details, our system uses the Google Gemini LLM API to understand the product and generate AI-powered descriptions and suggestions.

Simultaneously, we perform live price scraping from Meesho using Playwright to analyze real competitor pricing data for similar products. Using this data, we run smart pricing algorithms that suggest the most profitable and competitive price range for your selected selling platform.

--------------------------------------------------------------------------------------------------------------

### Project Overview:

Empowering Bharat’s Entrepreneurs with AI-Powered E-Commerce Guidance

VyapYaarAI is an intelligent assistant designed to help first-time entrepreneurs and small-town sellers start, scale, and sustain their e-commerce journey with confidence. It simplifies the process of going online by offering AI-powered mentorship, platform recommendations, automated product listing, and sustainability insights — all tailored to the seller’s region, demand trends, and business stage.

VyapYaarAI uses advanced natural language models (like Gemini) and contextual market data to provide personalized business suggestions, sustainable product ideas, and strategic pricing tools. It also enables smart content generation for promotions and listing optimization, reducing the technical and creative barriers for new-age digital sellers.

Built with accessibility in mind, VyapYaarAI leverages tools like VITE for ease of use and integrates modular AI components for scalable development. The system is structured to support multi-tiered user journeys: those who are just exploring entrepreneurship and those ready to launch online.

Inspired by Meesho’s vision of democratizing e-commerce, VyapYaarAI aims to bridge the digital divide by making business mentorship available to every aspiring seller — especially in Tier-2, Tier-3, and rural India.

--------------------------------------------------------------------------------------------------------------
## 🛠️ Tech Stack

Frontend
- **React** – UI development  
- **Vite** – Fast dev server and bundler  
- **TypeScript** – Strong typing for safer code  
- **Tailwind CSS** – Modern utility-first styling  
- **Radix UI** – Accessible UI components  
- **Lucide Icons** – Beautiful icon set  

AI Integration
- **Google Gemini API (@google/generative-ai)** – Used to generate AI-powered product listings  

 Backend & Scraping
- **Node.js** – Backend runtime environment  
- **Express.js** – API server for frontend-backend communication  
- **Playwright** – Headless browser automation for scraping live product prices from Meesho
- **Mongoose**

--------------------------------------------------------------------------------------------------------------
### ✨ Key Features

🤖 AI Chatbot Guide
Our interactive AI bot helps beginners navigate the complexities of online selling by answering questions, guiding through the process, and suggesting next steps — just like a real business coach.

🛍️ AI-Generated Product Listings
Users can generate compelling and optimized product descriptions using Google Gemini, tailored for online marketplaces.

📦 Platform Recommendation
Based on the product type and user’s preferences, the system suggests the most suitable e-commerce platforms (like Meesho, Flipkart, Amazon) to sell on.

📣 AI-Generated Ad & Promo Content
With a single click, generate catchy promotional headlines, ad copy, and short blurbs to use on social media or product listings.

💰 Competitor Price Scraper
We scrape real-time prices from Meesho to give users a clear picture of the current market — including lowest, highest, and average prices — so they can price their product competitively.

--------------------------------------------------------------------------------------------------------------

## 📦 Prerequisites

Make sure the following are installed on your system:

- Node.js (v18 or above) — [Download here](https://nodejs.org/)  
- npm (comes with Node.js)  
- Internet connection (needed for scraping Meesho data)  
- A code editor like VS Code (optional but recommended)  
- GUI support (Playwright runs a visible browser window)  

--------------------------------------------------------------------------------------------------------------

### ⚙️ Installation & Run Steps

1. Clone the repository - git clone https://github.com/SakshiSingh244/VyaPyaarAI.git

2. Create the .env file - VITE_GOOGLE_API_KEY=your_google_gemini_api_key

3. Install backend dependencies and run the backend
cd backend
npm install
npx playwright install
node server.js

4. Install frontend dependencies and run the frontend - (Open a second terminal (from the root project folder) and run):
npm install
npm run dev

5. You're all set!
Open your browser and visit http://localhost:8080/ to use the app.



