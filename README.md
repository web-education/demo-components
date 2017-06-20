# Developper notes

## Developp

* Clone that repository  : `git clone git@github.com:web-education/demo-components.git`
* Clone infra-components repository in the same directory than demo-components : `git clone git@github.com:web-education/infra-components.git`
* Modify infra-compnents source code and build it. In infra-components directory run : `npm start `
* Load new infra-components's version into demo-components. In demo-components directory run : `npm install --force ../infra-components/`
Run demo-components dev-server : `npm start`

## Deploy on Github pages

That repository is configure to publish a Github Page in its _gh-pages_ branch. Follow the next steps to uptade the published version of _gh-pages_ :

* Push new commits on _master_ branch' : `git push origin master`
* Reset last commit from _gh-pages_ branch : `git checkout _gh-pages` and `git reset --hard HEAD~1`
* Rebase _gh-pages_ branch onto _master_ branch's HEAD : `git rebase -i --onto master <gh-pagesh base> gh-pages`
* build : `npm install` and  `npm start`
* Commit folder _build_ _node_modules_ in _gh-pages_ branch : `git add build/ node_modules/` and `git commit -m "	Build with infra-compoents <infra-compoents-version>"`
* Publish the _gh-pages_ branch : `git push --force origin gh-pages` 
