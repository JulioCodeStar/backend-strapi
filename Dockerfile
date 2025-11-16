# Etapa 1: build
FROM node:20-alpine AS build

WORKDIR /app

# Copiamos solo lo necesario para instalar deps
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Build de Strapi (genera ./build)
RUN npm run build

# Etapa 2: runtime
FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

# Copiar package para instalar solo deps de producción
COPY package.json package-lock.json* ./
RUN npm install --omit=dev

# Copiar código y build
COPY . .
COPY --from=build /app/build ./build

EXPOSE 1337

CMD ["npm", "run", "start"]