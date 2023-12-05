from googletrans import Translator

def translate():
    french_words = ['Bonjour', 'Au revoir', 'Bienvenue', 'À bientôt']
    translator = Translator()
    translated_en = {}

    for word in french_words:
        try:
            translation = translator.translate(word)
            translated_en.update({word: translation.text})
        except:
            translated_en.update({word: 'translation not found'})

    print(translated_en)

translate()