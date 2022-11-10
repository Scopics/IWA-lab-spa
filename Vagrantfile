# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure('2') do |config|
  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = 'ubuntu/xenial64'

  # Configure vm provider
  config.vm.provider 'virtualbox' do |vb|
    vb.gui = false
    vb.memory = '1024'
  end

  # Disable synsed folder
  config.vm.synced_folder '.', '/vagrant', disabled: true

  # Copy only the necessary files 
  config.vm.provision :file, source: './public', destination: '/tmp/app/public'
  config.vm.provision :file, source: './src', destination: '/tmp/app/src'
  config.vm.provision 'file', source: './package.json', destination: '/tmp/app/package.json'
  config.vm.provision 'file', source: './yarn.lock', destination: '/tmp/app/yarn.lock'
  config.vm.provision 'shell', inline: 'mv /tmp/app /home/vagrant/app'

  # Install only the necessary packages
  config.vm.provision 'shell', inline: 'export DEBIAN_FRONTEND=noninteractive'
  config.vm.provision 'shell', path: './vagrant/provision/initial-install.sh'

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. 
  config.vm.network 'forwarded_port', guest: 80, host: 8080, id: 'nginx'

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network 'private_network', ip: '192.168.33.10'

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network 'public_network'

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder '../data', '/vagrant_data'

  # Enable provisioning with a shell script. Additional provisioners such as
  # Ansible, Chef, Docker, Puppet and Salt are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision 'shell', inline: <<-SHELL
  #   apt-get update
  #   apt-get install -y apache2
  # SHELL
end
