odoo.define('int_point_of_sale.popups', function (require) {
    "use strict";

    var PosBaseWidget = require('point_of_sale.BaseWidget');
    var chrome = require('point_of_sale.chrome');
    var core = require('web.core');
    var _t = core._t;

    // create a new widget to create a popup window and to select salesperson
    var SalespersonWidget = PosBaseWidget.extend({
        template: 'SalespersonWidget',
        init: function(parent, options){
            options = options || {};
            this._super(parent,options);
        },
        renderElement: function(){
            var self = this;
            this._super();
            this.$el.click(function(){
                self.click_salesperson();
            });
        },
        click_salesperson: function(){
            if(!this.pos.config.module_pos_hr) { return; }
            var self = this;
            this.gui.select_employee({
                'security':     true,
                'current_employee': this.pos.get_salesperson(),
                'title':      _t('Change Salesperson'),
            }).then(function(employee){
                self.pos.set_salesperson(employee);
                self.chrome.widget.username.renderElement();
                self.renderElement();
            });
        },
        get_name: function(){
            var user = this.pos.get_salesperson();
            if(user){
                return user.name;
            }else{
                return "";
            }
        },
    });

    // register the new widget to the base
    chrome.Chrome.include({
        build_widgets: function(){
            this.widgets.push({
                'name': 'salesperson',
                'widget': SalespersonWidget,
                'replace': '.placeholder-SalespersonWidget',
            });
            this._super();
        }
    });

    return{
        SalespersonWidget: SalespersonWidget,
    };
});