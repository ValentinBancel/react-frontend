# Utilisez l'image Node.js officielle
FROM node:23.0.0

# Créez et passez dans le dossier de l'application
WORKDIR /src

# Copiez les fichiers du projet dans le conteneur
COPY . .

# Installez les dépendances du projet
RUN npm install

# Compilez l'application pour production
RUN npm run build

# Installez 'serve' pour servir l'application React en mode production
RUN npm install -g serve

# Exposez le port 3000 pour l'application React
EXPOSE 3000

# Démarrez le serveur pour servir l'application React
CMD ["serve", "-s", "build", "-l", "3000"]
