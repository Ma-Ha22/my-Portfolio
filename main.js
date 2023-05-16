














// start window scroll
$('a[href^="#"]').click(function(e){
    let getHref=e.target.getAttribute('href');
    let sectionOffset = $(getHref).offset().top;
    $('html , body').animate({scrollTop : sectionOffset - 40}, 1000)
})
// end window scroll




// end testimonials part
let hightTop = $('#about').offset().top;
window.addEventListener('scroll',()=>{
    let scr = $(window).scrollTop();
    if(scr > hightTop -500){
        // document.getElementById('upBtn').style.display='block';
        $('#upBtn').fadeIn(500);
    }else{
        // document.getElementById('upBtn').style.display='none';
        $('#upBtn').fadeOut(500);
    }
});
// up button
$('#upBtn').click(function(){
    $('html , body').animate({scrollTop :0},1000) ;
});
// end up botton


// navbar






    var typed = new Typed('#element', {
    strings: ['Front-End developer','Angular'],
    typeSpeed: 50,
    backSpeed:50,
    loop: true ,
    });









    




















// let obj={
//     skills : ['html','css'],
//     print1: function(){
//         console.log(this.skills);
//     },
//     print2:function(){
//         return () => {
//             console.log(this.skills);
//         }
//     },
//     print3:function (){
//         return function(){
//             console.log(this.skills);
//         }
//     },
//     print4: ()=>{
//         console.log(this.skills);
//     },
// }
// console.log('helo')
// console.log(obj.print1());
// console.log(obj.print2());
// console.log(obj.print3());
// console.log(obj.print4());