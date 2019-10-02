# Getting Started

## Requirements

All requirements should be installed properly before cloning this repository. Otherwise unexpected results will occur (e.g. not having Git LFS installed will result in any LFS images being skipped in the clone process, causing the game to load a black screen without those images.)

If you're using Mac OS, we recommend installing [Homebrew](https://brew.sh/) to act as the package manager for installing both Node and Python (as opposed to downloading them directly from the links below).

* Mac OS X, Windows, or Linux
* [Git LFS](https://git-lfs.github.com/)
* [Node + NPM](https://nodejs.org/en/download/current/)
* [Python](https://www.python.org/downloads/) (for installing Cocos)
* [Cocos2d-x](./installing-cocos.md) (install Python first)

## Quick Start

1. Fork, then clone the repository

```sh
git clone https://github.com/curriculum-advantage/cocos2d-html5-boilerplate.git
```

1. Navigate to the root directory

```sh
cd cocos2d-html5-boilerplate
```

3. Install the dependencies

```sh
npm i
```

4. Bundle, compile, and [watch](https://webpack.js.org/configuration/watch/) the app

```sh
npm run dev
```

5. If step 4 above did not automatically open a browser tab for you, manually open the app in your preferred browser

```sh
open http://127.0.0.1:8000/
```

6. Add a query string to the url with the appropriate key=value pairs (e.g. http://127.0.0.1:8000/?actid=5111&p1=1&p2=123). Query options include:

* `actid`: activity id of the game
* `p1`: debugging mode
* `p2`: seed used for [deterministic, pseudo-random results](https://en.wikipedia.org/wiki/Pseudorandom_number_generator)
