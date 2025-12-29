import os
from google import genai
from dotenv import load_dotenv

load_dotenv(override=True)

def get_ai_response(prompt: str) -> str:
    api_key = os.getenv("GEMINI_API_KEY")
    client = genai.Client(api_key=api_key)
    
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )
        return response.text
    except Exception as e:
        # This will print the full technical error in your terminal
        print(f"FULL API ERROR: {e}") 
        return f"AI Error: {str(e)}"