
# Update packages
apt-get -y update

# Install & run nginx server 
apt-get -y install nginx
service nginx start

# Install node.js LTS 16
curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && apt-get install -y nodejs
