#!/usr/bin/env bash

mv /tmp/docker.repo /etc/yum.repos.d/docker.repo
groupadd docker
usermod -aG docker vagrant
yum update -y
yum install -y docker-engine
systemctl enable docker
systemctl start docker
