from odoo import fields, models, _

class PosOrderReport(models.Model):
    _inherit = "report.pos.order"
    _description = "Point of Sale Orders Report"

    salesperson_id = fields.Many2one('hr.employee', string="Salesperson")

    def _select(self):
        return super(PosOrderReport, self)._select() + ", s.salesperson_id as salesperson_id"

    def _group_by(self):
        return super(PosOrderReport, self)._group_by() + ", s.salesperson_id"