# Passport with GitHub

We've provided you with a simple Express app. You can "log in" with any username and password combo (there's no database). Now, add [GitHub login](https://github.com/jaredhanson/passport-github) (or any social login that you want!)

Since we're not using Mongoose, you'll need to change the code in this part of the example in the docs:
```js
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ githubId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
```
Instead, once you get the profile info back from Github, simply render a view that says "Welcome back, <%= user.username %>!" so that the user's Github username is displayed on your page.

## Bonus
- Save the Github user information (and access token) in an Express session so that when you refresh the page, the user's info is saved and their name still shows up.
- Read up on the [Github API](https://developer.github.com/v3/) and see what other cool information you can get from their API. Then create routes that will request that info from Github and show in in a view on your app!

## Resources

* [Passport Docs](http://passportjs.org/docs)

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
