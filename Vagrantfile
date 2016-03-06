# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.provider "docker" do |dock|
      dock.vagrant_vagrantfile = "./docker/Vagrantfile"
      dock.vagrant_machine = "docker-host"
  end

  config.vm.define "ldap-server" do |ldap|
      ldap.vm.provider "docker" do |docker|
        docker.image = "nickstenning/slapd"
      end
  end

  config.vm.define "rethink" do |rethink|
    rethink.vm.provider "docker" do |docker|
      docker.image = "rethinkdb:2.2"
    end
  end

end
