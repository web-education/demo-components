# Developper notes

## Developp

Clone that repository

`git clone git@github.com:web-education/demo-components.git`

Clone infra-component repository in the ssame directory than demo-components

`git clone git@github.com:web-education/infra-components.git`

Add somme modifications in infra-compnents and build it. In infra-components directory run

npm start

Load new infra-components's version into demo-components. In demo-components directory run

`npm install --force ../infra-components/`

Run demo-components dev-server

`npm start`


## Deploy on Github pages

Rebase _gh-pages_ branch onto _master_ branch's HEAD

`git rebase -i --onto HEAD <gh-pagesh base>` gh-pages

Build

`npm build`

Commit and push code + compiled runtime dependencies in _gh-pages_.
