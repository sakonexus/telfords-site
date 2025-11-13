export const cookies = {
  // Get a cookie by name
  get: function (name) {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
    return match ? decodeURIComponent(match[2]) : null;
  },

  // Set a cookie
  set: function (name, value, days = 7, path = '/') {
    if (typeof document === 'undefined') return;
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie =
      name +
      '=' +
      encodeURIComponent(value) +
      ';expires=' +
      expires.toUTCString() +
      ';path=' +
      path;
  },

  // Delete a cookie
  remove: function (name, path = '/') {
    if (typeof document === 'undefined') return;
    document.cookie =
      name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=' + path;
  },
};
