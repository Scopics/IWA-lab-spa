# -*- mode: ruby -*-
# vi: set ft=ruby :

# All necessary app files for deploy
appFiles = {
  './public' => '/tmp/app/public',
  './src' => '/tmp/app/src',
  './nginx' => '/tmp/app/nginx',
  './package.json' => '/tmp/app/package.json',
  './yarn.lock' => '/tmp/app/yarn.lock'
}

Vagrant.configure('2') do |config|
  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = 'ubuntu/xenial64'
  config.vm.hostname = 'mamont'

  # Configure vm provider
  config.vm.provider 'virtualbox' do |vb|
    vb.gui = false
    vb.memory = '1024'
  end

  # Disable synsed folder
  config.vm.synced_folder '.', '/vagrant', disabled: true
  
  # Copy only the necessary files 
  appFiles.each do |source, destination|
    config.vm.provision 'file', source: source, destination: destination
  end

  config.vm.provision 'shell', inline: 'mv /tmp/app /home/vagrant/app'

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. 
  config.vm.network 'forwarded_port', guest: 80, host: 8080, id: 'nginx'

  # Install only the necessary packages, build and run project
  config.vm.provision 'shell', inline: 'export DEBIAN_FRONTEND=noninteractive'
  config.vm.provision 'shell', path: './vagrant/provision/bootstrap.sh'
end
