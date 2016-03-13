[![Stories in Ready](https://badge.waffle.io/HackerHappyHour/impact.png?label=ready&title=Ready)](https://waffle.io/HackerHappyHour/impact)
# impact

Org friendly chat

***

## Development Setup

In order to run this project locally, you will need to have access to a [RethinkDB server][rethink],
and a connection to an ldap server. Check out the [Vagrant-based](#using-vagrant) setup below,
or you can install or remotely connect to your own.

Once you have a RethinkDB server and LDAP server up and running, you can install
and run *impact* locally using:

```bash
npm install
npm start
```

### Using Vagrant

This project uses [vagrant](http://vagrantup.com) to spin up a local test environment to simulate the
components enterprises would bring to their own implementations (such as an ldap)
server.

The RethinkDB and LDAP servers within this vagrant environment are provided
via docker containers. If you're familiar with docker, you can use the Dockerfiles
provided to run RethinkDB and LDAP without Vagrant.

To set up your developer machine, use brew to install deps, then you're ready to
`vagrant up`:

```bash
brew cask install vagrant
brew cask install virtualbox
vagrant up docker-host --provider virtualbox
vagrant up
```
### Access Rethink Management Console


After running the 2-step `vagrant up`, you can now access your RethinkDB web
console by visiting (http://192.168.39.39:8080) in your browser.

Note: At this time, we only support build setup instructions for Mac and the
virtualbox provider for Vagrant. We are accepting pull requests for Windows and
Linux based install instructions, or alternative Vagrant Providers.


[rethink]: http://rethinkdb.com
