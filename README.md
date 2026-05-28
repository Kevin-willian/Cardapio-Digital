# Cardapio Digital - Painel Administrativo

## Integrantes
- [Kevin Willian]
- [Matheus Henrique]
- [Kaiky Lobo]

## Tema
Cardapio Digital. Sistema de gerenciamento de itens de um restaurante. O painel permite cadastrar, visualizar, editar e excluir pratos do cardapio.

## Descricao
Aplicacao web fullstack com CRUD completo. O front-end em React consome dados reais do back-end Java, que persiste as informacoes no MySQL.

## Tecnologias

| Camada    | Tecnologia                                          |
|-----------|-----------------------------------------------------|
| Front-end | React 18, TypeScript, Vite, Bootstrap 5             |
| HTTP      | Axios, TanStack React Query                         |
| Back-end  | Java 17, Spring Boot 3, Spring Data JPA / Hibernate |
| Banco     | MySQL 8                                             |

## Como criar o banco de dados

Execute o arquivo `script.sql` no MySQL Workbench ou pelo terminal:

```bash
mysql -u root -p < script.sql
```

O Hibernate tambem cria a tabela automaticamente ao subir o back-end.

## Como rodar o back-end

Edite o arquivo `Backend/src/main/resources/application.properties` com seu usuario e senha do MySQL, depois execute:

```bash
cd Backend
./mvnw spring-boot:run
```

A API ficara disponivel em `http://localhost:8080`.

## Como rodar o front-end

```bash
cd Frontend/cardapio-digital-react
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Endpoints da API

| Metodo | Rota        | Descricao             |
|--------|-------------|-----------------------|
| GET    | /foods      | Listar todos os itens |
| GET    | /foods/{id} | Buscar item por ID    |
| POST   | /foods      | Cadastrar novo item   |
| PUT    | /foods/{id} | Atualizar item        |
| DELETE | /foods/{id} | Excluir item          |

## Arquitetura

```
Backend/
├── controller/
│   └── FoodController.java
├── food/
│   ├── Food.java
│   ├── FoodRepository.java
│   ├── FoodRequestDTO.java
│   └── FoodResponseDTO.java
└── resources/
    └── application.properties

Frontend/
└── cardapio-digital-react/
    └── src/
        ├── components/
        │   ├── card/
        │   ├── create-modal/
        │   ├── edit-modal/
        │   ├── dashboard/
        │   └── footer/
        ├── hooks/
        │   ├── useFoodData.ts
        │   ├── useFoodDataMutate.ts
        │   ├── useFoodDataUpdate.ts
        │   └── useFoodDataDelete.ts
        └── interface/
            └── FoodData.ts
```

## CORS

Configurado com `@CrossOrigin(origins = "*", allowedHeaders = "*")` no `FoodController`. Necessario porque o React roda em `localhost:5173` e o Java em `localhost:8080`, origens diferentes bloqueadas pelo navegador por padrao.

## Prints da aplicacao
> (adicionar antes de entregar)

## Video explicativo
> (adicionar link antes de entregar)
