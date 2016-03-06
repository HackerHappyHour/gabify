# impact

Org friendly chat

## Development Setup

This project uses [vagrant](vagrantup.com) to spin up a local test environment to simulate the
components enterprises would bring to their own implementations (such as an ldap)
server.

To set up your developer machine, use brew to install deps, then you're ready to
`vagrant up`:

```bash
brew cask install vagrant
brew cask install virtualbox
vagrant up --no-parallel
```

Note: At this time, we only support build setup instructions for Mac and the
virtualbox provider for Vagrant. We are accepting pull requests for Windows and
Linux based install instructions, or alternative Vagrant Providers.
