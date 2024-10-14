import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import spacy
import re

nlp = spacy.load("en_core_web_sm")






@csrf_exempt
def divide_text(request):
    if request.method == 'POST':
        try:
            body = json.loads(request.body)
            text = body.get('text')

            if not text:
                return JsonResponse({'error': 'No text provided'}, status=400)

      
           
            dialogue_pattern = r"([A-Za-z]+:\s.*?)(?=\s*[A-Za-z]+:|$)"
            
           
            if re.search(dialogue_pattern, text):
               
                dialogues = re.findall(dialogue_pattern, text, re.DOTALL)
       
                divided_text = "# ".join([dialogue.strip() for dialogue in dialogues])
            else:
                
                doc = nlp(text)
                sentences = [sent.text.strip() for sent in doc.sents]
                divided_text = "# ".join(sentences)

            return JsonResponse({'dividedText': divided_text}, status=200)

        except Exception as e:
            print(f"Error: {e}")
            return JsonResponse({'error': str(e)}, status=500)
    
    return JsonResponse({'error': 'Invalid request'}, status=400)
