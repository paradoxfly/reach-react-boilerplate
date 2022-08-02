# REACH + REACT BOILERPLATE :technologist:

### :question:	What is [Reach](https://docs.reach.sh/tut/overview/#overview)?


:bulb: DApps are made of multiple agents interacting with each other through some backend consensus network, like Ethereum or Algorand. 

:bulb: In [Reach](https://docs.reach.sh/tut/overview/#overview), a programmer only needs to specify the actions of participants---what they do individually and what they do in unison. The [Reach](https://docs.reach.sh/tut/overview/#overview) compiler automatically derives a contract for the consensus network via a connector that enforces these rules. [More on [Reach](https://docs.reach.sh/tut/overview/#overview)](https://docs.[Reach](https://docs.reach.sh/tut/overview/#overview).sh/tut/overview/#overview)

[React](https://reactjs.org/docs/create-a-new-react-app.html) is [one of many](https://docs.reach.sh/frontend/#p_1) frameworks that can be implemented with [Reach](https://docs.reach.sh/tut/overview/#overview).

:seedling: This boilerplate helps kickstart your development of a Reach dAPP using React frontend.

---

### USING [BOILERPLATE](https://github.com/paradoxfly/reach-react-boilerplate)

#### File Directory
```
.
|_ public (contains media files)
|_ src (main app dir)
|   |_ reach
|   |   |_ .reach
|   |   |_ build
|           |_ index.main.mjs
|   |   |_ index.rsh
|   |   |_ reach
|   |_ screens
|       |_ ConnectAccount.jsx
|       |_ index.css
|       |_ index.js
|       |_ PasteContractInfo.jsx
|       |_ SelectRole.jsx
|       |_ TestView.jsx
|       |_ WaitForAttacher.jsx
|   |_ utils
|       |_ Constant.js
|       |_ index.css
|       |_ index.js
|       |_ loader.jsx
|   |_ App.css
|   |_ App.test.js
|   |_ index.css
|   |_ index.js
|   |_ logo.svg
|   |_ reportWebVitals.js
|   |_ setupTests.js
|_ .gitignore
|_ package.json
|_ README.md
```
#### Requirements:

:computer: Reach - https://docs.reach.sh/tut/rps/#tut-1

:computer: git - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

:computer: yarn - https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable

#### Clone the repository

`git clone https://github.com/paradoxfly/reach-react-boilerplate`

#### Install the dependencies

```
yarn install

# From the project root path

cd src/reach

# To compile to the latest version of REACH

./reach compile
```

---

#### Test the Application


Run `yarn start` to get your development server start.

This opens a new browser with `localhost:3000` running.

![startup](public/Startup%20Screen.png)

---

#### Deployer and Attacher view

Open `localhost:3000` on separate browsers to test using [MyAlgo](https://wallet.myalgo.com/) Testnet or it's Mnemonic keys.

Implement your backend changes in `src/reach/index.rsh`
