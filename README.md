# InfoVault 🔑

[📥 **Baixar Versão Recente (ZIP)**](https://github.com/JanGustavo/Dicionario-Links/releases/latest/download/infovault-extension.zip)

**InfoVault** é uma extensão de navegador leve, elegante e extremamente prática, desenvolvida para funcionar como seu cofre e dicionário pessoal de informações. Guarde links rápidos, CPFs, e-mails, chaves Pix, logins ou qualquer informação recorrente e acesse-os com um clique.

---

## ✨ Funcionalidades Principais

* ⚡ **Cópia Instantânea**: Clique uma vez em qualquer item para copiar seu valor imediatamente para a área de transferência.
* 🔗 **Acesso Rápido**: Dê dois cliques em um card com URL para abri-la diretamente em uma nova aba do navegador.
* 📌 **Fixar no Topo (Pinning)**: Fixe as entradas mais acessadas e importantes para que fiquem sempre no topo da sua lista.
* 🏷️ **Categorias & Tags**: Classifique suas informações (ex: *Trabalho*, *Pessoal*, *Finanças*) e filtre seus cards dinamicamente por tags.
* 🌐 **Favicon Automático**: Insira uma URL e a extensão buscará automaticamente o favicon correspondente para usar como ícone do card.
* 💾 **Backup de Segurança**: Exporte facilmente seus dados para um arquivo JSON ou importe-os de volta no menu de configurações para nunca perder nada.
* 🎨 **Visual Moderno e Fluido**: Interface em dark mode com gradientes de acento personalizados, transições fluidas e efeito cascata (*staggered*) ao carregar os itens.

---

## 🛠️ Tecnologias Utilizadas

A extensão foi construída focando em máxima performance e leveza, sem dependências ou frameworks pesados:
* **HTML5** & **CSS3** (Variáveis CSS, CSS Grid/Flexbox, e `color-mix` nativo).
* **JavaScript Puro (Vanilla ES6+)**.
* **Manifest V3** da Chrome Extensions API.
* Fallback automático para `localStorage` permitindo a abertura direta de `popup.html` no navegador comum para testes e desenvolvimento rápido.

---

## 📦 Como Instalar e Usar (Modo Desenvolvedor)

Siga o passo a passo abaixo para rodar a extensão localmente no seu navegador baseado em Chromium (Chrome, Edge, Brave, Opera, Vivaldi):

1. **Baixe o projeto**: Clique em *Code -> Download ZIP* ou clone este repositório usando o terminal:
   ```bash
   git clone https://github.com/seu-usuario/links.git
   ```
2. **Abra a tela de extensões**: No seu navegador, acesse o endereço correspondente:
   * Google Chrome: `chrome://extensions/`
   * Microsoft Edge: `edge://extensions/`
   * Brave: `brave://extensions/`
3. **Ative o Modo Desenvolvedor**: Procure pela chave **Modo do desenvolvedor** (*Developer mode*) no canto superior direito e ative-a.
4. **Carregue a extensão**: Clique no botão **Carregar sem compactação** (*Load unpacked*) que aparecerá no canto superior esquerdo.
5. **Selecione a pasta**: Escolha a pasta raiz onde clonou ou descompactou este projeto (a pasta que contém o arquivo `manifest.json`).
6. **Pronto!** Fixe o ícone do **InfoVault** na sua barra de extensões e comece a salvar seus links e dados favoritos!

---

## 🔒 Privacidade e Segurança

Todos os seus dados são salvos localmente no seu próprio computador através da API `chrome.storage.local` (ou `localStorage` se aberto fora de extensão). O **InfoVault** é 100% offline e não envia nenhuma de suas informações pessoais a servidores externos.

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE). Sinta-se livre para usar, estudar e modificar o código.
