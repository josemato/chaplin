
define(['handlebars', 'lib/utils'], function(Handlebars, utils) {
  Handlebars.registerHelper('fb_img_url', function(fbId, type) {
    return new Handlebars.SafeString(utils.facebookImageURL(fbId, type));
  });
  return null;
});
