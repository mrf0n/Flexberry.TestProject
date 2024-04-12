import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test project',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test project',
          title: 'Test project'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test-project-seller-l': IISTestProjectSellerLForm,
    'i-i-s-test-project-shop-l': IISTestProjectShopLForm,
    'i-i-s-test-project-seller-e': IISTestProjectSellerEForm,
    'i-i-s-test-project-shop-e': IISTestProjectShopEForm
  },

});

export default translations;
