$(document).ready(function(){
    $('.submit-action').on('click', '#formSubmit', function(){
        // console.log(e);

        var inputDetails = [];
        // var name = $('#formName').val();
        // inputDetails.push(name);
        // console.log(inputDetails);
        $( "input" ).each(function( index ) {
            inputDetails.push( $(this).val() );
        });
        tbodyPart(inputDetails);
    });

    function tbodyPart(abc){
        // console.log(abc);
        var tbodySection = "<tr><td>";
        for(let i = 0; i < abc.length; i++){
            tbodySection+= abc[i] + "</td><td>";    
        }
        tbodySection+= "<button class=\"editRow\">" +
                            "<i class=\"fa fa-pencil\"></i>" +
                        "</button>" +
                        " <button class=\"deleteRow\">" + 
                            "<i class=\"fa fa-trash\"></i>" + 
                        "</button></td></tr>"
        // console.log(tbodySection);
        $('.crudTable table tbody').append(tbodySection);
        $( "input" ).each(function( ) {
            $(this).val("");
        });
    }


    function editDetails(){
        console.log($(this));
    }

    $('.crudTable').on('click', '.editRow', function(){
        var editStuff = $(this).closest('tr').find('td');
        // console.log(editStuff);
        var editGrabedDetails = [];
        $(editStuff).each(function() {
            // debugger;
            // console.log($(this).text());
            editGrabedDetails.push($(this).html());

        });
        console.log(editGrabedDetails);
        $('input#formName').val(editGrabedDetails[0]);
        $('input#formPhone').val(editGrabedDetails[1]);
        $('input#formPlace').val(editGrabedDetails[2]);
        $('input#formAge').val(editGrabedDetails[3]);
        $('input#formHeight').val(editGrabedDetails[4]);
        $('input#formWeight').val(editGrabedDetails[5]);
        $('input#formESign').val(editGrabedDetails[6]);
    });
    $('.crudTable').on('click', '.deleteRow', function(){
        //deleteDetails();
        console.log($(this));
        $(this).parents('tr').remove();
    });
});
