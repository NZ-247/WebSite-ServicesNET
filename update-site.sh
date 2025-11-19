#!/bin/bash
cd /var/www/WebSite-ServicesNET
git pull
npm run build
systemctl restart nginx
echo "Site atualizado com sucesso! </ >_"
