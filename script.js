


let data = [
    {
        id: 1,
        imageUrl: 'https://images.pexels.com/photos/551600/pexels-photo-551600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'slide title 1',
        url: 'https://www.pexels.com/'
    },
    {
        id: 2,
        imageUrl: 'https://images.pexels.com/photos/827993/pexels-photo-827993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'slide title 2',
        url: 'https://www.pexels.com/'
    },
    {
        id: 3,
        imageUrl: 'https://images.pexels.com/photos/551593/pexels-photo-551593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'slide title 3',
        url: 'https://www.pexels.com/'
    },
    {
        id: 4,
        imageUrl: 'https://images.pexels.com/photos/57449/portrait-child-hands-57449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'slide title 4',
        url: 'https://www.pexels.com/'
    },
    {
        id: 5,
        imageUrl: 'https://images.pexels.com/photos/48794/boy-walking-teddy-bear-child-48794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'slide title 5',
        url: 'https://www.pexels.com/'
    }
];

let arrowLeft = document.getElementById ('arrow-left');
let arrowRight = document.getElementById ('arrow-right');
let sliderContainer = document.getElementById ('slider');
let dotsList = document.getElementsByClassName ('dot');

let sliderIndex = 0;

function createATag (item) {
    let aTag = document.createElement('a');
    aTag.setAttribute('href', item.url);
    aTag.classList.add('slider-a');

    return aTag;
}

function createImgTag(item) {
    // let imgTag = document.body.style.backgroundImage = 'url(' + item.imageUrl + ')';
    sliderContainer.style.backgroundImage = 'url('+ item.imageUrl +')';
    sliderContainer.style.backgroundRepeat = "no-repeat";
    sliderContainer.style.backgroundSize = "cover";
}


function createH2Tag (item) {
    let h2Tag = document.createElement('a');
    h2Tag.setAttribute.href = item.url;
    h2Tag.classList.add('slider-title');
    h2Tag.append(item.title);

    return h2Tag;
}

function createDots() {
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach((element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id - 1);

        dot.onclick = (event) => {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlider();
        }
        dots.appendChild(dot);
    })
    return dots;
}

function setSlider() {
    sliderContainer.innerText = '';
    createImgTag(data[sliderIndex]);
    let sliderItem = createATag (data[sliderIndex]);
    let title = createH2Tag (data[sliderIndex]);
    let dots = createDots();
    sliderItem.appendChild(title);
    // sliderItem.appendChild(h2Tag);
    sliderContainer.appendChild(sliderItem);
    sliderContainer.appendChild(dots);
    currentDotActive();
}

function currentDotActive () {
    dotsList[sliderIndex].classList.add('active')
}

function arrowLeftClick () {
    if (sliderIndex == 0) {
        sliderIndex = data.length;
     }
    sliderIndex--;
    setSlider();
}

function arrowRightClick () {   
    if(sliderIndex == data.length-1) {
        sliderIndex = -1;
    }
    sliderIndex++;
    setSlider();
}

arrowLeft.addEventListener('click', arrowLeftClick)
arrowRight.addEventListener('click', arrowRightClick)


document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
        arrowLeftClick();
    } else if (event.keyCode == 39) {
        arrowRightClick();
    }
})


setInterval( () => {
    arrowRightClick ();
}, 3500);

setSlider();