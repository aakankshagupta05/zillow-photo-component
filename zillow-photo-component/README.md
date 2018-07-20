This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


To run the application, do the following steps

1. Clone the repository https://github.com/aakankshagupta05/zillow-photo-component.git
2. yarn install
3. yarn start

Description of what application does :-

1. The application opens a page where all the image thumbnails are displayed.
2. Clicking on any image opens a modal dialog with the selected image.
3. Here you have the option to see next/previous image by clicking on forward/back arrow or the image itself.
4. Swipe gesture on chrome will work only on mobile device emulator mode (set from dev tools)

Assumptions :-

1. This application was created assuming input is a small, finite array of images.
2. If the number of images is really large, then optimzations can be added like have fixed number of image place holders and re-populating these holders when user scrolls/swipes in any direction