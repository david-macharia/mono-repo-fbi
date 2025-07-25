FROM node:20

WORKDIR /app

COPY package.json ./

# Use a writable cache directory to avoid EROFS errors
RUN yarn install --ignore-optional --cache-folder yarn-cache

COPY . .

RUN yarn build

EXPOSE 5173

CMD ["yarn", "build"]
