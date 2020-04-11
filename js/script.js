//'use strict'

var testimonials = [
    
    {
        name:'liza',
        p: 'this was a very good experience , you have to came and visit this resturant',
        img:'images/pic01.jpg',
        rating: 4
    },
    {
        name:'berona',
        p: 'good experience , you have to came and visit this resturant',
        img:'images/pic02.jpg',
        rating: 3.5
    },
    {
        name:'andrea',
        p: 'this was a very ',
        img:'images/pic03.jpg',
        rating: 5
    }
    
];
var rating = document.querySelectorAll('.rating');
var firstClassDivs = document.querySelectorAll('.rating > div');
var secondClassDivs = document.querySelectorAll('.rating > div > div');
var font = document.querySelectorAll('.rating > div > i');
var img = document.querySelector('img');
var h4 = document.querySelector('.testimonials > h4');
var p = document.querySelector('.testimonials > p');

function mouseover(index){
        if(index == 0){
            for(var i = 0; i < font.length;i++){
                font[i].className = "far fa-star"
            }
        }
        else if(index%1 == 0){
           for(var i = 0; i < index; i++){
               font[i].className = "fas fa-star";
           }
       }else{
           for(var i = 0; i < Math.floor(index); i++){
              font[i].className = "fas fa-star";
           }
           font[Math.floor(index)].className ='fas fa-star-half-alt';
       }
};

function showobject(index){
    img.src = testimonials[index].img;
    h4.textContent = testimonials[index].name;
    p.textContent = testimonials[index].p;
    mouseover(testimonials[index].rating);

}


showobject(0);
left.addEventListener('click',function(){
    mouseover(0);
    var index = 0;
    var object ;
    for(var i = 0; i < testimonials.length; i++){
        if(testimonials[i].name == h4.textContent){
            index = i
        }
    }
    index--;
    if(index == -1){
        index = 2
    }
    showobject(index)  
})

right.addEventListener('click',function(){
    mouseover(0);
    var index = 0;
    var object ;
    for(var i = 0; i < testimonials.length; i++){
        if(testimonials[i].name == h4.textContent){
            index = i
        }
    }
    index++;
    if(index == 3){
        index = 0
    }
    showobject(index);
})