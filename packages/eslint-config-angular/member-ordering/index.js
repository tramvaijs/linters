import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import sortClassMembersPlugin from 'eslint-plugin-sort-class-members';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'sort-class-members': sortClassMembersPlugin,
    },
    rules: {
      /**
       * @note(splincode): use @typescript-eslint/member-ordering instead
       */
      'sort-class-members/sort-class-members': 'off',
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'signature',
            /**
             * static fields
             * [sort: public -> protected -> private]
             **/
            'public-static-field',
            'protected-static-field',
            'private-static-field',

            /**
             * abstract fields
             * [sort: public -> protected -> private]
             **/
            'public-abstract-field',
            'protected-abstract-field',

            /**
             * instance fields
             * [sort: private -> protected -> public]
             * [sort: decorated -> non-decorated]
             **/
            'private-decorated-field',
            'private-instance-field',
            'protected-decorated-field',
            'protected-instance-field',
            'public-decorated-field',
            'public-instance-field',

            /**
             * constructors
             * [sort: public -> protected -> private]
             **/
            'public-constructor',
            'protected-constructor',
            'private-constructor',

            /**
             * static methods
             * [sort: public -> protected -> private]
             **/
            'public-static-method',
            'protected-static-method',
            'private-static-method',

            /**
             * abstract
             * [sort: public -> private -> protected]
             **/
            'public-abstract-get',
            'public-abstract-set',
            'protected-abstract-get',
            'protected-abstract-set',
            'public-abstract-method',
            'protected-abstract-method',

            /**
             * methods
             * [sort: public -> protected -> private]
             * [sort: decorated -> non-decorated]
             **/
            'public-decorated-method',
            'public-instance-method',
            'protected-decorated-method',
            'protected-instance-method',
            'private-decorated-method',
            'private-instance-method',
          ],
        },
      ],
    },
  },
];
