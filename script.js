$(document).ready(function(){
    $("#show1").click(function(){
        $("#hidden1").show();
        $("#hidden2").hide();
        $("#hidden3").hide();
        $("#hidden4").hide();
    });
    $("#show2").click(function(){
        $("#hidden2").show();
        $("#hidden1").hide();
        $("#hidden3").hide();
        $("#hidden4").hide();
    });
    $("#show3").click(function(){
        $("#hidden3").show();
        $("#hidden1").hide();
        $("#hidden2").hide();
        $("#hidden4").hide();
    });
    $("#show4").click(function(){
        $("#hidden4").show();
        $("#hidden1").hide();
        $("#hidden2").hide();
        $("#hidden3").hide();
    });
});

$(document).ready(function(){
    $("#show2").click(function(){
    $("#show2").addClass("btn btn-dark");
    $("#show1").removeClass("btn btn-dark");
    $("#show1").addClass("btn btn-light");
    $("#show3").removeClass("btn btn-dark");
    $("#show3").addClass("btn btn-light");
    $("#show4").removeClass("btn btn-dark");
    $("#show4").addClass("btn btn-light");
    });
});

$(document).ready(function(){
    $("#show1").click(function(){
    $("#show1").addClass("btn btn-dark");
    $("#show2").removeClass("btn btn-dark");
    $("#show2").addClass("btn btn-light");
    $("#show3").removeClass("btn btn-dark");
    $("#show3").addClass("btn btn-light");
    $("#show4").removeClass("btn btn-dark");
    $("#show4").addClass("btn btn-light");
    });
});

$(document).ready(function(){
    $("#show3").click(function(){
    $("#show3").addClass("btn btn-dark");
    $("#show1").removeClass("btn btn-dark");
    $("#show1").addClass("btn btn-light");
    $("#show2").removeClass("btn btn-dark");
    $("#show2").addClass("btn btn-light");
    $("#show4").removeClass("btn btn-dark");
    $("#show4").addClass("btn btn-light");
    });
});

$(document).ready(function(){
    $("#show4").click(function(){
    $("#show4").addClass("btn btn-dark");
    $("#show1").removeClass("btn btn-dark");
    $("#show1").addClass("btn btn-light");
    $("#show3").removeClass("btn btn-dark");
    $("#show3").addClass("btn btn-light");
    $("#show2").removeClass("btn btn-dark");
    $("#show2").addClass("btn btn-light");
    });
});


