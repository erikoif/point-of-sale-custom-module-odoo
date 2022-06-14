from odoo import api, fields, models, _

class PosOrder(models.Model):
    _inherit = "pos.order"
    _description = "Point of Sale Orders"
    
    salesperson_id = fields.Many2one('hr.employee', string='Salesperson')

    # get the value of salesperson from the js
    @api.model
    def _order_fields(self, ui_order):
        salesperson_id = super(PosOrder, self)._order_fields(ui_order)
        salesperson_id['salesperson_id'] = ui_order.get('salesperson_id')
        return salesperson_id
