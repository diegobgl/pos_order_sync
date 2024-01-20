from odoo import models, fields, api

class PosOrder(models.Model):
    _inherit = 'pos.order'

    is_draft_order = fields.Boolean('Is Draft Order', default=False)
    origin_session_id = fields.Many2one('pos.session', string='Origin POS Session')

    @api.model
    def create_draft_order(self, values):
        """
        Crea una orden de venta en estado borrador.
        """
        values.update({'is_draft_order': True})
        return self.create(values)

    @api.model
    def pay_draft_order(self, draft_order_id, payment_details):
        """
        Procesa el pago de una orden borrador.
        """
        draft_order = self.browse(draft_order_id)
        if draft_order.is_draft_order:
            # Aquí se implementaría la lógica para procesar el pago.
            pass
    
    def set_draft_order(self):
        self.is_draft_order = True