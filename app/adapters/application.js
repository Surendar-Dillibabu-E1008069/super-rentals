import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  namespace: 'api',

  buildURL(modelName, id, snapshot, requestType) {
    return `${this._buildURL(modelName, id)}.json`;
  }
});
