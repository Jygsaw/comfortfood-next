## Summary
This is a personal project to learn NextJS and PostgreSQL and to work through different development scenarios.  Some design choices are intentionally bad in order to experience the pain and corrective work necessary to clean up tech debt.

For example, all user content data is currently stored in one giant table that will eventually need to be split and normalized.  Though this is bad from a design standpoint, the underlying goal is to research and implement a migration path to achieve better data normalization.

We apologize for the inconvenience.

## Demo
https://comfortfood.onrender.com
(note: May be slow to start up from hosting service hibernation)

## TODO
- [ ] update cookbook page to list authored content
- [ ] implement better error feedback for user interactions
- [ ] update tailwind configuration to style tags in bulk
    - [ ] see https://tailwindcss.com/docs/functions-and-directives#layer
    - [ ] see https://tailwindcss.com/docs/functions-and-directives#apply
    - [ ] update "<a>" tags with traditional styling

## Backlog
- [ ] integrate material UI components
- [ ] implement animations
- [ ] refine login flow
    - [ ] give more login choices
    - [ ] convert to modal for login prompt
    - [ ] prompt user to create account
- [ ] review whether client components need auth access
    - [ ] move auth access to parent server component and pass necessary info down?
    - [ ] remove NextAuthProvider?
- [ ] convert postgres usage to pg usage to cut down on packages installed
    - redundant to use two different psql clients for database interaction when pg needed by next-auth
- [ ] when viewing a DRAFT recipe, then only visibile to createdBy
- [ ] integrate React Suspense and NextJS loading.ts into pages
- [ ] investigate useFormState for error handling
    - [ ] https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#server-side-validation-and-error-handling
- [ ] investigate replacing NextAuth SessionProvider with getServerSession
    - [ ] https://next-auth.js.org/getting-started/client#sessionprovider
    - [ ] https://next-auth.js.org/configuration/nextjs#getserversession
- [ ] migrate auth.ts implementation to new practices after NextAuth.js becomes Auth.js
    - [ ] see: https://authjs.dev/guides/upgrade-to-v5?authentication-method=server-component
- [ ] limit fetch cookies to only next-auth session tracking cookies

## Future Features
- consider soft delete standard to preserve paper trail on updates
- research html editors and how to embed user-created articles in pages
- copied and modified recipes
    - allow users to copy a recipe in order to make personal version for cookbook
    - POST(id) = copy recipe button
        - copy recipe as separate entity
            - id = genUUID
            - draftOf = self.id
            - copiedFrom = POST.id
    - should modified recipe keep a reference to original?
    - what happens if original is deleted?
- extend articles data model
    - rating system
- extend recipes data model
    - rating system
    - time needed
    - difficulty
    - ingredients
- bookmarks
    - allow users to bookmark favorite articles and recipes
    - what happens when original is deleted?
        - delete all associated records?
        - bad experience for user to have data disappear?
        - author loss of control if unable to remove their recipe?
        - soft delete instead of hard delete?
        - null out createdFrom fields of related recipes?
        - bookmarks?
- bypass REST endpoints and call database client directly from website server components

## Done
- [X] redirect 401 errors to login page
- [X] typecast uuid to allow invalid uuids to process as not found
- [X] move new content buttons to cookbook page
- [X] check session and require user_id in content creation endpoints
- [X] simplify site layout hierarchy
- [X] integrate NextAuth for user authentication
- [X] integrate homepage with persistent data
- [X] simplify endpoint boilerplate responses
- [X] generalize frontend network error handling
- [X] standardize network response handling in api lib
- [X] create error and not-found pages
- [X] provide example data and supply fake view content
- [X] implement basic validation before publication
- [X] integrate recipes endpoints with persistent storage
- [X] integrate articles endpoints with persistent storage
- [X] refine articles endpoints, api, and routes to match recipes design
- [X] update recipes routes and api to support drafts
    - [X] recipes
        - [X] GET = display summary data
        - [X] POST() = add recipe button
            - [X] create new recipe record
                - [X] id = genUUID
                - [X] draftOf = self.id
            - [X] redirect to /recipes/[id]/draft after draft created
    - [X] recipes/[id]/[[...slug]]
        - [X] GET(id) = display recipe
            - [X] fetch recipe where id = id
        - [X] POST(id) = edit recipe button
            - [X] if draft exists, skip creation
            - [X] if draft doesn't exist, copy original recipe and create new record
                - [X] id = genUUID
                - [X] draftOf = POST.id
            - [X] redirect to /recipes/[id]/draft
        - [X] DELETE(id) = delete recipe button
            - [X] delete recipe where id = DELETE.id
    - [X] recipes/[id]/draft = edit DRAFT of recipe.id
        - [X] GET(id) = display draft recipe for editing
            - [X] fetch recipe where draftOf = id
        - [X] PATCH(id) = edit draft recipe
            - [X] edit recipe where draftOf = id
        - [X] DELETE(id) = delete draft recipe
            - [X] delete recipe where draftOf = id
    - [X] recipes/[id]/draft/prevew = preview DRAFT
        - [X] GET(id) = display draft recipe
            - [X] fetch recipe where draftOf = id
        - [X] PATCH(id) = publish draft recipe
            - [X] publish recipe where draftOf = id
                - [X] if draftOf = self.id
                    - [X] set draftOf = null
                - [X] if draftOf != self.id
                    - [X] read data from draft recipe where draftOf = id
                    - [X] update recipe where id = draft.draftOf
                    - [X] delete draft recipe where draft.draftOf = id
