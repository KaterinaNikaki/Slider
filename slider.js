// Array of slides. Each slide is an object with properties and values.
const arrSlides = [{
        img_url: 'images/nature-1.jpg',
        duration: 40,
        title: {
            text: 'WILD WILD LANDSCAPE',
            color: 'black',
            bgcolor: 'darkorange',
            halign: 'left',
            valign: 'top',
            fontsize: '40px',
            entry: 'fadein',
            entrydelay: 2
        },
        entry: {
            fx: 'toright',
            duration: 2,
        }
    },
    {
        img_url: 'images/nature-2.jpg',
        duration: 30,
        title: {
            text: 'A WALK IN THE FOREST',
            color: 'blue',
            bgcolor: 'grey',
            halign: 'center',
            valign: 'middle',
            fontsize: '30px',
            entry: 'fadein',
            entrydelay: 1.5
        },
        entry: {
            fx: 'fadein',
            duration: 1.5,
        }
    },
    {
        img_url: 'images/nature-3.jpg',
        duration: 40,
        title: {
            text: 'BEAUTY AND RELAXATION',
            color: 'purple',
            bgcolor: 'white',
            halign: 'right',
            valign: 'bottom',
            fontsize: '50px',
            entry: 'fadein',
            entrydelay: 2
        },
        entry: {
            fx: 'toleft',
            duration: 2,
        }
    },
    {
        img_url: 'images/nature-4.jpg',
        duration: 120,
        title: {
            text: 'ALL SHADES OF GREEN',
            color: 'orange',
            bgcolor: 'black',
            halign: 'left',
            valign: 'middle',
            fontsize: '30px',
            entry: 'fadein',
            entrydelay: 6
        },
        entry: {
            fx: 'tobottom',
            duration: 2.5,
        }
    },
    {
        img_url: 'images/nature-5.jpg',
        duration: 60,
        title: {
            text: 'DREAM DESTINATION',
            color: 'black',
            bgcolor: 'lightblue',
            halign: 'right',
            valign: 'middle',
            fontsize: '25px',
            entry: 'fadein',
            entrydelay: 3
        },
        entry: {
            fx: 'totop',
            duration: 3,
        }
    },
    {
        img_url: 'images/nature-6.jpg',
        duration: 70,
        title: {
            text: 'IT\'S SPRINGTIME',
            color: 'darkgreen',
            bgcolor: 'pink',
            halign: 'center',
            valign: 'top',
            fontsize: '35px',
            entry: 'fadein',
            entrydelay: 3.5
        },
        entry: {
            fx: 'tobottom',
            duration: 3.5,
        }
    },
];

function Slider(elementId, configObject) {

    // Grab the element with the specified id in the html and put it in a variable 
    const slideShow = document.getElementById(elementId);

    // Create the html dynamically by adding a div and a span for each slide of the array inside the div with the specified id 
    for (i = 0; i < configObject.length; i++) {
        slideShow.innerHTML += `<div><span>${configObject[i].title.text}</span></div>`;
    };

    // Grab all the span elements and put it in a variable
    let titles = document.querySelectorAll('span');

    // Grab all the div elements that are childrens of the element with id 'slider-container'
    let slides = document.querySelectorAll('#slider-container div');

    // Targeting the CSS properties of the elements in html by assigning the values of the slides of the array          
    for (i = 0; i < slides.length; i++) {
        slides[i].style.backgroundImage = `url('${configObject[i].img_url}')`;
        slides[i].style.WebkitAnimationName = configObject[i].entry.fx;
        slides[i].style.animationName = configObject[i].entry.fx;
        slides[i].style.WebkitAnimationDuration = configObject[i].entry.duration + 's';
        slides[i].style.animationDuration = configObject[i].entry.duration + 's';
        titles[i].style.color = configObject[i].title.color;
        titles[i].style.backgroundColor = configObject[i].title.bgcolor;
        slides[i].style.textAlign = configObject[i].title.halign;
        titles[i].style.verticalAlign = configObject[i].title.valign;
        titles[i].style.fontSize = configObject[i].title.fontsize;
        titles[i].style.WebkitAnimationName = configObject[i].title.entry;
        titles[i].style.animationName = configObject[i].title.entry;
        titles[i].style.WebkitAnimationDelay = configObject[i].title.entrydelay + 's';
        titles[i].style.animationDelay = configObject[i].title.entrydelay + 's';
    }

    let slideIndex = 0;

    function startSlideshow() {

        // The slideshow starts by showing the first image
        slides[slideIndex].style.display = 'block';

        setTimeout(animation, configObject[slideIndex].entry.duration * 1000);

        function animation() {

            if (slideIndex === slides.length - 1) {
                slides[slideIndex - 1].style.display = 'none';
            } else if (slideIndex === 0) {
                slides[slides.length - 1].style.display = 'none';
            }

            slideIndex++;

            if (slideIndex > slides.length - 1) {
                slideIndex = 0;
                slides[slideIndex].style.zIndex = '1';
            } else if (slideIndex === 1) {
                slides[slideIndex - 1].style.zIndex = '0';
                slides[slideIndex].display = 'block';
            } else {
                slides[slideIndex - 2].style.display = 'none';
            }
        }
        setTimeout(startSlideshow, configObject[slideIndex].duration * 100);
    }

    startSlideshow();
};

Slider('slider-container', arrSlides);