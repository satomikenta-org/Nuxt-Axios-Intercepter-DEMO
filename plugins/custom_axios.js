export default function (context) {
  context.app.$axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      context.redirect('/login');
      return;
    }
    context.app.$toast.error(error);
  })
}