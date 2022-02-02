class FollowToggle {  
  contructor(el) {
    this.userId = el['data-user-id'];
    this.followState = el['data-initial-follow-state']; 
    this.el = $(el) // 'store a jQuery wrapped el as an instance variable'

  }

}

module.exports = FollowToggle;


// let el = document.querySelectorAll('class="follow-toggle"');