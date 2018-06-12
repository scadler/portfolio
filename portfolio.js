/* global $ */
$(document).ready(function (){
    $("#infoB").hide();
    $("#email").hide();
    $("#infoC").hide();
    $("#github").hide();
$("#infoA").click(function() {
    $("#infoB").toggle();
    $("#email").hide();
    $("#infoC").hide();
    $("#github").hide();
});
$("#contact").click(function() {
    $("#email").show();
    $("#infoB").hide();
    $("#infoC").hide();
    $("#github").hide();
});
$("#background").click(function() {
    $("#infoC").show();
    $("#infoB").hide();
    $("#email").hide();
    $("#github").hide();
});
$("#name").click(function() {
    $("#infoC").hide();
    $("#infoB").hide();
    $("#email").hide();
    $("#github").hide();
});
$("#username").click(function() {
    $("#github").show();
    $("#infoC").hide();
    $("#infoB").hide();
    $("#email").hide();
});
});
