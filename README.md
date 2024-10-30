# Pokedex

Este projeto é uma aplicação Pokedex construída com **Angular CLI** na versão **17.3.10**, que permite visualizar informações sobre pokémons da primeira geração, buscando dados diretamente da [PokeAPI](https://pokeapi.co/api/v2/pokemon/). O projeto é desenvolvido em **Angular 17** e utiliza uma abordagem modular para facilitar a organização, manutenção e escalabilidade do código.

## Sobre o Angular 17

Angular 17 é uma das versões mais recentes do framework, trazendo melhorias de desempenho e funcionalidades adicionais para desenvolver aplicações modernas e reativas. Uma característica notável nesta versão é a **standalone API**, que permite construir aplicações sem a necessidade de módulos, simplificando a estrutura do projeto. Contudo, este projeto utiliza uma abordagem modular, o que é útil em sistemas maiores que exigem uma arquitetura bem estruturada e a reutilização de componentes em diferentes partes da aplicação.

### Principais Funcionalidades do Projeto

- **Listagem de pokémons**: Exibe uma lista de pokémons, trazendo informações relevantes para cada um.
- **Busca por nome do pokémon**: Permite a busca rápida e fácil de pokémons específicos pelo nome.
- **Alternância entre Light & Dark Mode**: O usuário pode alternar entre modos de visualização claro e escuro.
- **Navegação entre rotas**: Suporte para navegação entre páginas de Início e Detalhes do Pokémon.
- **Layout responsivo**: A interface é adaptável a diferentes tamanhos de tela, garantindo uma experiência fluida tanto em dispositivos móveis quanto em desktops.

### Tecnologias e Padrões

- **Abordagem modular**: Utilização de módulos para organização, visando a manutenibilidade e reusabilidade de componentes.
- **Organização e reutilização de código**: Foco em práticas de codificação que garantem fácil entendimento e expansão do projeto.

### Recomendações

Para novos desenvolvedores, sempre que surgirem dúvidas ou desafios, recomenda-se consultar a documentação oficial do Angular e utilizar fontes confiáveis de pesquisa. **Não existem atalhos para o sucesso**, e com dedicação e aprendizado constante, você alcançará o progresso esperado.

## Instruções de Uso

### Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

```bash
ng serve
```

Depois, acesse [http://localhost:4200/](http://localhost:4200/). A aplicação recarregará automaticamente caso você faça alterações nos arquivos de origem.

### Scaffold de Código

Para gerar um novo componente, utilize:

```bash
ng generate component component-name
```

Também é possível criar outros tipos de artefatos com `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Para compilar o projeto, execute:

```bash
ng build
```

Os artefatos serão armazenados na pasta `dist/`.

### Testes Unitários

Para rodar os testes unitários com o Karma:

```bash
ng test
```

### Testes End-to-End

Para executar testes end-to-end, utilize:

```bash
ng e2e
```

Obs.: É necessário instalar um pacote que implemente capacidades de teste end-to-end.

### Documentação Angular CLI

Para mais informações sobre o Angular CLI, utilize:

```bash
ng help
```

Ou consulte a [página de referência da Angular CLI](https://angular.io/cli).

---

### API

Este projeto consome a **PokeAPI** para fornecer dados dos pokémons. Endereço da API: [https://pokeapi.co/api/v2/pokemon/](https://pokeapi.co/api/v2/pokemon/)

```

```
