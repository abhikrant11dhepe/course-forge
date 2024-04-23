FROM node:latest
WORKDIR /app
COPY package*.json ./ 
RUN npm install --frozen-lockfile 
COPY . . 
EXPOSE 3000  
CMD ["npm", "run", "dev"] 
