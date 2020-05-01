$('#button-new').show();
$('#data_<%= @history_of_organization.id %>').html("<%= j(render 'data', :history_of_organization => @history_of_organization) %>");
 $('#toolbar_history_of_organization').addClass("hide");
	  $('#button_edit_history_of_organization').addClass("hide");
	  $('#button_remove_history_of_organization').addClass("hide");
	  $(".child-box").each(function(){
  $(this).click(function() {
    section = $(this).attr("data-section")
    children = $(".child-" + section)
    // $(this).parent().parent().parent().toggleClass('row_selected')

    show_button($(this))
    
    selected_count = 0
    children.each(function(){ if ($(this).is(':checked')) { selected_count += 1 } })
    if (selected_count==children.length) {
      $(".parent-" + section).prop('checked', true)
    } else{
      $(".parent-" + section).prop('checked', false)
    };
  })
})