
# genealogynow.life

- http://www.genealogynow.life/: This website was designed to promote genealogy consulting and services.


## Author
Gabriel Perguer Figueiro


## Project Overview
- Include a picture of site that shows it in responsive states and links to deployed code: http://www.genealogynow.life/
- 
- This website is designed sell genealogy services and to motivate the users to get into genealogy. This website is efficient to sell the genealogy consulting and services because it informs the customers about the consultant skills and by providing an easy way for customers to reach out to the consultant.
The website also is meant to boost the user interest to family history by providing questions and answers that tickles human's curiosity. The website also provide a customized google search tool that is meant to remind people that there is a lot that they can learn about their family history with a simple google search.

## HOW TO USE
In the home page (http://www.genealogynow.life/), the major actions are:
- Use of the menu for navigating the site.
- Hover over element on the site to know if they can be clicked
- The header provide the title, logo, and subtitle.
- The cover picture introduce the geneology consultant and provide information to the user about the consultant skills.
- Below the cover there is the trigger questions. Click on each question to see the answer and the pictures related to it. Click a second time to close the question.
- Below the questions there is a carrossel that contains the reviews from previous customer. Click on the ??? arrows or on the dots on the carrossel to switch content.
- ??? button to contact page.

## UX
 
### Strategy
I met a person who's hobbie was genealogy and he was really good at it. A lot of people would look for him for advices related to the topic. This hobbiest realized that he could make some money out of his hobbie. In order to make some money, he would have to transform his hobby into a business. He decided to start his business using this website to promote him.

### Scope
Ultimately this website will be enhanced with updated with consultant new skills and it will contain more built in tools for people to perform more personal research activity in the site. For instance, there are plase to add APIs to the website that are specifically related to Genealogy.
Since the website main porpose is to promote genealogy service consulting business, the basic information about the service and a way to contact the service provider was a must for the minimal viable product. I additional to these basic functionalies, the trigger questions and the google search release were added to hopefully increase the users' interest for investing on family history.

### Project Goals
The of this site is to provide the consultant with a tool to promote his business. The site is a good option for promotion of a business because most of the people uses the internet as a tool to search for services.

#### User Goals (to be continue here)
- To get advices about genealogy.
- To find someone to work on their family tree or family history.

### Users Analysis
1- Who this website is for?  
Answer: This website is for people interested in family history, genealogy.

2- What it is that users want to achieve with this website?  
Answer: The user is searching for help to make progress on his own genealogy efforts. 

3- How your project is the best way to help them achieve these things?  
Answer: The website informs users about consultant's fields of expertise. Also, the website reminds the users that they can use a common technologic tool such as google search to help them out on family history. 

__User Stories:__   
  
| User Action        | Goal          |
| ------------- |:-------------:| 
| User wants to know if the consultant is qualified to help him   | to find new names to his family tree | 
| User wants help  to get started with his family tree     | To get connected with his anscesters      |  
| User wants to search for content about his family in the web | to learn about his family history      |
| User wants to send a message to consultant  | To have his questions answered      |


  
__Link to wireframe:__     
- [Click here to see wireframe in PDF format. This should take you to the file stored on github repository](https://github.com/Gaberoids/genealogynow/blob/master/assets/readme_files/GeneologyGeniusMockup.pdf)

## Features
 
- ### Existing Features
    - Clickable buttons and links
    - Form Contact Us page
    - Photo gallery with zoom capability
    - Navigation bar. Hamburger icon on mobile version 
    - Send a message to genealogy consultant
    - Email validation on contact us page
    - Responsive Grid system
    - Website supported by jasmine tests
    - Icons and background image

- ### Features Left to Implement
    - To improve navigation bar style
    - Ability to search in the web filtered by location.
    - Improve the way images are displayed when they are zoomed in (index.html).
    - Ability for users to visit consultant's social media and share the site.
    - Consultant reviews ( 3 reviews).

## Technologies Used

[Bootstrap](https://getbootstrap.com/docs/4.0/utilities/display/) 
    - The navigation bar (in all pages), the photo gallery (Questions section) portions of the index.html, and contact us portion of contact.html page were built with a template from **bootstrap** to speed up development. However, the templates have been modified from its original for customization purposes.   

[Google Fonts](https://fonts.google.com/)
    - **Google Fonts** was used to style the fonts of the project.

[Viewport](https://www.w3schools.com/css/css_rwd_viewport.asp) 
    - Meta name **viewport** was also added in order to make the site responsive to different sizes of screen.

[Javascript](https://www.javascript.com/)
    - This technology was used to link APIs to the website (Google Search and Emailjs APIs)

[Jquery](https://jquery.com/)
    - This library was used to create an interactive User Interface (Zoom functionality found on the index.html "questions" sections)

[Jasmine](https://en.wikipedia.org/wiki/Jasmine_(JavaScript_testing_framework))
    - This framework was used to test javascript code, such as the code that validate the email input text box found in the contact.html page 



## Testing

Automated tests
1. Email validation
    - Go to https://gaberoids.github.io/genealogynow/assets/readme_files/tests.html to see test results.
    - The link to the test file: https://github.com/Gaberoids/genealogynow/blob/master/assets/spec/calcSpecs.js .
    - The link to the page where the function being tested is found: https://github.com/Gaberoids/genealogynow/blob/master/assets/js/calc.js .

Non-automated tests
1. Navigation bar:
    1. Go to the "Homapage" page
    2. Click on all links and buttons to see if they work and take the user to the pages they meant to go.
    3. Change the size of the screen to make sure that the navbar is presentable
    4. Click the links and button again in different size of screens to verify they still work (mainly when hamburger icon shows).

2. "Questions" section of the homepage:
    1. Go to the "Home" page (index.html)
    2. Hover over the small pictures on the right side of the page and note the cursor turn into a magnifying glass.
    3. Click the small pics and notice that they exchange position with with the pic placed on the big frame.  
    4. Change sizes of the screens to make sure that the site is still presentable and functional on those sizes.

3. Search functionality:
    1. Go to the "geniusSearch.html" page and type "Perger" inside the search box.
    2. Note how the search returns many results.
    3. Note that the search results are related to the key words "Perger" (typed by the user) plus "family" and "genealogy" (default key words).
    4. Make sure the content of the page is presentable in all sizes of screen.
    5. Make sure that the text box are working with all sizes of the screen by typing text in them and hitting enter.

3. Contact us functionality (Mandatory fields, email validation, send email):
    1. Go to "https://gaberoids.github.io/genealogynow/contact.html" .
    2. Without typing anything click "Submit Inquiry".
    3. Note alert a click ok.
    4. Type something in the text box for email and submit.
    5. Click ok and delete the email text.
    6. Type something in the message and submit.
    7. Click ok and add an email address to the email input box and submit. This time, you should get a message that confirms that an email has been sent out.
    8. To confirm that the email was sent go to gmail.com, log in into gmail.com with the following credentials:
        - User name: geniusgenealogy@gmail.com
        - Password: codeacademyadmin
    9. Note that an email was received from the website contact page.

    (*CLARIFICATION NOTE: Testing screen size means -> by increasing and decreasing the browser window and using developer tools to test site on mobile view.*)


**The pages in this website will be more simple in the mobile view compared to desktop view. For example:**
- links in the menu navigator will be replaced by the hamburger icon.
- In the index.html, the head shot from consultant will be removed on mobile screen.

**Bugs:**  
- There is an error message on index.html. It says "Uncaught TypeError: Cannot read property 'step' of undefined.". According to my research, this error has to do with Jquery CDNs. This bug is not breaking the page right now, so I left it alone for now.

## Deployment

Link to the github repository https://github.com/Gaberoids/genealogynow .

Link to the deployed site https://gaberoids.github.io/genealogynow/ .

Deplyed and development versions have no differences.

**Deployment steps:**
1. Go to the link https://github.com/Gaberoids/genealogynow .
2. Click the tab "Settings".
3. Under the section "HUB Pages" click the drop down button under "Source" and select "Master Branch".
4. Go to under the "HUB Pages" section again, and click on the link. This link is the address to the deployed site.

**Cloning Repository steps:**
1. Go to the link https://github.com/Gaberoids/genealogynow .
2. Click the green button "Code".
3. Select the option "Download Zip".
(For more information on how to clone the repository, visit https://docs.github.com/en/enterprise/2.13/user/articles/cloning-a-repository)


## Credits
- My tutor at code academy Moosa. He helped me with directions on how to how to improve the visual presentation of the site and helped me with some the jasmine test.
- Special thanks to [TMS Tree icon by Icons8](https://icons8.com/icon/34828/tms-tree) for providing the cool logo for this website.

### Content
- The content of this website is original.

### Media - Source of all pictures that are not original
* #### Index.html page
    * ##### Cover
        - [cover-tree.jpg](https://www.freeimages.com/photo/trees-1393133)
    * ##### Question Section
        * ###### How they look like?
            -  [old-headshot.jpg](https://www.freeimages.com/photo/old-framed-picture-1433232)
            -  [old-photos-multiple.jpg](https://www.freeimages.com/photo/old-photos-1434448)
            -  [old-family-bench](https://www.freeimages.com/photo/old-family-photo-2-1433934)
            -  [old-family-portrait](https://www.freeimages.com/photo/old-time-family-photo-1311342)
        * ###### Where they came from?
            -  [where_castle.jpg](https://www.freeimages.com/photo/irish-abbey-1214069)
            -  [where_africa.jpg](https://www.freeimages.com/photo/africa-1406054)
            -  [where_india.jpg](https://www.freeimages.com/photo/taj-1307962)
            -  [where_china.jpg](https://www.freeimages.com/photo/theatre-stage-1235519)
        * ###### How they came from?
            -  [how-wagon.jpg](https://unsplash.com/photos/QFhIVlX9wTs)
            -  [how-ship.jpg](https://www.freeimages.com/photo/sailing-ship-in-harbor-1450308)
            -  [how-train.jpg](https://www.freeimages.com/photo/steam-locomotive-1447997)
            -  [how-car.jpg](https://www.freeimages.com/photo/my-granny-in-old-car-1440617)

* ### Contact.html page
    -  [contact-tree.jpg](https://www.freeimages.com/photo/tree-on-the-hill-1385676)

* ### Search.html page
    -  [search-bk-image.jpg](https://www.freeimages.com/photo/old-family-photos-1423774)

### Acknowledgements

I received inspiration for this project from [Codeacademy](https://courses.codeinstitute.net/).
- The modal functionality and the Mobil hemburger buttons were built inspired on templates from bootstrap.
 

