var _api = SimphonyExtensibilityAPI;
var _opsContext = _api.Environment.Context;

var _ops = _api.Common.LoadOps();

globalThis.AddMenuItem = function AddMenuItem() {
    var command = new _ops.Micros.Ops.OpsCommand();
    command.Command = _ops.Micros.Ops.OpsCommandType.MenuItem;
    command.Number = 100000001;

    _opsContext.ProcessCommand(command);
};

globalThis.AddDiscount = function AddDiscount() {
    
    var discountCommand = new _ops.Micros.Ops.OpsCommand();
    discountCommand.Command = _ops.Micros.Ops.OpsCommandType.Discount;
    discountCommand.Number = 1001;
    discountCommand.Text = "1.00";
    
    _opsContext.ProcessCommand(discountCommand);
};

globalThis.AddTender = function AddTender() {
    
    var paymentCommand = new _ops.Micros.Ops.OpsCommand();
    paymentCommand.Command = _ops.Micros.Ops.OpsCommandType.Payment;
    paymentCommand.Number = 205;
    paymentCommand.Text = "2.00";
    paymentCommand.Arguments = "Cash:Cash" ;
    
    _opsContext.ProcessCommand(paymentCommand);

};
