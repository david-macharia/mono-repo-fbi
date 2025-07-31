FROM node:20-bullseye

WORKDIR /app

COPY package.json ./

# Use a writable cache directory to avoid EROFS errors
RUN yarn install  --cache-folder yarn-cache

COPY . .

RUN yarn build

EXPOSE 5173

CMD ["yarn", "build"]
CMD ["yarn", "preview", "--port", "5173", "--host", "0.0.0.0"]

