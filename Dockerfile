# Étape 1 : Construction de l'application React
FROM node:23.0.0 AS builder

# Définir le répertoire de travail
WORKDIR /src

# Copier uniquement les fichiers nécessaires pour l'installation des dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Construire l'application
RUN npm run build

# Étape 2 : Conteneur de production
FROM node:23.0.0 AS runner

# Installer un serveur statique (serve)
RUN npm install -g serve

# Définir le répertoire de travail
WORKDIR /src/component

# Copier uniquement les fichiers construits
COPY --from=builder /src/build ./build

# Exposer le port 3000
EXPOSE 3000

# Lancer le serveur statique
CMD ["serve", "-s", "build", "-l", "3000"]
