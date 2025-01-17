# API de Productos

Este proyecto es una API RESTful para gestionar productos en un catálogo. Puedes crear, obtener, actualizar y eliminar productos.

## Requisitos previos

- **Node.js** (v14 o superior)
- **NPM** o **Yarn**
- **Postgres**
- **DBeaver** o **pgAdmin 4** (cualquier visualizador de DB´s (opcional))

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/cewhizzar/backend-multiproduct
   cd backend-multiproduct
   ```
   

2. Instala las dependecias:
    ```
    npm install
    ```

3. Configura tu base de datos en un archivo .env:

   ```
    APP_PORT=3000
    DB_USER=postgres
    DB_HOST=localhost
    DB_DATABASE=multiproductDB
    DB_PASSWORD=tu_contraseña
    DB_PORT=5432
    DB_DIALECT=postgres

   ```

## Uso

1. Para iniciar el servidor:
   ```
   npm run dev
   ```

El servidor se ejecutará en http://localhost:3000.

2. La API estará disponible en los siguientes endpoints:
   ```
    POST /api/products: Crear un nuevo producto.
    GET /api/products: Obtener todos los productos.
    GET /api/products/:id: Obtener un producto por su ID.
    PUT /api/products/:id: Actualizar un producto por su ID.
    DELETE /api/products/:id: Eliminar un producto por su ID.
   ```

## Tests

1. Para ejecutar los tests:
   ```
   npm run test
   ```

## Estructura del proyecto
   ```

    /backend-multiproduct
    ├── /node_modules        # Dependencias
    ├── /tests               # Tests
    ├── /models              # Modelos de base de datos
    ├── /controllers         # Lógica de la API
    ├── .env                 # Variables de entorno
    ├── .gitignore           # Archivos qe deben ser ignorados por Git
    ├── docker-compose.yaml  # Definir y gestionar aplicaciones multi-contenedor de Docker
    ├── Dockerfile           # Instrucciones para crear una imagen de Docker
    ├── index.js             # Configuración del servidor
    ├── package-lock.json    # Registro exacto de las dependencias
    ├── package.json         # Dependencias y scripts
    └── README.md            # Este archivo
   ```
