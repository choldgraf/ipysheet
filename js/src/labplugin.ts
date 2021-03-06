import * as sheet from './sheet';
import * as renderer from './renderer';
import * as base from '@jupyter-widgets/base';
import * as pkg from '../package.json';

export const ipysheetPlugin = {
    id: 'ipysheet',
    requires: [base.IJupyterWidgetRegistry],
    activate: function(app, widgets) {
        widgets.registerWidget({
            name: 'ipysheet',
            version: pkg.version,
            exports: sheet
        });
    },
    autoStart: true
};

export const rendererPlugin = {
    id: 'ipysheet:renderer',
    requires: [base.IJupyterWidgetRegistry],
    activate: function(app, widgets) {
        widgets.registerWidget({
            name: 'ipysheet/renderer',
            version: pkg.version,
            exports: renderer
        });
    },
    autoStart: true
};
