odoo.define('mi_modulo_pos_order_sync.pos_order_sync', function(require) {
    'use strict';

    var models = require('point_of_sale.models');
    var screens = require('point_of_sale.screens');
    var PosModel = models.PosModel;
    var Order = models.Order;
    var Orderline = models.Orderline;

    // Extensión del modelo Order para soportar órdenes borrador
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

    // Extensión del modelo PosModel para agregar funcionalidad de órdenes borrador
    var _super_posmodel = models.PosModel.prototype;
    models.PosModel = models.PosModel.extend({
        push_order: function(order) {
            if (order && order.is_draft_order) {
                // Implementar lógica para enviar la orden como borrador al backend
                return Promise.resolve();
            }
            return _super_posmodel.push_order.apply(this, arguments);
        },
    });

    // Botón para enviar orden como borrador
    var DraftOrderButton = screens.ActionButtonWidget.extend({
        template: 'DraftOrderButton',
        button_click: function(){
            var order = this.pos.get_order();
            order.set_draft_order(true);
            // Implementar lógica para marcar y enviar la orden como borrador
        },
    });

    screens.define_action_button({
        'name': 'draft_order',
        'widget': DraftOrderButton,
    });

    // Aquí se pueden agregar otras extensiones o lógicas JS necesarias
});
