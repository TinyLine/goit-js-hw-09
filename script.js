var item = document.querySelector(".item");
 

  box.onmousedown = function(evt) {
    item.style.position = 'absolute';
      item.style.left = evt.clientX - 20 + 'px';
    item.style.top = evt.clientY - 20 + 'px';
    
 }
 
 debonce.addEventListener();
 

const debonce = _.debounce(box, 1000);


