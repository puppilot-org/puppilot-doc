# Routine Developer Guide

## Environment requirement

- NodeJS 20
- Chrome browser

## Develop a Routine

### Clone Routine repository

```sh
git clone https://github.com/puppilot-org/puppilot-routines.git
# or if you prefer ssh
# git clone git@github.com:puppilot-org/puppilot-routines.git

cd puppilot-routines
```

### Setup environment

```sh
# install dependencies
npm clean-install

# create new .env file
cp .env.example .env
```

### Create new Routine

```sh
# copy from template
cp src/routines/__template.ts src/routines/my-routine.ts
```

and edit `.env` file to change `DEBUG_SCRIPT` to the new file name

### Edit Routine file

Edit your routine file. see [Routine Api](./Routine-api.md) for reference

[Puppeteer](https://pptr.dev/) will be used as browser interactions. Please refer to [Puppeteer document](https://pptr.dev/guides/page-interactions)

### Debug Routine

```sh
npm start
```

### Publish Routine

Fork this repository, push your commits and create a pull request on github
