import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.test-project.caption'),
          title: i18n.t('forms.application.sitemap.test-project.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.test-project.администрация.caption'),
            title: i18n.t('forms.application.sitemap.test-project.администрация.title'),
            children: [{
              link: 'i-i-s-test-project-seller-l',
              caption: i18n.t('forms.application.sitemap.test-project.администрация.i-i-s-test-project-seller-l.caption'),
              title: i18n.t('forms.application.sitemap.test-project.администрация.i-i-s-test-project-seller-l.title'),
              icon: 'address card',
              children: null
            }, {
              link: 'i-i-s-test-project-shop-l',
              caption: i18n.t('forms.application.sitemap.test-project.администрация.i-i-s-test-project-shop-l.caption'),
              title: i18n.t('forms.application.sitemap.test-project.администрация.i-i-s-test-project-shop-l.title'),
              children: null
            }]
          }]
        }
      ]
    };
  }),
})