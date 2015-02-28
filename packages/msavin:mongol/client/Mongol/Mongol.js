Template.Mongol.helpers({
  'Mongol_enabled': function () {
    var MongolConfig = Session.get("Mongol_settings_display");
    return MongolConfig;
  },
  Mongol_collections: function () {
    var MongolConfig = Session.get("Mongol");
    return MongolConfig && _.without(MongolConfig.collections, null) || [];
  },
  active: function () {
    var MongolCollection = Session.get("Mongol_currentCollection");
    if (MongolCollection) {
      return ((Session.get("Mongol_fullscreen")) ? "Mongol_fullscreen " : "") + "Mongol_expand";
    }
  }
});
