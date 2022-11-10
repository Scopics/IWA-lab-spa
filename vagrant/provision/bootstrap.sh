# Set working directory
cd /home/vagrant/app

# Update packages
apt-get -y update

# Install & run nginx server 
apt-get -y install nginx
service nginx start

# Install node.js LTS 16 and yarn
curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && apt-get install -y nodejs
npm i -g yarn

# Install dependencies & build
yarn && yarn build

# Copy build folder to nginx configuration directory & update nginx configuration
cp -r ./build/. /usr/share/nginx/html
cp ./nginx/spa.nginx.conf /etc/nginx/nginx.conf

# Reload nginx service
service nginx reload
