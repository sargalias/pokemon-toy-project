# Notes


## Running the project

1. Clone the repository.
2. Run the necessary prisma commands to create, migrate and seed the database. I think it was `npx prisma migrate dev --name init`
3. Run `npm run dev` to run the project. Run `npm run test` to run the tests.


---


I tried to make the application fairly production-ready. I used many production application patterns that I know. I hope you like the results.

Firstly, I created a new Next.js project of the latest version for practice in doing things the new way. The api is inside src/app/api folder.


## Project structure:

Here are some things I did:
- The components folder is a standard folder for a front end project.
- The app folder is Next.js specific.

TypeScript:
- Pokemon.model.ts has TypeScript types of the Pokemon shape our application needs. Other things, like the PokemonApiClient and prismaPokemonRepository must return this shape to our application.
- I used some TypeScript hacks here and there just because this is a toy project and I didn't want to spend more time to do it properly.

I created a "clients" folder with PokemonApiClient:
- Client.model.ts is the data that comes back from the client. It contains mappers to convert it to the data required by our application.
- It contains tests.

configuration folder:
- This is a fairly standard folder to set up things like database connections, API keys, and get the values of environment variables.

src/prisma:
- PokemonEntity file has the shape of the data returned from the database. It also has mappers to convert it to the shape our application needs.
- prismaPokemonRepository is an implementation of the PokemonRepository.ts.
- This pattern is the "adapter" pattern in clean architecture.

prisma model:
- Please note: I haven't used prisma before. Please forgive any small mishaps.
- I made a fairly standard SQL model for many-to-many relations using a "link" table such as PokemonTypeLink with pokemonId and typeId.
- But, because the data is small and the possible values are finite, the "link" tables were not strictly necessary, but having them applies data normalisation.
- In the pokemon table, I used a column for ID and for pokedexIndex, even though they could have been one column. This is up for discussion. Both ways are appropriate in production. I personally prefer separate columns because of the principle of separation of concerns. It allows for future changes such as if pokemon stop being identified by their pokedexIndex or if their pokedexIndex changes in the future to also include strings.

Components folder:
- It's a bit messy.
- The names are awful... I would choose better names for a real project.


## Other notes

Filtering and sorting:
- I did it on the front end because we already send all data to it.
- An improvement for production would to add query parameters and sort/filter according to those. That way, a user can revisit a particular URL and sort. This is useful for things like bookmarking an Amazon product search with filters and ordering.

Testing:
- Included tests for the React component PokemonCard
- Included tests for pokemonApiClient which makes fetch calls
- An improvement would be to add end to end tests using Cypress.

CSS:
- I used CSS modules because it's what I'm used to, but any approach works.

MUI:
- I used MUI.
- In production, I would "wrap" it. E.g. create my own Button component that internally uses MUI button, and then use my Button component. This is somewhat important in case we switch out MUI in the future and also so our components use the public contract WE want and not MUI's.
