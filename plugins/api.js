import Api from '../services/api/Api'

export default (context, inject) => {
  inject('api', new Api(context))
}
