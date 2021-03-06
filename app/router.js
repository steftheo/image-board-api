import Router from 'candycane/dist/http/router';

export default class AppRouter extends Router {
  /**
   * Here is the function that will allow you to register the routes for your application.
   * Use the `resource`, `get`, `post`, `put`, and `delete` methods to describe your API
   *
   * @return undefined
   */
  registerRoutes() {
    this.get(`/`, `version`);
    this.get(`/images`, `images/index`);
    this.post(`/images`, `images/create`);
    this.get(`/images/:id`, `images/find`);
    this.put(`/images/:id`, `images/update`);
    this.patch(`/images/:id`, `images/update`);
    this.delete(`/images/:id`, `images/destroy`);
  }
}
