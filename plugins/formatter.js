import Jsona from "jsona";

export default (context, inject) => {
  inject("formatter", new Jsona());
};
