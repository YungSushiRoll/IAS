// $(document).ready(()=>{
//     $('#4115v').on('click', ()=>{
//         $('fieldset').hide();
//         $('#hiddenMsg').show();
//     });
// });
$(document).ready(function(){

    $('.featBtnAction').on('click', function(){

        if ($(this).text().includes("↓ PRODUCT")){
            console.log('were here');
            console.log($(this).text())
            $(this).html("&uarr; PRODUCT DETAILS &uarr;")
        } else {        
            console.log($(this).text())
            $(this).html("&darr; PRODUCT DETAILS &darr;")
        }
        
    })
    $('.advBtn').on('click', function(){

        if($(this).text().includes("↓")){
            $(this).html("&uarr; ADVANTAGES OVER 1-WAY &uarr;")
        } else {
            $(this).html("&darr; ADVANTAGES OVER 1-WAY &darr;")
        }
        
    })
});