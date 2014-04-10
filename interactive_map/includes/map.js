/**
 * Created by russjr on 4/10/14.
 */

$(document).ready(function(){
    $('#mapForm').change(function(){

        var selectedContinent = $('#mapForm option:selected').val();

        if(selectedContinent == 'ALL'){
            $('a.dot').show(1000);
        }else{
            $('a.dot[continent*="'+selectedContinent+'"]').show(1000);
            $('a.dot[continent!="'+selectedContinent+'"]').hide(1000);

        }
    });






});
