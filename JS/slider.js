

const antCarousel = document.querySelector(".s3");
console.log(antCarousel);

const antCarouselHider = document.querySelector(".ant-carousel-hider");
console.log(antCarouselHider);

const antCarouselArrowLeft = document.querySelector(".ant-carousel-arrow-left");
console.log(antCarouselArrowLeft);

const antCarouselList = document.querySelector(".ant-carousel-list");
console.log(antCarouselList);

const antCarouselArrowRight = document.querySelector(".ant-carousel-arrow-right");
console.log(antCarouselArrowRight);

const antCarouselElementDots = document.querySelector(".ant-carousel-element-dots");
console.log(antCarouselElementDots);

"use strict";
const Ant=function(carouselId){
  let id = document.getElementById(carouselId);
  if(carouselId){
    this.carouselRoot=carouselId;
  } else {
    this.carouselroot=document.querySelector(".ant-carousel")
  }
  //все объекты нашего слайдера
  this.list=this.carouselRoot.querySelector(".ant-carousel-list");
  this.items=this.carouselRoot.querySelectorAll(".ant-carousel-element");
  this.firstItem= this.querySelector(".ant-carousel-elment");
  this.leftArrow= this.queryselector(".ant-carousel-arrow-left");
  this.rightArrow= this.querySelector(".ant-carousel-arrow-right");
  this.dots= tgis.querySelector(".ant-carousel-element-dots");
};

Ant.defaults={
  visibleItem: 1,
  loop: true,
  auto: true,
  interval: 2000,
  speed: 1500,
  touch: true,
  arrows: true,
  dots: true,
}
Ant.prototype.elementPrev=function(num){
    num=num || 1;

    if(this.options.dots) this.dotOn(this.currentEllement);
    this.currentElement-=num;
    if (this.currentelement<0) this.currentElement=this.visibleItem-1;
    if (this.optins.dots) this.dotOff(this.currntElement);

   if (this.options.loop) {
     this.currentOffset += this.elemwidth *num; 
     this.list.style.marginLift = this.currentOffset + "px";
     if(this.currentelement == 0); {
       this.arrow_left.style.display = "none";
       this.touchPrev=false;
     }
     this.right_arrow.style.display = "block";
     this.touchNext= true
    } else{
      let elem, buf, this$ = this;

      for (let i=0; i<num; i++) {
        //записываем ссылку на последний элемент списка в переменной elem
        elem=this.list.lastElementchild;
        // создаём глубокий (полный) клон последнего элемента списка
        buf=elem.cloneNode(true);
        // встраиваем склонированый ьпомледний элемнт списка в самое начало списка
        this.list.insertBefore(buf, this.list.firstElementChild);
        //удаляем последний элемент спика из которого делали клон
        elem.remove();
        
      }
      this.list.style.cssText = "trnsition:margin" + this.options.speed + "ms ease";
      this.list.style.marginLeft = "0px";
      setTimeout(() =>{
        this$.list.style.cssText = "transition:none";

      }, this.options.speed);
    }

}
Ant.prototype.elementNext=function(num){

}
