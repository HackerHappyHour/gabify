# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.define "docker-host", primary:true, autostart: false do |docker|

    docker.vm.box = "LongLiveCHIEF/minimal-centos-7"
    docker.vm.network "private_network", ip: "192.168.39.39"
    docker.vm.network "forwarded_port", host: 8080, guest: 8080

    docker.vm.provider "virtualbox" do |vb|
      vb.linked_clone = true
    end

    docker.vm.provision "file",
      source: "vagrant/docker.repo",
      destination: "/tmp/docker.repo"

    docker.vm.provision "shell",
      path: "vagrant/docker.sh",
      privileged: true

  end

  config.vm.provider "docker" do |dock|
      dock.vagrant_vagrantfile = "./Vagrantfile"
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
      docker.ports = ["8080:8080", "28015:28015", "29015:29015"]
    end
  end

end
