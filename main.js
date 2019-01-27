
/**this function check all The possibilities of wins */
function win (){
    if( 
        ($('#b0').val() == 'x') && ($('#b1').val() == 'x') && ($('#b2').val() == 'x') ||
        ($('#b3').val() == 'x') && ($('#b4').val() == 'x') && ($('#b5').val() == 'x') ||
        ($('#b6').val() == 'x') && ($('#b7').val() == 'x') && ($('#b8').val() == 'x') ||
        ($('#b0').val() == 'x') && ($('#b3').val() == 'x') && ($('#b6').val() == 'x') ||
        ($('#b1').val() == 'x') && ($('#b4').val() == 'x') && ($('#b7').val() == 'x') ||
        ($('#b2').val() == 'x') && ($('#b5').val() == 'x') && ($('#b8').val() == 'x') ||
        ($('#b0').val() == 'x') && ($('#b4').val() == 'x') && ($('#b8').val() == 'x') ||
        ($('#b2').val() == 'x') && ($('#b4').val() == 'x') && ($('#b6').val() == 'x') 
        ) {

            alert 

        } else if (

            ($('#b0').val() == 'o') && ($('#b1').val() == 'o') && ($('#b2').val() == 'o') ||
            ($('#b3').val() == 'o') && ($('#b4').val() == 'o') && ($('#b5').val() == 'o') ||
            ($('#b6').val() == 'o') && ($('#b7').val() == 'o') && ($('#b8').val() == 'o') ||
            ($('#b0').val() == 'o') && ($('#b3').val() == 'o') && ($('#b6').val() == 'o') ||
            ($('#b1').val() == 'o') && ($('#b4').val() == 'o') && ($('#b7').val() == 'o') ||
            ($('#b2').val() == 'o') && ($('#b5').val() == 'o') && ($('#b8').val() == 'o') ||
            ($('#b0').val() == 'o') && ($('#b4').val() == 'o') && ($('#b8').val() == 'o') ||
            ($('#b2').val() == 'o') && ($('#b4').val() == 'o') && ($('#b6').val() == 'o') 

        ){
        alert 
}
} 


/** This function for usres click button and seitch between "X" and "O"  */
var TURN = 0 ; 
function onClick(event) {                 
    $(".button").off("click");
    if (TURN===0){
    $(event.target).text('X');
    TURN = TURN+1 ; 
    
    
    } 
    
    
    else {
        $(".button").off("click");
        $(event.target).text('O');
        TURN = TURN-1 ; }
        
        
        
}


    $('.button').on('click', onClick) 





/** Ubcomplate function to Replay the game  */
    function rePlay(){

        if ( 
            ($('#b0').val() !== "") && ($('#b1').val() !== "") && ($('#b2').val() !== "") &&
            ($('#b3').val() !== "") && ($('#b4').val() !== "") && ($('#b5').val() !== "") &&
            ($('#b6').val() !== "") && ($('#b7').val() !== "") && ($('#b8').val() !== "") &&
            ($('#b0').val() !== "") && ($('#b3').val() !== "") && ($('#b6').val() !== "") &&
            ($('#b1').val() !== "") && ($('#b4').val() !== "") && ($('#b7').val() !== "") &&
            ($('#b2').val() !== "") && ($('#b5').val() !== "") && ($('#b8').val() !== "") &&
            ($('#b0').val() !== "") && ($('#b4').val() !== "") && ($('#b8').val() !== "") &&
            ($('#b2').val() !== "") && ($('#b4').val() !== "") && ($('#b6').val() !== "") )
            
            { 
                alert("END");
            } 
        
                                
                }

    $("#rep").on('click', rePlay) 
   










































 


