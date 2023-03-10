"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  evt.preventDefault();
  hidePageComponents();
  putStoriesOnPage();
  $favoritesList.hide();
  checkForFavorites();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  evt.preventDefault();
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/** On click, opens the submission form */
function navSubmitClick(evt) {
  console.log("we clicked submit");
  evt.preventDefault();
  $storyForm.show();
}

$navSubmit.on("click", navSubmitClick);

/** shows favorited stories and hides main story list */
function navFavoritesClick(evt) {
  evt.preventDefault();
  console.log("nav favorites was clicked");
  hidePageComponents();
  putFavoritesOnPage();
  $favoritesList.show();
}

$navFavorite.on("click", navFavoritesClick);
