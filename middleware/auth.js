import cookies from 'js-cookie'
import axios from 'axios'

export default async function ({
  store,
  redirect
}) {
  if (!store.state.token) {
    const savedToken = cookies.get('x-access-token')
    if (savedToken && savedToken.length && savedToken !== 'undefined') {
      store.dispatch('getTokenFromCookie', savedToken)
    } else {
      return redirect('/')
    }
  }

  // const permissions = await axios
  //   .get('http://atlas-rebuild-api.mtcdevsite.com/api/v1/me?include=permissions', {
  //     headers: {
  //       Authorization: `Bearer ${store.getters.getToken}`,
  //       Accept: 'application/vnd.api+json',
  //       'Content-Type': 'application/vnd.api+json'
  //     }
  //   })
  //   .then(d => d.data.included)
  // if (permissions !== undefined) {
  //   const permNames = permissions.map(p => p.attributes.name)
  //   store.dispatch('fetchUserPermissions', permNames)
  // }
}
