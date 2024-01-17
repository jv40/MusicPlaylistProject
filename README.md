# Unit 2 Project // Playlist [Light]

## Overview:

In this unit, coders will create a playlist. The playlist will display a list of information about different songs with images and links to play the songs. 

To create this project, coders will create arrays to hold song information, use a for or forEach loop to iterate over the arrays, and display data to the screen. 

They will use .push to add new songs to their playlist. Then, students will refactor their project to using objects instead of arrays to hold their data.


## Set-Up
1. [ ] Fork your own copy of the repl.
2. [ ] Double-check that you are signed in with your GitHub account.


## Planning
3. [ ] Complete the planning document.
   - [ ] Look over Inspiration and Ideas
   - [ ] Fill out the Brainstorm section.
   - [ ] Fill out the Song Data section.
4. [ ] Read through the HTML starter code to understand the organization and class names given.
5. [ ] Read through the JavaScript starter code to determine where each given function is declared and where each given function is called.
6. [ ] Declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.


## JavaScript: Storing Song Data

7. [ ] Create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.


## JavaScript: Loop and Display Data

8. [ ] Loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

What to display your song data in:

   - images: `<img>` tag inside a `<p>` tag
   - song names: `<p>` tag
   - artist: `<p>` tag
   - song links: `<a>` tag inside a `<p>` tag

**Note**: There is a function called `emptyDisplay`. Determine where this should be placed in your code. Where does it make sense to call this function?


## JavaScript: Add Song Data

9. [ ] Declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
   
10. [ ] Use `.push()` to add each input value to the correct array.



## JavaScript: Refactor Arrays to Objects

11. [ ] Comment out the arrays data.
12. [ ] Create an object for each of your songs.
13. [ ] Inside each object, add key/value pairs to store the image url, song name, artist, and song link.
14. [ ] Create an array that stores all of the objects.

## JavaScript: Refactor Loops to Display Info

15. [ ] Update your `addSongInfo` function so the input values are saved in as values in a new object.
16. [ ] Update your `.push()` so the input object is added to your array of objects.
17. [ ] Update your loops based on your new array of objects.


## Project Extensions:

- [ ] Add in your own CSS to personalize your project.
- [ ] Use .length to display how many songs are on your list.
- [ ] Add a clear or delete button to clear songs on your list.
- [ ] Refactor your project further by utilizing functions to simplify your code.
- [ ] Add a shuffle button and functionality.


## References/Tools

- [Advanced Reference Table](https://docs.google.com/document/d/1SElvLDvtVOoYZJyR5XbCQJWbSTxyChDiQkz7n3c63Go/preview)
- [How Jquery Works](http://learn.jquery.com/about-jquery/how-jquery-works/)
- [JQuery Events](http://api.jquery.com/category/events/)