# -*- coding: utf-8 -*-
# from odoo import http


# class ModuloModelo(http.Controller):
#     @http.route('/modulo_modelo/modulo_modelo', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/modulo_modelo/modulo_modelo/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('modulo_modelo.listing', {
#             'root': '/modulo_modelo/modulo_modelo',
#             'objects': http.request.env['modulo_modelo.modulo_modelo'].search([]),
#         })

#     @http.route('/modulo_modelo/modulo_modelo/objects/<model("modulo_modelo.modulo_modelo"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('modulo_modelo.object', {
#             'object': obj
#         })
