Feature: Teste de Iframes

Scenario: Verificar Conteúdo do Iframe
  Given estou na página do iframe
  When eu acessar o iframe
  Then o conteúdo do iframe deve conter "Your content goes here."

Scenario: Interagir com o Iframe
  Given estou na página do iframe
  When eu clicar dentro do iframe
  Then o texto do iframe deve ser editável