# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.provider "docker" do |docker|
      docker.vagrant_vagrantfile = "docker/vagrant.docker.host"
      docker.vagrant_machine = "docker-host"
  end

  config.vm.define "ldap-server" do |ldap|
      ldap.vm.provider "docker" do |docker|
        docker.image = "docker pull h3nrik/nginx-ldap"
      end
  end

end
