odoo.define('int_point_of_sale.screens', function (require) {
    "use strict";

    var screens = require('point_of_sale.screens');

    // variable to create a widget button to clear the current order
    var ClearOrder = screens.ActionButtonWidget.extend({ 
        template: "ClearOrder",
        button_click: function(){
            this.clear_order();
        },
        clear_order(){
            this.pos.delete_current_order();
        },
    }); 
    
    screens.define_action_button({
        'name': 'clear_order',
        'widget': ClearOrder,
    });

    // get the image url
    screens.OrderWidget.include({
        get_product_image_url: function(product){
            return window.location.origin + '/web/image?model=product.product&field=image_128&id='+product.id;
        },
    });
    
});