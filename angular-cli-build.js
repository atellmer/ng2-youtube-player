// Angular-CLI build configuration
// This file lists all the node_modules files that will be used in a build
// Also see https://github.com/angular/angular-cli/wiki/3rd-party-libs

/* global require, module */

const Angular2App = require('angular-cli/lib/broccoli/angular2-app');

const compile = require('broccoli-postcss');
const cssImport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const cssnano = require('cssnano');
const nested = require('postcss-nested');
const vars = require('postcss-simple-vars');
const mixins = require('postcss-mixins');
const extend = require('postcss-extend');

const options = {
  plugins: [
    {
      module: cssImport,
      options: {
        path: ['src/app/**/*.css'],
        options: {}
      }
    },
    {
      module: vars,
      options: {}
    },
    {
      module: nested,
      options: {}
    },
    {
      module: mixins,
      options: {}
    },
    {
      module: extend,
      options: {}
    },
    {
      module: cssnext,
      options: {
        browsers: ['> 1%'],
        warnForDuplicates: false
      },
    },
    {
      module: cssnano,
      options: {
        safe: true,
        sourcemap: true
      }
    }
  ]
};

module.exports = function(defaults) {
  let appTree =  new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'core-js/client/shim.min.js',
      'reflect-metadata/**/*.+(ts|js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
    ],
    polyfills: [
      'vendor/core-js/client/shim.min.js',
      'vendor/reflect-metadata/Reflect.js',
      'vendor/systemjs/dist/system.src.js',
      'vendor/zone.js/dist/zone.js'
    ],
  });

  return compile(appTree, options);
};
