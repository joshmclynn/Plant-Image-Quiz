# Plant-Based-Quiz
Plant Based Quiz is a website that users can visit to practice their knowledge on plant names using images as questions featuring "lifelines" allowing the user to gain an advantage at trickier sections of the quiz.
![Responsive](/docs/screen-shots/responsive.PNG "Responsive look at site")
## Contents

* UX
  * Project Goals
  * User Goals
  * User Stories
  * Designer Goals
  * Design Choices
    * Fonts
    * Colours
    * Back-grounds
  * Features
  * Future Goals
  * Technologies Used
  * Testing
    * Issues and Resolutions
    * Validators
    * LightHouse
    * Responsivness
  * Known Bugs
  * Deployment
  * Credits
  * Acknowledgements
## UX
### Project Goals
The goal of this project was to create an engaging quiz for users, that would allow the user to clarify previous knowledge gained whilst gardening.

### User Goals
The targeted user is someone interested in Gardening and Horticulture.
  * A proffesional Gardener
  * A keen home Gardener
  * A horticulture student
  * Someone interested in Horticulture
### User Stories
  * As a user I want the site to be easy to navigate and easy to operate.
  * As a user I want to be challenged by questions.
  * As a user I want to beat my previous score.
  * As a user I want to be able to visualise the questions.
  * As a user I want the interface to be easy to operate.
### Designer Goals
  * A simple site consistant across all devices.
  * Self explanitory control system.
  * Be engaging, encouraging users to return and try the quiz again.
### Design Choices
#### Font
Whilst designing the quiz I found that I preferef to keep the fonts simple in order to allow for a minimilist feel and create familiarity with the users, which is why I chose to use "helvetica".
#### Color Scheme
Being a game based around gardening, I thought it important to keep to different shades of green throughout with buttons being two different shades of green creating a relaxing and "green" enviroment. 
   * Answer buttons : #9fe3b1
   * LifeLine buttons : #32b459
#### Back-grounds
The background of the website is a custom image creating using adobe photoshop, Intended to mimic a silhouetted flower bed keeping within the theme of "green" it only contains two shades of green.  
![Background image](/docs/screen-shots/background.PNG "Background used in site")
## Features
### Header Element
The Header element contains a custom made image created in photoshop, which further adds into the gardening theme which is throughout the website.  
![Header Image](/docs/screen-shots/header.PNG "Header used in site")
### Onload Page
This container contains the button to access the instructions for the quiz and the button to start the quiz.  
![Onload page](/docs/screen-shots/onload.PNG "Onload page")
### Imagery
The Question is asked as an image with the user having to make their decision from the image given.
### Answers
The answers are laid out in a group of four and are one touch answering buttons.    
![Answers buttons](/docs/screen-shots/answersbutton.PNG "Answer buttons on site")
### "Lifelines"
The user has the ability to use three life-lines, they can only use each of these lifelines once during the quiz.
   * #### FiftyFifty
     This life-line removes two incorrect answers, leaving the correct answer and an incorrect answer.
   * #### Phone a Friend
     This life-line "phones" a friend and asks them for the answer, with two outcomes depending on a random number generated.
   * #### Ask an Expert
     This life-line will always return the correct answer.  
     ![Life Lines Element](/docs/screen-shots/lifelines.PNG "Lifelines Element")
## Future Goals
In the future this website would be improved through the following:-
   * ### Randomization
     I would like to be able to implement a randomization function within the quiz, allowing for a different order of questions in the future.
   * ### Greater selection of questions
     I would like to create a further database of questions and answers in order to expand the quiz further.
   * ### High-Score system
     I would like to implement a highscoring feature, allowing users to document there progress and compare them to other users scores.
## Technologies Used
Below are the technologies used in the building of this website.
### Languages
   * HTML
   * CSS
   * Javascript
### Applications
   * Adobe Photoshop
### Libraries
   * [Sweet Alerts 2](https://sweetalert2.github.io/#examples)
## Testing
   * ### Browsers and Devices
      * The site has been tested on a variety of android phones including: 
        * samsung
        * Google
        * Huaweii
     * The site has been tested on a variety of apple products including:
        * Apple Iphone 8 and 11
        * Apple Ipad(Safari)
        * Apple MacbookAir (Chrome + Safari)
     * The site has been tested on laptops including:
        * Microsoft surface PRO
     * Browsers the site has been tested on inlucde:
        * Edge
        * Chrome
        * Safari
        * Samsung Internet
   * ### Issues and Resolutions
     * When adding a back-ground image through css it would work locally, but wouldnt work when commited to git-hub and displayed on git-pages, Unknown as to the reasoning why as the same code was uploaded fairly soon after with minimal changes and it would work.
     * When passing the Javascript through [JSHINT](https://jshint.com/) it would return messages over unsused variables, I could get rid of this by declaring the variables as blank but decided it wasnt needed in this instant.
   * ### Validators
     * #### HTML   
     ![HTML Validator W3](/docs/screen-shots/htmlvali.PNG "HTML VALIDATOR")
     * #### CSS  
     ![CSS VALIDATOR JIGSAW](/docs/screen-shots/cssvali.PNG "CSS VALIDATOR")
   * ### Lighthouse  
     ![Lighthouse](/docs/screen-shots/lighthous.PNG "LIGHTHOUSE CHECK")
   * ### Responsiveness
     * Current media queries at:
         * (340px and below)Small Phone
         * (Designed at 375px)Average Phone
         * (600px to 949px) Tablet
         * (950px to 1100px) Small Laptop
         * (1101px to 1350px) Medium/Large Laptop
         * (1351 and above) Desktop
      * Although initially designed for an average mobile phone size, the site scales all the way up to desktop using media queries
## Known Bugs
     * Currently none
## Deployment
   * The site was deployed to GitHub pages. The steps to deploy are below
      - In the github repository, navigate to the settings tab.
      - From the source section, select the master branch.
      - Once the master branch has been selected, the page provided the link to the completed website.
      - you can access the live site via the following link [Plant Based Quiz](https://joshmclynn.github.io/Plant-Image-Quiz/).
## Credits
   * All images and background have been either created through adobe photoshop or taken by myself.
## Content
   * Life-lines take inspiration from Who Wants to be a Millionaire.
     



 
