# -*- coding: utf-8 -*-
{
    'name': 'POS Order Sync',

    'summary': 'Sincronización de Ordenes de Venta en POS',

    'description': """Permite crear órdenes de venta en el POS que se sincronicen con el backend y puedan ser pagadas desde otro POS.""",

    'author': "Diego Gajardo",
    'website': "http://www.dgdev.cl",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Point of Sale',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['point_of_sale', 'sale', 'account'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/pos_order_view.xml',
        #'views/pos_config_view.xml',
        #'views/templates.xml',
        #'security/groups.xml'
    ],
    'demo': [],

    'assets': {
        'point_of_sale.assets': [
            'pos_order_sync/static/src/js/pos_order_sync.js',
            # ... (otros archivos JS y CSS)
        ],
    'web.assets_qweb': [
            'pos_order_sync/static/src/xml/**/*',
        ],
    },




    'installable': True,
    'application': True,
    'auto_install': False,
}