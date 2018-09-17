"use strict";
  (function (){
    function openModal(imgSrc) {
    const modal = document.getElementById('myModal');
    modal.style.display = "flex ";
    const img = modal.getElementsByTagName('img')[0];
    img.src = imgSrc;
    document.getElementById('closeModalBtn').addEventListener('click', function(){
      modal.style.display = "none";
    }, { once: true});

  }

  const galeryList = [
    { id: 'gallery1', preview: 'images/photos/small-fotos/small-img1.png', src: 'images/photos/big-fotos/big-img1.png'},
    { id: 'gallery2', preview: 'images/photos/small-fotos/small-img2.png', src: 'images/photos/big-fotos/big-img2.png'},
    { id: 'gallery3', preview: 'images/photos/small-fotos/small-img3.png', src: 'images/photos/big-fotos/big-img3.png'},
    { id: 'gallery4', preview: 'images/photos/small-fotos/small-img4.png', src: 'images/photos/big-fotos/big-img4.png'},
    { id: 'gallery5', preview: 'images/photos/small-fotos/small-img5.png', src: 'images/photos/big-fotos/big-img5.png'},
    { id: 'gallery6', preview: 'images/photos/small-fotos/small-img6.png', src: 'images/photos/big-fotos/big-img6.png'},
    { id: 'gallery7', preview: 'images/photos/small-fotos/small-img7.png', src: 'images/photos/big-fotos/big-img7.png'},
    { id: 'gallery8', preview: 'images/photos/small-fotos/small-img8.png', src: 'images/photos/big-fotos/big-img8.png'},
    { id: 'gallery9', preview: 'images/photos/small-fotos/small-img9.png', src: 'images/photos/big-fotos/big-img9.png'},
    { id: 'gallery10', preview: 'images/photos/small-fotos/small-img10.png', src: 'images/photos/big-fotos/big-img10.png'},
    { id: 'gallery11', preview: 'images/photos/small-fotos/small-img11.png', src: 'images/photos/big-fotos/big-img11.png'},
    { id: 'gallery12', preview: 'images/photos/small-fotos/small-img12.png', src: 'images/photos/big-fotos/big-img12.png'},
  ];

  function renderGalleryList(wrapperSelector,list){
    const wrapper = document.getElementById(wrapperSelector);
    list.forEach(function(item){
      wrapper.appendChild(createGalleryItem(item));
    })
  }

  function createGalleryItem(options){
    const element = document.createElement('div');
    element.className = 'gallery-wrapper';
    const image = document.createElement('img');
    image.src = options.preview;
    element.appendChild(image);
    element.addEventListener('click', function(){
      openModal(options.src);
    });
    return element;
  }

  renderGalleryList('galleryList', galeryList);

})();