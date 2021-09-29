function displaySpecs(dropMenu,withFrame,mattressCodeDetail,frameCodeDetail,dimentionDetail) {
    if (dropMenu == 'king-size') {
        mattressCodeDetail.html('Soft CMK-ST01S <br> Firm CMK-ST01F');
        if (withFrame == true) {
            frameCodeDetail.html('CFK-S01FG');
            dimentionDetail.html('1830 x 2240 x 1060 mm');
        } else {
            frameCodeDetail.html('N/A');
            dimentionDetail.html('1830 x 1900 x 330 mm');


        }


    } else if (dropMenu == 'queen-size') {
        mattressCodeDetail.html('Soft CMQ-ST01S <br> Firm CMQ-ST01F');
        if (withFrame == true) {
            frameCodeDetail.html('CFQ-S01FG');
            dimentionDetail.html('1525 x 2240 x 1060 mm');
        } else {
            frameCodeDetail.html('N/A');
            dimentionDetail.html('1520 x 1900 x 300 mm');

        }

    } else if (dropMenu == 'single-size') {
        mattressCodeDetail.html('Soft CMSS-ST01S  <br> Firm CMSS-ST01F');
        if (withFrame == true) {
            frameCodeDetail.html('CFSS-S01FG');
            dimentionDetail.html('1070 x 2120 x 1100 mm');
        } else {
            frameCodeDetail.html('N/A');
            dimentionDetail.html('1070 x 1900 x 300 mm');
        }

    }


    if (withFrame === true) {
        $('.' + dropMenu + '.withFrame').show();
        $('.' + dropMenu + '.noFrame').hide();
    } else {
        $('.' + dropMenu + '.withFrame').hide();
        $('.' + dropMenu + '.noFrame').show();
    }
}
$("#mattress_menu2, #widthFrameToggle2").change(function() {
    var dropMenu = $("select#mattress_menu2").children("option:selected").val();
    var withFrame = $('#widthFrameToggle2').prop('checked');
    $('.col-spify').hide();
    $('.' + dropMenu).show();
    mattressCodeDetail = $('#mattressCodeDetail2');
    frameCodeDetail = $('#frameCodeDetail2');
    dimentionDetail = $('#dimentionDetail2');
    //widthFrameToggle = $('#widthFrameToggle');
    displaySpecs(dropMenu,withFrame,mattressCodeDetail,frameCodeDetail,dimentionDetail)

});

$("#mattress_menu, #widthFrameToggle").change(function() {
    var dropMenu = $("select#mattress_menu").children("option:selected").val();
    var withFrame = $('#widthFrameToggle').prop('checked');
    $('.col-spify').hide();
    $('.' + dropMenu).show();
    mattressCodeDetail = $('#mattressCodeDetail');
    frameCodeDetail = $('#frameCodeDetail');
    dimentionDetail = $('#dimentionDetail');

    //widthFrameToggle = $('#widthFrameToggle');
    displaySpecs(dropMenu,withFrame,mattressCodeDetail,frameCodeDetail,dimentionDetail)

});