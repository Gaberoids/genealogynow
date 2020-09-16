get workingleave pictures popping up for the end of the project

Have people searching for the family name on the cover or menu navigator

On the questions section, do I want to move the text to the right?

diminish the size of the images to less than 500KB

Improve contact button

contact white background and text on three side
Mke contact page functional
Fix link on contact page

bug header link. CSS to turn color from blue to black does not work. Underline in hover = none not work as well

Bug that I went around:
- the custom css for the css selctor for <a> inside of header tag were not working when I style was applied by an id attributed. I removed the id from the a tag and made a "selector header a" 

COntact page:
Make a validation for email in the contact page
give a message/alert saying that the message has been successfuly sent

change photos dimentions to better fit spaces on the QUestions section 

remove the console logs ffrom the sendEmail.js

geniusgenealogy@gmail.com
codeacademyadmin

# ChildrenDaze.com

ChildrenDaze was designed to provide entertainment for internauts. The entertainment is in the form of stories where the main protagonists are children. In this website, people will be able to read stories and share their own. Also, the website will be used as media to raise funds for a charity campaign that has the goal to help children with cancer. The website has a simple and clean interface so people can focus in its content.
## UX
 
1- Who this website is for?  
Answer: This website is for people interested in family friendly entertainment related to children.

2- What it is that users want to achieve in this website?  
Answer: The user want to be inspired by innocenent children wisdom or laugh at funny things they say. Also, children can say quite adorable things and if the user is looking for some cozy and warm fillings, they will be able to find it on the website.
3- How your project is the best way to help them achieve these things?  
Answer: There are other websites that provide the type of entertainment that childrendaze intend to offer. However, other websites focus are not based on only children experiences as this site is.

__User Stories:__   
  
| User Action        | Goal          |
| ------------- |:-------------:| 
| User wants to read nice things online during his school break  | to relief stress | 
| User wants to record a cool thing his daughter said     | To remember the cool things his daughter said while growing up      |  
| User wants to share with the world something cool that his little son said | to show off how cool is his son      |

  
__Link to wireframe:__     
- [Click here to see wireframe on PDF format. This should take you to the file stored on github repository](https://github.com/Gaberoids/ms1gf/blob/master/assets/readmeDocs/MS1MockUp_ChildrenDaze.pdf)

## Features
 
- ### Existing Features
    - Clickable buttons and links
    - Forms
    - Hamburger icon on mobile version 
    - Modal window
    - Responsive Grid system
    - Color effect on social media icons on the footer
    - Jumbotron
    - Animation on thumb up icons on index.html
    - icons and background image

- ### Features Left to Implement
    - Ability to register and login.
    - User profile page.
    - Ability to user to share his stories.
    - ability to comment and like posts.
    - in the index.html page, to add a section for add on the right side of the page as the wireframe shows.

## Technologies Used

[Bootstrap](https://getbootstrap.com/docs/4.0/utilities/display/) 
    - The navigation bar and footer and login/register portions of the website were built with a template from **bootstrap** to speed up development. However, the template's layout and theme have been modified from its original version to blend those functionalities with the rest of the site.   
    The homepage.html, charity.html, and about.html page's content/body section were built from scratch by me using HTML/CSS/Bootstrap.

[Fontawesome](https://fontawesome.com/)
    - **Fontawesome** was used to style the fonts of the project.

[Viewport](https://www.w3schools.com/css/css_rwd_viewport.asp) 
    - Meta name **viewport** was also added in order to make the site responsive to different sizes of screen.
a <link> was added to the site to make the site able to run JavaScript (thumbs up functionality required it.)
  
  [JQuery](https://jquery.com) and [Javascript](https://www.javascript.com/) - The project uses **JQuery and javascript** to make features responsive to customer's actions (thumbs up functionality required it).


## Testing

Automated tests were not performed.

1. Navigation bar:
    1. Go to the "Homapage" page
    2. Click on all links and buttons to see if they work and take the user to the pages they meant to go.
    3. Change the size of the screen to make sure that the navbar is presentable
    4. Click the links and button again in different size of screens to verify they still work (mainly when hamburger icon shows).

2. Content section of homepage:
    1. Go to the "Homepage" page
    2. Make sure that the content is readable and properly laid out.
    3. Click the "thumbs" to make sure that they work well in terms of functionality and effects.
    4. Change sizes of the screens to make sure that the site is still presentable and functional on those sizes.

3. Content section of other pages:
    1. Go to the "homepage" page and click on the link "Charity" from the navigation bar.
    2. Make sure that the content is presentable in all sizes of screens and that the button work.
    3. Click on the link "About Us" from the navigation bar.
    4. Make sure the content of the page is presentable in all sizes of screen.
    5. Make sure that the text box are working on all sizes of the screen by typing text in them to make the digits shows there.

    (*CLARIFICATION NOTE: Testing screen size means -> by increasing and decreasing the browser window and using developer tools to test site on mobile view.*)


**The pages in this website will be more simple in the mobile view compared to desktop view. For example:**
- links in the menu navigator will be replaced by the hamburger icon.
- The footer portion related to social media, will present only the icons (no text "Social Media").
- Content body sections were made with grid system bootstrap, which mean that, in mobile view or small screens, the column will be presented on top of each other as rows.

**Bugs:**  
The project had its challenges, but I was not able to identify bugs. Except for the two following bugs:
- The browser when on a range of 450px-525px width, did not recognize the properties inside of CSS rule @media that included that width range. I redo the code using grid system and the issue got solved. My previous code that had the issue was built by me using the div and box system (without bootstrap grid system).
- I had an issue where the footer was shown in the middle of the page about.html. I checked the developer tool and found that the footer was that way because because <html> default dimentions. I was able to fix the issue by adding bootstrap fixed-bottom class to the footer.

## Deployment

Link to the github repository https://github.com/Gaberoids/ms1gf .

Link to the deployed site https://gaberoids.github.io/ms1gf/ .

Deplyed and development versions have no differences.

**Deployment steps:**
1. Go to the link https://github.com/Gaberoids/ms1gf .
2. Click the tab "Settings".
3. Under the section "HUB Pages" click the dropdown button under "Source" and select "Master Branch".
4. Go to under the "HUB Pages" section again, and click on the link. This link is the address to the deployed site.

**Clone Steps:**
1. Go to the link https://github.com/Gaberoids/ms1gf .
2. Click the tab "Settings".
3. Under the section "HUB Pages" click the dropdown button under "Source" and select "Master Branch".
4. Go to under the "HUB Pages" section again, and click on the link. This link is the address to the deployed site.

**Cloning Repository steps:**
1. On GitHub, navigate to the main page of the repository.
2. Under the repository name, click Clone or download.
3. To clone the repository using HTTPS, under "Clone with HTTPS", click . To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click .
4. Open Terminal.
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL you copied earlier.
    - $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
7. Press Enter to create your local clone.
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

**Cloning a repository to GitHub Desktop steps:**
1. On GitHub.
2. Navigate to the main page of the repository.
3. Under the repository name, click Clone or download.
4. Clone or download button.
5. To clone your repository in GitHub Desktop, under "Clone with HTTPS", click Open in Desktop
6. Follow the prompts in GitHub Desktop to complete the clone.

## Credits
- My tutor at code academy Moosa. He helped me with directions on how to fix my bugs or how to improve the visual presentation of the site.

### Content
- The text for the section charity.html page was copied from the [American Childhood Cancer Organization](https://www.acco.org/donate/) site.

### Media
-  [Link to the picture source](https://unsplash.com/photos/yg1Zayn0Few)
     from picture used in the charity.html (national-cancer-institute-yg1Zayn0Few-unsplash.jpg).
-   [Link to picture source](https://unsplash.com/photos/4K2lIP0zc_k)
    picure used on the about.html page (childrendaze_about.jpg).


### Acknowledgements

I received inspiration for this project from [Codeacademy](https://courses.codeinstitute.net/).
- The modal functionality and the mobil hemburger buttons were built inspired on projects from the video classes from code institute (https://courses.codeinstitute.net/).
 

