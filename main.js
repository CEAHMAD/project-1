
function rePlay(){
       location.reload();
    
}
 $("button").on('click', rePlay)


/** function Winner (){
    
    if( 
        ($('#b0').text() === 'x') && ($('#b1').text() === 'x') && ($('#b2').text() === 'x') ||
        ($('#b3').text() === 'x') && ($('#b4').text() === 'x') && ($('#b5').text() === 'x') ||
        ($('#b6').text() === 'x') && ($('#b7').text() === 'x') && ($('#b8').text() === 'x') ||
        ($('#b0').text() === 'x') && ($('#b3').text() === 'x') && ($('#b6').text() === 'x') ||
        ($('#b1').text() === 'x') && ($('#b4').text() === 'x') && ($('#b7').text() === 'x') ||
        ($('#b2').text() === 'x') && ($('#b5').text() === 'x') && ($('#b8').text() === 'x') ||
        ($('#b0').text() === 'x') && ($('#b4').text() === 'x') && ($('#b8').text() === 'x') ||
        ($('#b2').text() === 'x') && ($('#b4').text() === 'x') && ($('#b6').text() === 'x') 
        )  {
                                     
                                           $('#w').text('X Wins')
                                           stop() ;
                                                   
         } else if (
            ($('#b0').text() === 'o') && ($('#b1').text() === 'o') && ($('#b2').text() === 'o') ||
            ($('#b3').text() === 'o') && ($('#b4').text() === 'o') && ($('#b5').text() === 'o') ||
            ($('#b6').text() === 'o') && ($('#b7').text() === 'o') && ($('#b8').text() === 'o') ||
            ($('#b0').text() === 'o') && ($('#b3').text() === 'o') && ($('#b6').text() === 'o') ||
            ($('#b1').text() === 'o') && ($('#b4').text() === 'o') && ($('#b7').text() === 'o') ||
            ($('#b2').text() === 'o') && ($('#b5').text() === 'o') && ($('#b8').text() === 'o') ||
            ($('#b0').text() === 'o') && ($('#b4').text() === 'o') && ($('#b8').text() === 'o') ||
            ($('#b2').text() === 'o') && ($('#b4').text() === 'o') && ($('#b6').text() === 'o') 
        ){                           
                                             
                                            $('#w').text('O Wins')
                                            stop() ;
}          else if ( 
                 ($('#b0').text() !==  "") && ($('#b1').text() !==  "") && ($('#b2').text() !==  "") &&
                 ($('#b3').text() !==  "") && ($('#b4').text() !==  "") && ($('#b5').text() !==  "") &&
                 ($('#b6').text() !==  "") && ($('#b7').text() !==  "") && ($('#b8').text() !==  "") &&
                 ($('#b0').text() !==  "") && ($('#b3').text() !==  "") && ($('#b6').text() !==  "") &&
                 ($('#b1').text() !==  "") && ($('#b4').text() !==  "") && ($('#b7').text() !==  "") &&
                 ($('#b2').text() !==  "") && ($('#b5').text() !==  "") && ($('#b8').text() !==  "") &&
                 ($('#b0').text() !==  "") && ($('#b4').text() !==  "") && ($('#b8').text() !==  "") &&
                 ($('#b2').text() !==  "") && ($('#b4').text() !==  "") && ($('#b6').text() !==  "") )
    { 
                                               $('#w').text('TIE')                                  
    }       
}*/

var TURN = 1 ;
function onClick(event) {                 
    if (TURN===1){
        $(event.target).text('x')
        TURN = TURN+1  
        AI();
        
    } 
    else {
        $(event.target).text('x')
        TURN = TURN-1   
        AI();
    }
    $(event.target).off('click')
}
    $('.button').on('click', onClick) 

      function stop(){
         if ($('#w').text()===('X Wins') || $('#w').text()===('O Wins') || $('#w').text()===('TIE') ){

            $('.button').off('click')

         }
     } 


     function AI(){
        if (  
     $('#b0').text()==='x' && $('#b1').text()==='' && $('#b2').text()==='x') { $('#b1').text('o')} else if ($('#b0').text()==='x' && $('#b2').text===''&& $('#b1').text()==='x'){$('#b2').text('o')} else 
        if ( 
     $('#b0').text()==='x' && $('#b3').text()==='' && $('#b6').text()==='x') { $('#b3').text('o')} else if ($('#b0').text()==='x' && $('#b3').text==='x'){$('#b6').text('o')} else 
        if (
    $('#b0').text()==='x' && $('#b4').text()==='' && $('#b8').text()==='x') { $('#b4').text('o')} else if ($('#b0').text()==='x' && $('#b4').text==='x'){$('#b8').text('o')}
            else if ($('#b0').text()==='x'){$('#b4').text('o')}
    
    
    
     else if (  
        $('#b2').text()==='x' && $('#b1').text()==='x'&& $('#b0').text()==='o') { $('#b1').text('o')} else if ($('#b2').text()==='x' && $('#b0').text==='x'){$('#b0').text('o')} else 
           if ( 
        $('#b2').text()==='x' && $('#b5').text()==='') { $('#b5').text('o')} else if ($('#b2').text()==='x' && $('#b8').text===''){$('#b8').text('o')} else 
           if (
        $('#b2').text()==='x' && $('#b4').text()==='') { $('#b4').text('o')} else if ($('#b2').text()==='x' && $('#b8').text===''){$('#b8').text('o')}
        else if ($('#b2').text()==='x'){$('#b4').text('o')}
    
    
    
        else if (
         
                $('#b6').text()==='x' && $('#b3').text()==='') { $('#b3').text('o')} else if ($('#b6').text()==='x' && $('#b0').text===''){$('#b0').text('o')} else 
                   if ( 
                $('#b6').text()==='x' && $('#b7').text()==='') { $('#b7').text('o')} else if ($('#b6').text()==='x' && $('#b8').text===''){$('#b8').text('o')} else 
                   if (
                $('#b6').text()==='x' && $('#b4').text()==='') { $('#b4').text('o')} else if ($('#b6').text()==='x' && $('#b2').text===''){$('#b2').text('o')}
                else if ($('#b6').text()==='x'){$('#b4').text('o')}
    
                else if (  
                    $('#b8').text()==='x' && $('#b5').text()==='') { $('#b5').text('o')} else if ($('#b8').text()==='x' && $('#b2').text===''){$('#b2').text('o')} else 
                       if ( 
                    $('#b8').text()==='x' && $('#b7').text()==='') { $('#b7').text('o')} else if ($('#b8').text()==='x' && $('#b6').text===''){$('#b6').text('o')} else 
                       if (
                    $('#b8').text()==='x' && $('#b4').text()==='') { $('#b4').text('o')} else if ($('#b8').text()==='x' && $('#b0').text===''){$('#b0').text('o')}
                    else if ($('#b8').text()==='x'){$('#b4').text('o')}
    
    
                    else if (  
                        $('#b1').text()==='x' && $('#b0').text()==='') { $('#b0').text('o')} else if ($('#b1').text()==='x' && $('#b2').text===''){$('#b2').text('o')} else 
                           if ( 
                        $('#b1').text()==='x' && $('#b4').text()==='') { $('#b4').text('o')} else if ($('#b1').text()==='x' && $('#b7').text===''){$('#b7').text('o')}  
                           
        
    
                   else if (
                        $('#b3').text()==='x' && $('#b0').text()==='') { $('#b0').text('o')} else if ($('#b3').text()==='x' && $('#b6').text===''){$('#b6').text('o')} else 
                           if ( 
                        $('#b3').text()==='x' && $('#b4').text()==='') { $('#b4').text('o')} else if ($('#b3').text()==='x' && $('#b5').text===''){$('#b5').text('o')} 
        
    
        
                        else if (  
                            $('#b5').text()==='x' && $('#b8').text()==='') { $('#b8').text('o')} else if ($('#b5').text()==='x' && $('#b2').text===''){$('#b2').text('o')} else 
                               if ( 
                            $('#b5').text()==='x' && $('#b4').text()==='') { $('#b4').text('o')} else if ($('#b5').text()==='x' && $('#b3').text===''){$('#b3').text('o')}
    
            
            
                            else if (  
                                $('#b7').text()==='x' && $('#b8').text()==='') { $('#b8').text('o')} else if ($('#b7').text()==='x' && $('#b6').text===''){$('#b6').text('o')} else 
                                   if ( 
                                $('#b7').text()==='x' && $('#b4').text()==='') { $('#b4').text('o')} else if ($('#b7').text()==='x' && $('#b1').text===''){$('#b1').text('o')}
    
    
                                else if (  
                                    $('#b4').text()==='x' && $('#b5').text()==='') { $('#b5').text('o')} else if ($('#b4').text()==='x' && $('#b3').text===''){$('#b3').text('o')} else 
                                       if ( 
                                    $('#b4').text()==='x' && $('#b7').text()==='') { $('#b7').text('o')} else if ($('#b4').text()==='x' && $('#b1').text===''){$('#b1').text('o')} else 
                                       if (
                                    $('#b4').text()==='x' && $('#b2').text()==='') { $('#b2').text('o')} else if ($('#b4').text()==='x' && $('#b6').text===''){$('#b6').text('o')} else 
                                    if ( 
                                        $('#b4').text()==='x' && $('#b0').text()==='') { $('#b0').text('o')} else if ($('#b4').text()==='x' && $('#b8').text===''){$('#b8').text('o')}
    
    
                                       else if( 
            ($('#b0').text() === 'x') && ($('#b1').text() === 'x') && ($('#b2').text() === 'x') ||
            ($('#b3').text() === 'x') && ($('#b4').text() === 'x') && ($('#b5').text() === 'x') ||
            ($('#b6').text() === 'x') && ($('#b7').text() === 'x') && ($('#b8').text() === 'x') ||
            ($('#b0').text() === 'x') && ($('#b3').text() === 'x') && ($('#b6').text() === 'x') ||
            ($('#b1').text() === 'x') && ($('#b4').text() === 'x') && ($('#b7').text() === 'x') ||
            ($('#b2').text() === 'x') && ($('#b5').text() === 'x') && ($('#b8').text() === 'x') ||
            ($('#b0').text() === 'x') && ($('#b4').text() === 'x') && ($('#b8').text() === 'x') ||
            ($('#b2').text() === 'x') && ($('#b4').text() === 'x') && ($('#b6').text() === 'x') 
            )  {
                                         
                                               $('#w').text('X Wins')
                                               stop() ;
                                                       
             } else if (
                ($('#b0').text() === 'o') && ($('#b1').text() === 'o') && ($('#b2').text() === 'o') ||
                ($('#b3').text() === 'o') && ($('#b4').text() === 'o') && ($('#b5').text() === 'o') ||
                ($('#b6').text() === 'o') && ($('#b7').text() === 'o') && ($('#b8').text() === 'o') ||
                ($('#b0').text() === 'o') && ($('#b3').text() === 'o') && ($('#b6').text() === 'o') ||
                ($('#b1').text() === 'o') && ($('#b4').text() === 'o') && ($('#b7').text() === 'o') ||
                ($('#b2').text() === 'o') && ($('#b5').text() === 'o') && ($('#b8').text() === 'o') ||
                ($('#b0').text() === 'o') && ($('#b4').text() === 'o') && ($('#b8').text() === 'o') ||
                ($('#b2').text() === 'o') && ($('#b4').text() === 'o') && ($('#b6').text() === 'o') 
            ){                           
                                                 
                                                $('#w').text('O Wins')
                                                stop() ;
    }          else if ( 
                     ($('#b0').text() !==  "") && ($('#b1').text() !==  "") && ($('#b2').text() !==  "") &&
                     ($('#b3').text() !==  "") && ($('#b4').text() !==  "") && ($('#b5').text() !==  "") &&
                     ($('#b6').text() !==  "") && ($('#b7').text() !==  "") && ($('#b8').text() !==  "") &&
                     ($('#b0').text() !==  "") && ($('#b3').text() !==  "") && ($('#b6').text() !==  "") &&
                     ($('#b1').text() !==  "") && ($('#b4').text() !==  "") && ($('#b7').text() !==  "") &&
                     ($('#b2').text() !==  "") && ($('#b5').text() !==  "") && ($('#b8').text() !==  "") &&
                     ($('#b0').text() !==  "") && ($('#b4').text() !==  "") && ($('#b8').text() !==  "") &&
                     ($('#b2').text() !==  "") && ($('#b4').text() !==  "") && ($('#b6').text() !==  "") )
        { 
                                                   $('#w').text('TIE')  
            
    
        
        }
    }









































 


