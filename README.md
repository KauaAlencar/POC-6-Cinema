
# 🎥 Sistema de Seleção de Assentos

Este é um projeto em React que simula a reserva de assentos em um cinema. Ele inclui funcionalidades como seleção de assentos, cálculo do preço total, alternância entre temas claro e escuro, e exibição de informações do filme. A interface é responsiva e foi projetada para funcionar bem em dispositivos móveis e desktops.

---
### **Status do Projeto**

✅ **Projeto Concluído**
-----

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
   git clone https://github.com/usuario/POC-6-Cinema
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


## 🖼️ Demonstração

### Desktop

![image](https://github.com/user-attachments/assets/6cccaebb-f347-4f0c-a340-7611a5d4944b)
![image](https://github.com/user-attachments/assets/e0aa159b-287d-419a-9282-943613b1b249)



### Mobile

![image](https://github.com/user-attachments/assets/dfe11b32-9a81-4de8-ae08-768afd51f5b3)
![image](https://github.com/user-attachments/assets/7000182a-8c4e-472a-a2db-b8d03cf29dea)


---

### **Colaboradores**
<table>
  <tr>
    <td align="center"><a href="https://github.com/KauaAlencar"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/172075258?v=4" width="100px;" alt=""/><br /><sub><b>Kauã Alencar</b></sub></a><br /><a href="https://www.linkedin.com/in/kau%C3%A3-alencar-b15119215/" title="Linkedin">🚀</a></td>
    <td align="center"><a href="https://github.com/GuilhermeShinohara"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/180458966?v=4" width="100px;" alt=""/><br /><sub><b>Guilherme Shinohara</b></sub></a><br /><a href="https://github.com/GuilhermeShinohara" title="GitHub">🚀</a></td>
    <td align="center"><a href="https://github.com/LeoFavaron"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/179886009?v=4" width="100px;" alt=""/><br /><sub><b>Leonardo Favaron</b></sub></a><br /><a href="https://github.com/LeoFavaron" title="GitHub">🚀</a></td>
      <td align="center"><a href="https://github.com/lucas-ricci-pathbit"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/174811028?v=4" width="100px;" alt=""/><br /><sub><b>Lucas Ricci</b></sub></a><br /><a href="https://github.com/lucas-ricci-pathbit" title="Linkedin">🚀</a></td>
  </tr>
</table>

---

### **📝 Licença**

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

