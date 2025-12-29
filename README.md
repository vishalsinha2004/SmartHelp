🚀 SmartHelp – AI Powered Chat Application

SmartHelp is a full-stack AI-powered chat application built to provide intelligent, real-time responses using Google Gemini. The project demonstrates modern full-stack development using React, Django, and Generative AI, with a clean UI and scalable backend architecture.


📌 Project Overview

SmartHelp allows users to interact with an AI assistant through a clean web interface.
It supports real-time messaging, conversation history, and exporting chat data — making it ideal for customer support, learning assistants, or AI-based help systems.


✨ Key Features

    🤖 AI-powered chat using Google Gemini

    ⚡ Fast & responsive UI (React + Tailwind CSS)

    💬 Real-time conversation handling

    📄 Export chat conversation as PDF

    🔐 Secure backend with environment-based secrets

    📦 Modular & scalable project structure

🛠️ Tech Stack
    Frontend

        1.React (Vite)
        2.Tailwind CSS
        3.JavaScript (ES6+)

    Backend

        1.Python
        2.Django & Django REST Framework
        3.Google Generative AI (Gemini)
        
    Create .env file:
    
        GEMINI_API_KEY=your_api_key_here
        (Environment Variables (.env): Sensitive credentials such as API keys are securely stored using environment variables to ensure data security and prevent exposure in the source code.)
    
    Tools & Libraries

        1.html2canvas
        2.jsPDF
        3.dotenv
        4.REST APIs    

📂 Project Structure

SmartHelp/
│
├── backend/
│   ├── chat/
│   ├── backend/
│   ├── manage.py
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── App.jsx
│   └── main.jsx
│
└── README.md

🚀 How to Run the Project

    1️⃣ Clone the Repository
        1.git clone https://github.com/your-username/smarthelp.git
        2.cd smarthelp

    2️⃣ Backend Setup
        1.cd backend
        2.python -m venv venv
        3.venv\Scripts\activate   # Windows
        4.pip install -r requirements.txt
        5.python manage.py migrate
        6.python manage.py runserver

    3️⃣ Frontend Setup
        1.cd frontend
        2.npm install
        3.npm run dev

🧠 How It Works
    1.User sends a message via UI
    2.Frontend sends request to Django API
    3.Django sends prompt to Gemini AI
    4.AI response returned and displayed
    5.Chat history can be exported as PD

📸 Screenshots
    (image.png)

👨‍💻 Author
    Vishal Sinha
    Github:https://github.com/vishalsinha2004
    LinkedIn: https://www.linkedin.com/in/vishal-sinha2004
