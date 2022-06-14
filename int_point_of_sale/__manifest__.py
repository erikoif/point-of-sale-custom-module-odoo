{
    'name' : 'Custom Point of Sale',
    'version' : '13.0.1.1',
    'category': 'Sales/Point Of Sale',
    'summary': 'Custom Point of Sale',
    'sequence': 1,
    'description': """
    Custom Module for Point of Sale\n
    v.0.1.0(eriko)\n
        In this custom module, I create some changes to the point of sale module, such as:
        1. Change the theme color and add company logo in pos session
        2. Create clear current order button to clear the current order session
        3. Modify the printed pos receipt
        4. Allow to input and save both "Cashier" and "Salesperson" per pos order, based on employee master data
        5. Enable filtering and grouping based on the new fields in "Order Analysis" report and the pos order list view
        6. Add product image on the pos order
    
    v.0.1.1(eriko)\n
        Deleting unused code in the pos_order_report (function to define from query)
        
        Note:
        When installing this module, will automatically a new point of sale with the name "New Shop" with the setting of login with employee

    """,
    'category': 'Point of Sale',
    'website': 'https://porcities.net',
    'depends' : [
        'point_of_sale',
        'hr',
    ],
    'data': [
        'data/pos_config.xml',
        'views/point_of_sale.xml',
        'views/pos_order_view.xml',
        'views/pos_order_report_view.xml',
    ],
    'qweb': [
       'static/src/xml/pos.xml',
    ],
    'installable': True,
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}
