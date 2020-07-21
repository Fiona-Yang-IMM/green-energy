// Load your images on page-load
    function preloader() {
        const imagesPaths = [
           "img/hydroenergy.jpg",
           "img/solar-energy.jpg",
           "img/wind-energy.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }
        
        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
    
    
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
    
    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */

    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    const btns = document.querySelectorAll('.controls button');
    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). 
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */

    const refsAndData = {
        references: {
            btns: document.querySelectorAll('.controls button'),
            newContent: document.querySelector('.new-content')
        },
        data: {
            c1: `
                <figure>
                    <h2>Hydroenergy</h2>
                    <div class="content">
                        <img class="img-t" src="img/hydroenergy.jpg" alt="hydroenergy">
                        <p>Lorem ipsum dolor sit amett enim ad minim veniam, quis nostrud exercitation ullamco . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        .Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    <div>   
                </figure>
            `,
            c2: ` 
                <figure>
                    <h2>Wind Energy</h2>
                    <div class="content"> 
                        <img src="img/wind-energy.jpg" alt="windenergy">
                        <p>2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    <div>
                </figure>
            `,
            c3: ` 
                <figure>
                    <h2>Solar Energy</h2>
                    <div class="content"> 
                        <img src="img/solar-energy.jpg" alt="solarenergy">
                        <p>2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br> Sum dolor sit amet, consectetur adipiscing elit!
                        </p>
                    <div>
                </figure>
            `
        }
    };

    /* 
    Start your handleSelection function here. */ 
    function addContent(ev) {
        
        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */
  
        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
    
        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 
            
        let k = ev.target.value;         
        refsAndData.references.newContent.innerHTML = refsAndData.data[k];

        for (let btn of refsAndData.references.btns) {
                if (btn.hasAttribute('id')) {
                   btn.removeAttribute('id'); 
                }
            }
    
    /* 
    
    Close your handleSelection function here. */  
      ev.target.id = 'active';
    }
    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */  
    for (let btn of refsAndData.references.btns) {
        btn.addEventListener('click', addContent);
    }

    refsAndData.references.newContent.innerHTML = refsAndData.data["c1"];
