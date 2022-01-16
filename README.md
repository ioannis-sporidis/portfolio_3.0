# How to add a new portfolio item

### `Update the data`

- Add the next section on either portfolio/data/react_apps or react_components.
- Don't forget to update the delay according to the previous item (ex. if it's 0 next is 100)

### `Add a new project to the correct folder`

- If it is a react app go to portfolio/react_apps
- If it is a react component go to portfolio/react_component
- Copy and paste one of the existing items there.

### `Update the new item`

- Update the name of the file.
- Inside the file update line 8 and line 152 with the same name.
- Update lines 9 / 29 / 37 / 38 / 45 with the correct toggleModal and isOpen (should be the next number - from the previous item).

### `Add the file name to the corresponding index.js`

Make sure to import and export the file.

### `Add the item in portfolio.js`

- Import the file either after line 4 (if it is an app) or after line 16 (if it is a component).
- Find the correct section of the tab you want to add the component to.
- Add the item as a component at the end of that section.
- Update the data props with the correct number corresponding to the index of the data in the data file.
- Add a comment with a description.
