git stash
git pull origin main
sleep 3
export PATH=/home/joshishaumik/.nvm/versions/node/v16.20.0/bin/node:$PATH
npm i --legacy-peer-deps
npm run build
pm2 start smartcare-web.json
sleep 5
pm2 reload smartcare-web
pm2 save