get workingleave pictures popping up for the end of the project

Have people searching for the family name on the cover or menu navigator

On the questions section, do I want to move the text to the right?

diminish the size of the images to less than 500KB

Improve contact button

contact white background and text on three side
Mke contact page functional
Fix link on contact page

add image to search

bug header link. CSS to turn color from blue to black does not work. Underline in hover = none not work as well

Bug that I went around:
- the custom css for the css selctor for <a> inside of header tag were not working when I style was applied by an id attributed. I removed the id from the a tag and made a "selector header a" 

COntact page:
Make a validation for email in the contact page
give a message/alert saying that the message has been successfuly sent
icon for contact us - email
change photos dimentions to better fit spaces on the QUestions section 

remove the console logs ffrom the sendEmail.js

geniusgenealogy@gmail.com
codeacademyadmin

menu line height

# genealogygenius.com

This website was design to promote genealogy consulting services.

## UX
 
1- Who this website is for?  
Answer: This website is for people interested in family history, genealogy.

2- What it is that users want to achieve in this website?  
Answer: The user would like to learn about the consultant's qualifications and about his own family history. 

3- How your project is the best way to help them achieve these things?  
Answer: There are other websites that provide consultant's fields of experties. Also, the website allow the user to see the content that the web has on his family name. 

__User Stories:__   
  
| User Action        | Goal          |
| ------------- |:-------------:| 
| User wants to know if the consultant is qualified to help him   | find new names to his family tree | 
| User wants a person to help him to get started with his family tree     | To get connected with anscesters      |  
| User wants to search in the web for content on his family | to learn about his family history      |

  
__Link to wireframe:__     
- [Click here to see wireframe on PDF format. This should take you to the file stored on github repository](https://github.com/Gaberoids/genealogygenius/blob/master/assets/readme_files/GeneologyGeniusMockup.pdf)

## Features
 
- ### Existing Features
    - Clickable buttons and links
    - Form
    - Photo gallery with zoom capability
    - Navigation bar. Hamburger icon on mobile version 
    - Send a message for consulgenealogy consultant
    - Email validation on contact us page
    - Responsive Grid system
    - Website supported by jamine tests
    - icons and background image

- ### Features Left to Implement
    - Ability to search in the web filtered by location.
    - Improve the way images are display when they are zoomed in (index.html).
    - Ability to user to visit consultant social media and share the site.
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

[Jequery](https://jquery.com/)
    - This library was used to create an interactive User Interface (Zoom functionality found on the index.html "questions" sections)

[Jasmine](https://en.wikipedia.org/wiki/Jasmine_(JavaScript_testing_framework))
    - This framework was used to test javascript code, such as the code that validate the email input text box found in the contact.html page 

  
[JQuery](https://jquery.com) and [Javascript](https://www.javascript.com/) - The project uses **JQuery and javascript** to make features responsive to customer's actions (thumbs up functionality required it).


## Testing

Automated tests
1. Email validation
    - go to https://8000-eca30e74-d9b7-4dbd-be27-4abfd6b0cef0.ws-us02.gitpod.io/tests.html to see test results.
    - The link to the test file???
    - The link to the page where the tested function is found???

Non-automated tests
1. Navigation bar:
    1. Go to the "Homapage" page
    2. Click on all links and buttons to see if they work and take the user to the pages they meant to go.
    3. Change the size of the screen to make sure that the navbar is presentable
    4. Click the links and button again in different size of screens to verify they still work (mainly when hamburger icon shows).

2. "Questions" section of homepage:
    1. Go to the "Home" page (index.html)
    2. Hover over the small pictures on the right side of the page and note the cursor turn into a magnifying glass.
    3. Click the small pics and notice that they exchange position with with the pic placed on the bigger frame.  
    4. Change sizes of the screens to make sure that the site is still presentable and functional on those sizes.

3. Search functionality:
    1. Go to the "geniusSearch.html" page and type "Perger" inside the search box.
    2. Note how the search return many results.
    3. Note that the search resuts are related to the key words "Perger" (typed by user) plus "family" and "genealogy" (default key words).
    4. Make sure the content of the page is presentable in all sizes of screen.
    5. Make sure that the text box are working on all sizes of the screen by typing text in them and hitting enter.

    (*CLARIFICATION NOTE: Testing screen size means -> by increasing and decreasing the browser window and using developer tools to test site on mobile view.*)


**The pages in this website will be more simple in the mobile view compared to desktop view. For example:**
- links in the menu navigator will be replaced by the hamburger icon.
- In the index.html, the head shot from consultant will be removed on mobile screen.

**Bugs:**  
The project had its challenges, but I was not able to identify bugs. 

## Deployment

Link to the github repository https://github.com/Gaberoids/geneologygenious .

Link to the deployed site https://gaberoids.github.io/geneologygenious/ .

Deplyed and development versions have no differences.

**Deployment steps:**
1. Go to the link https://github.com/Gaberoids/geneologygenious .
2. Click the tab "Settings".
3. Under the section "HUB Pages" click the dropdown button under "Source" and select "Master Branch".
4. Go to under the "HUB Pages" section again, and click on the link. This link is the address to the deployed site.

**Cloning Repository steps:**
1. Go to the link https://github.com/Gaberoids/geneologygenious .
2. Click the the green button "Code".
3. Select the option "Download Zip".
(for more information on how to clone the repository, visit https://docs.github.com/en/enterprise/2.13/user/articles/cloning-a-repository)


## Credits
- My tutor at code academy Moosa. He helped me with directions on how to how to improve the visual presentation of the site and helped me with some the jasmine test.
- Special thanks to [TMS Tree icon by Icons8](https://icons8.com/icon/34828/tms-tree) for providing the cool logo for this website.

### Content
- The content of this website is original.

### Media - Source of all pictures that are not original
####Index.html page
#####Cover
- [cover-tree.jpg](https://www.freeimages.com/photo/trees-1393133)
#####Question Section
######How they look like?
-  [old-headshot.jpg](https://www.freeimages.com/photo/old-framed-picture-1433232)
-  [old-photos-multiple.jpg](https://www.freeimages.com/photo/old-photos-1434448)
-  [old-family-bench](https://www.freeimages.com/photo/old-family-photo-2-1433934)
-  [old-family-portrait](https://www.freeimages.com/photo/old-time-family-photo-1311342)
######Where they came from?
-  [where_castle.jpg](https://www.freeimages.com/photo/irish-abbey-1214069)
-  [where_africa.jpg](https://www.freeimages.com/photo/africa-1406054)
-  [where_india.jpg](https://www.freeimages.com/photo/taj-1307962)
-  [where_china.jpg](https://www.freeimages.com/photo/theatre-stage-1235519)
######How they came from?
-  [how-wagon.jpg](https://unsplash.com/photos/QFhIVlX9wTs)
-  [how-ship.jpg](https://www.freeimages.com/photo/sailing-ship-in-harbor-1450308)
-  [how-train.jpg](https://www.freeimages.com/photo/steam-locomotive-1447997)
-  [how-car.jpg](https://www.freeimages.com/photo/my-granny-in-old-car-1440617)

###Contact.html page
-  [contact-tree.jpg](https://www.freeimages.com/photo/tree-on-the-hill-1385676)

### Acknowledgements

I received inspiration for this project from [Codeacademy](https://courses.codeinstitute.net/).
- The modal functionality and the mobil hemburger buttons were built inspired on templates from bootstrap.
 

