// ==UserScript==
// @name     custom score
// @version  1
// @include  https://myanimelist.net/animelist/*
// @include  https://myanimelist.net/mangalist/*
// @grant    GM_addStyle
// @require     http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

var $ = jQuery;
$(function() {
    var public_score_column_header = $('<th class="table-header" width="75" align="center">Public score</th>');
    $('.table_header:nth-child(3)').before(public_score_column_header);

    // add empty column
    $('.td1:nth-child(3)').before('<td class="td1 public-score" width="75" align="center"></td>');
    $('.td2:nth-child(3)').before('<td class="td2 public-score" width="75" align="center"></td>');

    // wait 3s before starting to populate everything td1
    setTimeout(function(){
        $('#list_surround .td1.public-score').each(function(){ var cell = $(this); var url = cell.siblings('.td1').find('.animetitle').attr('href'); $.get( url, function( data ) { var score = $(data).find(".score").text().trim(); cell.html('<a href="#" class="link">'+score+'</a>'); }); });
    }, 3000);

    // wait 3s before starting to populate everything td2
    setTimeout(function(){
        $('#list_surround .td2.public-score').each(function(){ var cell = $(this); var url = cell.siblings('.td2').find('.animetitle').attr('href'); $.get( url, function( data ) { var score = $(data).find(".score").text().trim(); cell.html('<a href="#" class="link">'+score+'</a>'); }); });
    }, 3000);
});
