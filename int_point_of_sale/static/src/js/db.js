odoo.define('int_point_of_sale.DB', function (require) {
    "use strict";

    var db = require('point_of_sale.DB');
    var models = require('point_of_sale.models');
    var _super_order = models.Order.prototype;
    
    // to connect the data to the database
    db.include({
        set_salesperson: function(salesperson) {
            // Always update if the user is the same as before
            this.save('salesperson', salesperson || null);
        },
        get_salesperson: function() {
            return this.load('salesperson');
        },
    });

    // add the function to the base
    models.PosModel = models.PosModel.extend({
        get_salesperson: function() {
            // reset the salesperson to the current user if session is new
            if (this.db.load('pos_session_id') !== this.pos_session.id) {
                this.set_salesperson(this.employee);
            }
            return this.db.get_salesperson() || this.get('salesperson') || this.employee;
        },
        // changes the current salesperson
        set_salesperson: function(employee){
            this.set('salesperson', employee);
            this.db.set_salesperson(this.get('salesperson'));
        },
    });

    // to transfer js data value to the backend
    models.Order = models.Order.extend({
        export_as_JSON: function(){
            var salesperson = this.pos.get_salesperson().id
            var json = _super_order.export_as_JSON.apply(this,arguments);
            json.salesperson_id = salesperson;
            return json;
        },
        export_for_printing: function(){
            var salesperson = this.pos.get_salesperson()
            var receipt = _super_order.export_for_printing.apply(this,arguments);
            receipt.salesperson = salesperson ? salesperson.name : null;
            return receipt;
        },
    });

});