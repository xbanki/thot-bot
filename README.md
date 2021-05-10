<p align="center">
  <a href="https://github.com/xbanki/thot-bot/">
    <img alt="ThotBot" src="https://raw.githubusercontent.com/xbanki/thot-bot/main/.github/logo-gh.png" width="546"/>
  </a>
</p>
<p align="center">
  A modern & modular Discord bot designed with extension in mind.
</p>
<p align="center">
  <a href="https://app.codecov.io/gh/xbanki/thot-bot/branch/main">
    <img alt="CodeCov Code Coverage" src="https://img.shields.io/codecov/c/gh/xbanki/thot-bot?color=%23F01F7A&label=codecov%2FcodeCoverage&logo=codecov&style=flat-square"/>
  </a>
  <a href="https://david-dm.org/xbanki/thot-bot">
    <img alt="DavidDM Dependency Status" src="https://img.shields.io/david/dev/xbanki/thot-bot?label=david%2FdevDependencies&style=flat-square"/>
  </a>
</p>
<p align="center">
  <a href="https://github.com/xbanki/thot-bot/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/xbanki/thot-bot?label=github%2Flicense&logo=github&style=flat-square"/>
  </a>
</p>

# Table of Contents #

 - [Quick Start](#quick-start)
 - [Script Reference](#script-reference)
 - [License](#license)

# Quick Start #

To be able to run this bot, you will need to have a Discord account, along with having set up a developer application that the codebase communicates with. See [this](https://discordpy.readthedocs.io/en/latest/discord.html) article on how to set that up.

It is also recommended to have [Yarn](https://yarnpkg.com/) installed, but it isn't required unless there are plans to contribute to this project.

 - Pull this repository using [Git](https://git-scm.com/) or download it via zip
 - `cd path/to/thot` using your favorite shell tool
 - Run `yarn` to install all project dependencies
 - And finally, run `yarn serve` to spin up a development `nodemon` process

# Script Reference #

As mentioned abve, it is recommended to have `yarn` installed globally, but is not required. To run any of these scripts, either do:

 - If on Yarn, run `yarn <script name>` replacing `<script name>` with the appropriate script
 - Or, if on the default NPM package manager, run `npm run <script name>` replacing `<script name>` with the desired script

| Script Name | Script Description |
|---|---|
| `lint` | Runs `eslint` on codebase returning results to `stdout` in a table format. |
| `lint:fix` | Same as `lint` but also attempts to fix minor issues with the codebase. |
| `postinstall` | Post installation hook to install `husky` plugins. This should not be ran on it's own unless `husky` hooks are broken, or working on the hooks. |
| `serve` | Starts a `nodemon` process with the codebase running in development mode that automatically refreshes when changes are detected. |
| `test` | Runs automated tests with `jest` returning results to `stdout` with color enabled. |

# License #

This repository is licensed under the [MIT License](#license). Copyright (c) 2021, xbanki.
