$(document).ready(function(){

    var xyz = Math.random().toString(36).substr(2, 9);
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
        console.log(xyz);
        var tbodySection = "<tr id=\"temp_"+xyz+"\"><td>";
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
        $('body .submit-action').addClass('edit');
        var editID = $(this).closest('tr').attr('id');
        // console.log(editId);
        $('#crudForm').addClass(editID);

        var editStuff = $(this).closest('tr').find('td');
        // console.log(editStuff);
        var editGrabedDetails = [];
        $(editStuff).each(function() {
            // debugger;
            console.log($(this).text());
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


        $('body').on('click', '#saveSubmit', function(){
            $('body .submit-action').removeClass('edit');
            
            var saveForm = $('#crudForm').attr('class');
            console.log(saveForm);
            if(saveForm == editID){
                var inputDetails = [];
                // var name = $('#formName').val();
                // inputDetails.push(name);
                // console.log(inputDetails);
                $( "input" ).each(function( index ) {
                    inputDetails.push( $(this).val() );
                });
                // console.log(inputDetails);
                var replaceStuff = $('#'+saveForm+' > td');
                $(replaceStuff[0]).text(inputDetails[0]);
                $(replaceStuff[1]).text(inputDetails[1]);
                $(replaceStuff[2]).text(inputDetails[2]);
                $(replaceStuff[3]).text(inputDetails[3]);
                $(replaceStuff[4]).text(inputDetails[4]);
                $(replaceStuff[5]).text(inputDetails[5]);
                $(replaceStuff[6]).text(inputDetails[6]);

                // var i = 0;
                // i < $(replaceStuff).length-1;
                // console.log($(replaceStuff).length-1);
                // $(replaceStuff).each(function(){
                //     console.log($(replaceStuff).text());
                //     $(replaceStuff).text(inputDetails[i]);
                //     i++;
                // });
                $( "input" ).each(function( ) {
                    $(this).val("");
                });
            }
    
        });
    
    });
    $('.crudTable').on('click', '.deleteRow', function(){
        //deleteDetails();
        console.log($(this));
        $(this).parents('tr').remove();
    });
});
