# Usar una imagen base oficial de Node.js
FROM node:14

# Crear el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY src ./src

# Exponer el puerto de la aplicación
EXPOSE 3000

# Mantener el contenedor ejecutándose
CMD ["tail", "-f", "/dev/null"]