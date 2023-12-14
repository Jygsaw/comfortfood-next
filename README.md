## Demo
https://comfortfood.onrender.com
(note: May be slow to start up from hibernation.)

## TODO
- [ ] integrate with persistent storage
- [ ] streamline endpoints with shared lib functions

## Next Steps
- [ ] implement some concept of user record
    - [ ] when viewing a DRAFT recipe, then only visibile to createdBy
- [ ] integrate React Suspense and NextJS loading.ts into pages

## Future Features
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
- bookmarks
    - allow users to bookmark favorite articles and recipes
    - what happens when original is deleted?
        - delete all associated records?
        - bad experience for user to have data disappear?
        - author loss of control if unable to remove their recipe?
        - soft delete instead of hard delete?
        - null out createdFrom fields of related recipes?
        - bookmarks?

## Done
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
