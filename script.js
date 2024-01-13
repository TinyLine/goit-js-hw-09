var item = document.querySelector(".item");
 

  box.onmousedown = function(evt) {
    item.style.position = 'absolute';
      item.style.left = evt.clientX - 20 + 'px';
    item.style.top = evt.clientY - 20 + 'px';
    
 }
 
 const dbaonce = _.debounce()
