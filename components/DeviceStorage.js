/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

class DeviceStorage {
  /**
   * Obtener 
   * @param key
   * @returns {Promise<T>|*|Promise.<TResult>}
   */

  static get(key) {
      return AsyncStorage.getItem(key).then((value) => {
          const jsonValue = JSON.parse(value);
          return jsonValue;
      });
  }


  /**
         * Salvar
   * @param key
   * @param value
   * @returns {*}
   */
  static save(key, value) {
      return AsyncStorage.setItem(key, JSON.stringify(value));
  }


  /**
         * Actualización
   * @param key
   * @param value
   * @returns {Promise<T>|Promise.<TResult>}
   */
  static update(key, value) {
      return DeviceStorage.get(key).then((item) => {
          value = typeof value === 'string' ? value : Object.assign({}, item, value);
          return AsyncStorage.setItem(key, JSON.stringify(value));
      });
  }


  /**
         * Actualización
   * @param key
   * @returns {*}
   */
  static delete(key) {
      return AsyncStorage.removeItem(key);
  }
}

export default DeviceStorage;