# Heatlth Hub


<p align="center">
  <a href="#">About The Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#">Requirments</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#">Install</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#">Running the Project</a>
</p>

---

## 🚀 About the Project

HealthHub is a hospital dashboard project that provides users with a comprehensive overview of different hospitals. The dashboard includes a table that displays important information about each hospital, including its name, ratings, address, and number of patients. This information can be sorted and filtered to help users find the hospital that best meets their needs.

![Screenshot of Application](./HealthHub.jpg)

---
## 💻 Technologies
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/#promo)
- [VS Code](https://code.visualstudio.com) and [Prettier RC](https://github.com/prettier/prettier)

---
## 🧰 Requirements

For development, you will only need Node.js and a node global package installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

### pnpm installation
After installing node, this project will need pnpm too, so run the following command to install pnpm globally.

      $ npm install -g pnpm

---

## ⚙️ Install
After installing pnpm run the following commands to clone the repo and install all the dependencies that is used for this application.

    $ git clone https://github.com/BrinsilElias/HealthHub.git
    $ cd HealthHub
    $ pnpm install

##  Running the project
After installing all the node modules run the below command to start the server. The server runs on port 8080 so after starting the server visit http://localhost:8080.

    $ pnpm start

---

