Aqui está um **README** no estilo GitHub para o seu projeto:

---

# 🎥 Seat Selector - Sistema de Seleção de Assentos

Este é um projeto em React que simula a reserva de assentos em um cinema. Ele inclui funcionalidades como seleção de assentos, cálculo do preço total, alternância entre temas claro e escuro, e exibição de informações do filme. A interface é responsiva e foi projetada para funcionar bem em dispositivos móveis e desktops.

---

## 🚀 Funcionalidades

- **Alternância de Temas:** 
  - O tema do site se adapta automaticamente ao sistema operacional do usuário (claro ou escuro).
  - O usuário pode personalizar o tema manualmente.

- **Seleção de Assentos:**
  - Botões interativos que representam assentos.
  - Estados dos assentos: **livre**, **selecionado** e **ocupado**.
  - O preço total é calculado com base nos assentos selecionados.

- **Informações do Filme:**
  - Exibe detalhes como título, horário, sinopse, data de lançamento e direção.

- **Responsividade:**
  - Interface adaptada para telas pequenas (mobile-first design).

---

## 🛠️ Tecnologias Utilizadas

- **React**: Framework para construção da interface.
- **CSS Modules**: Estilização local para evitar conflitos.
- **Fetch API**: Para carregar dados de um arquivo JSON local.
- **HTML5 + CSS3**: Para estrutura e estilos responsivos.

---

## 📂 Estrutura do Projeto

```
📦 SeatSelector
├── 📂 public
│   └── data.json  # Dados do filme e dos assentos
├── 📂 src
│   ├── 📂 components
│   │   └── SeatSelector.jsx  # Componente principal
│   ├── 📂 styles
│   │   └── SeatSelector.module.css  # Estilos específicos para o componente
│   └── index.js  # Ponto de entrada da aplicação
└── README.md  # Documentação do projeto
```

---

## 📋 Explicação dos Arquivos

### 1. `SeatSelector.jsx`
Este é o componente principal da aplicação. Ele contém:
- **Lógica de estados:**
  - `selectedSeats`: Rastreia os assentos selecionados pelo usuário.
  - `total`: Calcula o preço total com base nos assentos selecionados.
  - `data`: Armazena os dados do filme e dos assentos, carregados do arquivo `data.json`.
- **Funções principais:**
  - `setTheme(theme)`: Aplica o tema claro ou escuro.
  - `toggleSeat(index)`: Alterna o estado de um assento entre livre e selecionado.
  - `updateTotal(newSelectedSeats)`: Atualiza o total com base nos assentos selecionados.
- **Interface de usuário:**
  - Botões para assentos interativos.
  - Botão de compra que exibe o preço total.
  - Informações detalhadas do filme.

---

### 2. `SeatSelector.module.css`
Este arquivo contém estilos para o componente `SeatSelector`:
- **Layout:**
  - Estilos para o container principal e divisões como `leftContent` e `rightContent`.
- **Estilização de estados dos assentos:**
  - `.empty`: Assento disponível.
  - `.selected`: Assento selecionado.
  - `.occupied`: Assento ocupado.
- **Tema escuro/claro:** 
  - Variáveis CSS são usadas para alternar cores e melhorar a consistência do design.

---

### 3. `data.json`
Este arquivo JSON contém os dados que alimentam o aplicativo:
```json
{
  "titulo": "Filme Exemplo",
  "horario": "20:00",
  "preco": 20,
  "sinopse": "Uma história emocionante de aventura e descoberta.",
  "dataLancamento": "2023-10-15",
  "direcao": "Diretor Exemplo",
  "assentos": [
    { "id": 1, "disponivel": true },
    { "id": 2, "disponivel": false },
    ...
  ]
}
```

---

## ⚙️ Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/SeatSelector.git
   cd SeatSelector
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra o navegador e acesse:
   ```
   http://localhost:3000
   ```

---

## 🌟 Melhorias Futuras
- Permitir que o usuário altere manualmente o tema e salve a configuração no navegador.
- Integração com um backend para salvar reservas de assentos.
- Adicionar animações ao selecionar assentos.

---

## 🖼️ Demonstração

### Desktop
![Demonstração Desktop](#)

### Mobile
![Demonstração Mobile](#)

---

## 📧 Contato

Desenvolvido por **Kauã Alencar**.  
[GitHub](https://github.com/KauaAlencar) | [LinkedIn](https://www.linkedin.com/in/kau%C3%A3-alencar-b15119215/)  

Se tiver dúvidas ou sugestões, entre em contato! 😊

--- 

Se precisar de algo a mais, é só avisar! 🚀
