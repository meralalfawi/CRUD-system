This project is a CRUD (Create, Read, Update, Delete) web application built using HTML, CSS, and JavaScript. It allows users to manage data dynamically on the webpage with full persistence, thanks to localStorage. This ensures the data is retained across page refreshes.

-> Features:
- Create: Users can add new items to the list using an input field.
- Read: Displays the list of items dynamically, retrieved from localStorage.
- Update: Allows users to edit existing items by providing a prompt with the option to change their values.
- Delete: Users can delete an item from the list.
- Persistent Data: All data is saved in localStorage to ensure it persists even after a page refresh.

-> Technologies Used:
- HTML: Structure of the web application, including the input form and list.
- CSS: Styling and design to make the application visually appealing.
- JavaScript: Handles all CRUD operations and interactions with localStorage.
- localStorage: Stores data locally in the browser, ensuring it persists across page reloads.

-> How It Works:
- Create: Enter an item in the input field and click "Add Item". The item will be added to the list and saved in localStorage.
- Read: The items are displayed dynamically from localStorage. They persist even after a page refresh.
- Update: Click on "Update" next to an item to change its value via a prompt. The item is updated both in the array and localStorage.
- Delete: Click on "Delete" to remove an item from the list. The item is deleted from both the list and localStorage.
- Persistent Storage: All changes made (add, update, delete) are immediately reflected in localStorage, so they remain even after the page is reloaded.
