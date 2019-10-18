export const get = function (url, data) {
  return new Promise((res, rej) => {
    jQuery.ajax({
      url,
      method: 'get',
      data,
      error: err => rej(err),
      success: data => res(data)
    });
  });
};

export function post(url, data) {
  return new Promise((res, rej) => {
    jQuery.ajax({
      url: url,
      method: 'post',
      data: data,
      error: err => rej(err),
      success: data => res(data)
    });
  })
}
