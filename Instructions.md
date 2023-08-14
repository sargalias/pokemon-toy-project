# Pokémon challenge

Welcome to the Pokémon full-stack challenge!

The app is bootstrapped with Next.js and vitest. But, you're free to start a new project and complete it however you'd like. You can have one app or multiple apps (front end, back end) in a setup such as a monorepo. You can use any packages you want.


## Overview

Build an app that displays the first 151 Pokémon. For something simple, you can display all of them on a single page with each Pokémon showing all its information. Alternatively, you can have any other layout you want such as a "list" page for multiple Pokémon where clicking on one takes you to a page with a detailed view of that Pokémon.


## Instructions


### Preparing

If you want to use this repository, clone this repo down to your local machine. Then, `git reset --hard e99c09c` to reset to the first commit.

Run `npm install` to install the project dependencies. To start the dev server, run `npm run dev` and it will fire up at `localhost:3000`


### Step 1

Create an endpoint that fetches the first 151 Pokémon from the official PokéAPI. The endpoint should serve only essential data fields such as 'name', 'id', 'stats', and 'types'.


### Step 2

Develop a visually appealing front-end that showcases all 151 Pokémon on a webpage. Utilize the streamlined data obtained from your API function. Instead of the PokéAPI sprites, incorporate relevant images for each Pokémon from the /public/sprites directory.


### Step 3

Due to the impending closure of the PokéAPI service, your task is to create a reliable local solution. Implement Prisma and set up a SQLite database. Store the data for the first 151 Pokémon in this database. You have the autonomy to decide which fields to include. Adjust your API call to utilize the newly established Prisma client for data retrieval.


### Step 4

Enhance your application with a robust search feature. Users should be able to quickly locate a Pokémon by typing its name into a search box. You can implement this functionality either on the client-side or backend.


### Step 5

Take the search functionality a step further by introducing filtering and sorting capabilities. Users should have the option to sort Pokémon based on attributes like attack, defense, and more.

