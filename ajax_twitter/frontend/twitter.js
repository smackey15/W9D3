const FollowToggle = require("./follow_toggle");

// document.addEventListener("DOMContentLoaded"), () => {
//     let el = document.querySelector('class="follow-toggle"');
//     const followToggle = new FollowToggle(el);
//     $("button.follow-toggle").each(function (index) { // if index is 1st el and DOM is 2nd el have we captured DOM?
//          followToggle();
//     })
// }

$(function () {
    $("button.follow-toggle").each(function (index, ele) { // if index is 1st el and DOM is 2nd el have we captured DOM?
        return new FollowToggle(ele)
    })
    window.FollowToggle = FollowToggle;
})