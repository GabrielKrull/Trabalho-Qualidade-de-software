# Importa as bibliotecas necessárias
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

import time

# Inicializa o navegador (driver do chrome)
navegador = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

# Abre o site desejado
navegador.get("https://www.google.com")

# Aguarda um pouco para garantir o carregamento da página
time.sleep(5)

# Localiza o campo de busca pelo nome do elemento HTML
campo_busca = navegador.find_element(By.NAME, "q")

# Digita algo no campo e pressiona Enter
campo_busca.send_keys("Qualidade de Software")
campo_busca.send_keys(Keys.RETURN)

# Espera alguns segundos para ver o resultado
time.sleep(30)

# Fecha o navegador 
navegador.quit()