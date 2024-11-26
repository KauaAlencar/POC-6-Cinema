
# 🎥 **POC 6 - Sistema de Seleção de Assentos**

Este repositório apresenta um sistema de seleção de assentos para cinema, desenvolvido em React. A aplicação simula uma experiência de reserva interativa com funcionalidades como cálculo do valor total, alternância de temas claro/escuro e exibição de informações detalhadas sobre o filme.

---

### **Status do Projeto**

✅ **Projeto Concluído**

---

### **Pré-requisitos**

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)

Além disso, é recomendado utilizar um editor de texto para trabalhar com o código, como [VSCode](https://code.visualstudio.com/).

---

### **🎲 Rodando o Projeto**

```bash
# Clone este repositório
$ git clone https://github.com/KauaAlencar/POC-6-Cinema

# Acesse a pasta do projeto no terminal/cmd
$ cd SeatSelector

# Instale as dependências
$ npm install

# Execute o servidor de desenvolvimento
$ npm run dev

# O projeto estará disponível em http://localhost:3000
```

---

### **Estrutura do Projeto**

| **Pasta/Arquivo**            | **Descrição**                                                     |
|-------------------------------|-------------------------------------------------------------------|
| `src/components/SeatSelector.jsx` | Componente principal que contém toda a lógica da aplicação.         |
| `src/styles/SeatSelector.module.css` | Estilos específicos para o componente de seleção de assentos.      |
| `public/data.json`           | Arquivo JSON que contém as informações do filme e os assentos.   |
| `src/index.js`               | Ponto de entrada da aplicação React.                             |

---

### **Recursos e Funcionalidades**

- **Alternância de Temas:**
  - Temas claro e escuro configurados automaticamente com base na preferência do sistema.
  - Personalização de cores com variáveis CSS.

- **Seleção de Assentos:**
  - Assentos interativos com três estados: **livre**, **selecionado** e **ocupado**.
  - Cálculo dinâmico do preço total baseado nos assentos escolhidos.

- **Informações do Filme:**
  - Detalhes como título, horário, sinopse, data de lançamento e direção.

- **Responsividade:**
  - Layout ajustado para dispositivos móveis e desktops (design mobile-first).

---

### **Conteúdo e Uso**

1. **Tema Dinâmico**
   - O sistema detecta automaticamente o tema do sistema operacional (escuro ou claro) ao carregar.
   - Cores personalizadas para cada estado dos assentos e elementos da interface.

2. **Seleção de Assentos**
   - Cada botão representa um assento e muda de cor com base no estado:
     - **Livre:** Branco (tema escuro) ou cinza (tema claro).
     - **Selecionado:** Vermelho.
     - **Ocupado:** Cinza escuro.
   - A lógica de seleção impede que assentos ocupados sejam escolhidos.

3. **Detalhes do Filme**
   - Informações carregadas dinamicamente do arquivo `data.json`.

---

### **Detalhamento do Código**

#### 1. Alternância de Temas
O tema é definido dinamicamente com base na preferência do sistema do usuário:
```javascript
const setTheme = (theme) => {
  const root = document.documentElement;
  const lightTheme = { "--bg-color": "#f0f0f0", "--text-color": "#000000", ... };
  const darkTheme = { "--bg-color": "#1e1e2f", "--text-color": "#ffffff", ... };

  const selectedTheme = theme === "dark" ? darkTheme : lightTheme;

  for (const [key, value] of Object.entries(selectedTheme)) {
    root.style.setProperty(key, value);
  }
};
```

#### 2. Seleção de Assentos
Os estados dos assentos são gerenciados usando `useState`:
```javascript
const toggleSeat = (index) => {
  if (!seats[index]?.disponivel) return;

  const newSelectedSeats = selectedSeats.includes(index)
    ? selectedSeats.filter((i) => i !== index)
    : [...selectedSeats, index];

  setSelectedSeats(newSelectedSeats);
  setTotal(newSelectedSeats.length * data.preco);
};
```

#### 3. Carregamento de Dados
Os dados do filme e assentos são carregados dinamicamente de um JSON:
```javascript
useEffect(() => {
  fetch("/data.json")
    .then((response) => response.json())
    .then((jsonData) => {
      setData(jsonData);
      setSeats(jsonData.assentos || []);
    })
    .catch((error) => console.error("Erro ao carregar os dados:", error));
}, []);
```

---

### **Colaboradores**

<table>
  <tr>
    <td align="center"><a href="https://github.com/KauaAlencar"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/172075258?v=4" width="100px;" alt=""/><br /><sub><b>Kauã Alencar</b></sub></a><br /><a href="https://www.linkedin.com/in/kau%C3%A3-alencar-b15119215/" title="LinkedIn">🚀</a></td>
  </tr>
</table>

---

### **📝 Licença**

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

--- 

Se precisar de mais detalhes ou ajustes, é só avisar! 🚀
