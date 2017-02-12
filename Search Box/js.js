

$(document).ready(function(){

  $("#searchImg").click(disappearAnimation);

})
/*Start of code to make default text swap back and forth when user clicks the field

function fieldActive(){
  var searchBar = document.getElementById("searchBar");
  if(searchBar.value=="Search Wikipedia"){
    searchBar.value="";
    searchBar.placeholder="Search Wikipedia";
  }
  if($("#searchBtnSix").length==0){
    $("#BtnSix").append("<input type='submit' id='searchBtnSix' value='Go!' />");
  }
}
*/

function fieldInactive(){
  $("#searchBtnSix").remove();
}

function toSearchBox(){
  $("#Container").append("<form id='BtnSeven' method='post'></form>");
  if($("BtnSeven")){
    $("#BtnSeven").append('<input type="submit" id="searchBtnSeven" value="" />');//<input type="text" id="searchBarSeven" value="" maxlength="50" onmousedown="" onblur="" autocomplete="on" placeholder="" />
    }
  }
function addSearchBox(/*callback*/){
  if($("BtnSeven")){
    $("#BtnSeven").prepend('<input type="text" class="searchBarSevenClass" id="searchBarSeven" value="" maxlength="50" onmousedown="" onblur="" autocomplete="on" placeholder="" />');
    //callback();
    $("#searchBarSeven").focus();
    $(".searchBarSevenClass").addClass("searchBarSevenExtend");
  }
}
//race issue I think with adding the extension class
function disappearAnimation(){
  $(this).addClass("imgAnimate");
  $(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(){
    toSearchBox();
    $(this).remove();
    addSearchBox()
    //$("#searchBarSeven").toggleClass("searchBarSevenExtend");


  })
}
