## Demo
https://comfortfood.onrender.com
(note: May be slow to start up from hibernation.)

## TODO
- migrate add recipe page to new + edit recipe flow
- NEW => create record from default, draft = true, redirect to EDIT DRAFT
- EDIT DRAFT => edit record
- READ DRAFT => only access for createdBy user
- DELETE DRAFT => delete record
- PUBLISH => if (createdFrom = null), then draft = false => LIVE record
- EDIT LIVE => create record from LIVE, createdFrom = LIVE, redirect to EDIT DRAFT
- READ LIVE => all access
- DELETE LIVE => delete record
    - and all references (eg. bookmarks)?
- PUBLISH => if (createdFrom = LIVE), then replace LIVE w/ DRAFT
    - and delete all related drafts?
    - and allow publish of separate new record?
- research html editors and embedding user articles in pages
