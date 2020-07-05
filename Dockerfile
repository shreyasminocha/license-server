from node:12
label maintainer "Shreyas Minocha"

run groupadd -r nodejs && useradd -m -r -g nodejs nodejs
user nodejs

run mkdir -p /home/nodejs/license
workdir /home/nodejs/license

copy package*.json ./
run npm ci --only=production

copy . .

expose 3000

cmd ["node", "--experimental-modules", "--no-warnings", "index.js"]
