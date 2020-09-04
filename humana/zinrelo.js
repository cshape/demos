let availablePoints = "unknown... maybe you aren't logged in or haven't signed up yet.";
let pendingPoints = "unknown... maybe you aren't logged in or haven't signed up yet.";

zrl_mi.get_loyalty_user_info()

window.zrlmi_loyalty_user_info_success_handler = function(data){
    availablePoints = data.available_points.toString();
    pendingPoints = data.pending_points.toString();
}