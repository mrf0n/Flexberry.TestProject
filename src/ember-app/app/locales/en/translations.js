import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestProjectSellerLForm from './forms/i-i-s-test-project-seller-l';
import IISTestProjectShopLForm from './forms/i-i-s-test-project-shop-l';
import IISTestProjectSellerEForm from './forms/i-i-s-test-project-seller-e';
import IISTestProjectShopEForm from './forms/i-i-s-test-project-shop-e';
import IISTestProjectSellerModel from './models/i-i-s-test-project-seller';
import IISTestProjectShopModel from './models/i-i-s-test-project-shop';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test-project-seller': IISTestProjectSellerModel,
    'i-i-s-test-project-shop': IISTestProjectShopModel
  },

  'application-name': 'Test project',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test project',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test project',
          title: 'Test project'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'test-project': {
          caption: 'TestProject',
          title: 'TestProject',
          администрация: {
            caption: 'Администрация',
            title: 'Администрация',
            'i-i-s-test-project-seller-l': {
              caption: 'SellerL',
              title: 'Seller L'
            },
            'i-i-s-test-project-shop-l': {
              caption: 'Список магазинов',
              title: ''
            }
          },
          'i-i-s-test-project-seller-l': {
            caption: 'Seller',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test-project-seller-l': IISTestProjectSellerLForm,
    'i-i-s-test-project-shop-l': IISTestProjectShopLForm,
    'i-i-s-test-project-seller-e': IISTestProjectSellerEForm,
    'i-i-s-test-project-shop-e': IISTestProjectShopEForm
  },

});

export default translations;
