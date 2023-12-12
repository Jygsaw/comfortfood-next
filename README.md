## Demo
https://comfortfood.onrender.com
(note: May be slow to start up from hibernation.)

## TODO
- [ ] update api and routes to support drafts
    - [ ] recipes
        - [ ] GET = display summary data
        - [ ] POST() = add recipe button
            - [ ] create new recipe record
                - [ ] id = genUUID
                - [ ] draftOf = self.id
            - [ ] redirect to /recipes/[id]/draft
    - [ ] recipes/[id]/[[...slug]]
        - [ ] GET(id) = display recipe
            - [ ] fetch recipe where id = id
            - [ ] if (draftOf) only visibile to createdBy
        - [ ] POST(id) = edit recipe button
            - [ ] redirect to draft of recipe (if draftOf exists)
                - [ ] /recipes/[id]/draft
            - [ ] copy recipe and create new record (if draftOf doesn't exist)
                - [ ] id = genUUID
                - [ ] draftOf = POST.id
        - [ ] DELETE(id) = delete recipe button
            - [ ] delete recipe where id = DELETE.id
    - [ ] recipes/[id]/draft = edit DRAFT of recipe.id
        - [ ] GET(id) = display draft recipe for editing
            - [ ] fetch recipe where draftOf = id
        - [ ] PATCH(id) = edit draft recipe
            - [ ] edit recipe where draftOf = id
        - [ ] DELETE(id) = delete draft recipe
            - [ ] delete recipe where draftOf = id
    - [ ] recipes/[id]/draft/prevew = preview DRAFT
        - [ ] GET(id) = display draft recipe
            - [ ] fetch recipe where draftOf = id
        - [ ] PATCH(id) = publish draft recipe
            - [ ] publish recipe where draftOf = id
                - [ ] if draftOf = self.id
                    - [ ] set draftOf = null
                - [ ] if draftOf != self.id
                    - [ ] read data from draft recipe where draftOf = id
                    - [ ] update recipe where id = draft.draftOf
                    - [ ] delete draft recipe where draft.draftOf = id

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
