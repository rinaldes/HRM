<% params[:check].each do |x| %>
	$("#data_<%= x %>").remove();
<% end %>
$("#confirm_modal").modal('toggle');
location.reload()