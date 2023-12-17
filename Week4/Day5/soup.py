from bs4 import BeautifulSoup
import requests

url = "https://www.gov.il/en/departments/dynamiccollectors/travel-warnings-nsc?skip=0"

response = requests.get(url)
html_content = response.text
soup = BeautifulSoup(html_content, 'html.parser')

print(soup.find_all('Country'))
