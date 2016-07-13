# Passport with GitHub

We've provided you with a simple Express app. You can "log in" with any username and password combo (there's no database). Now, add [GitHub login](https://github.com/cfsghost/passport-github) (or any social login that you want!)

Since we're not using Mongoose, you'll need to change the code in:
```js
function(accessToken, refreshToken, profile, done) {
}
```
Return the GitHub username, with no error.

## Resources

* [Passport Docs](http://passportjs.org/docs)

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
