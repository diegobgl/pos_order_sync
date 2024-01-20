odoo.define('pos_order_sync.pos_order_sync', function(require) {
    'use strict';

    var models = require('point_of_sale.models');
    var screens = require('point_of_sale.screens');

    var _super_order = models.Order.prototype;
    models.Order = models.Order.extend({
        initialize: function(attributes, options) {
            _super_order.initialize.apply(this, arguments);
            this.is_draft_order = this.is_draft_order || false;
        },
        export_as_JSON: function() {
            var json = _super_order.export_as_JSON.apply(this, arguments);
            json.is_draft_order = this.is_draft_order;
            return json;
        },
        set_draft_order: function(is_draft_order) {
            this.is_draft_order = is_draft_order;
            this.trigger('change', this);
        },
    });

    var DraftOrderButton = screens.ActionButtonWidget.extend({
        template: 'DraftOrderButton',
        button_click: function(){
            this.pos.get_order().set_draft_order(true);
            // Aquí puedes agregar lógica para enviar la orden al backend
        },
    });

    screens.define_action_button({
        'name': 'draft_order_button',
        'widget': DraftOrderButton,
    });
});
