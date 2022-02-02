class FollowToggle {
  contructor(el) {
    this.userId = el['data-user-id'];
    this.followState = el['data-initial-follow-state'];
    this.el = $(el); // 'store a jQuery wrapped el as an instance variable'
    this.render();  // test later

  }

  render() {
    if (this.followState === "unfollowed") {
      $('<button class="follow-toggle">Follow!</li>');
    } else {
      $('<button class="follow-toggle">Unfollow!</li>');
    }
  }

  handleClick() {
    // e.prevent def
    $.ajax({
      method: 'POST',
      url: '/users/:id/follow',
      data: { id: `${current_user.id}` }  // 
    })
  }

}

module.exports = FollowToggle;


// let el = document.querySelectorAll('class="follow-toggle"');