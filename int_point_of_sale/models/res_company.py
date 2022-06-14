from odoo import models, _
from odoo.modules.module import get_resource_path

class ResCompany(models.Model):
    _inherit = "res.company"

    def _get_pci_logo(self):
        img_path = get_resource_path('web', 'static/src/img/portcitieslogo.png')

        return img_path