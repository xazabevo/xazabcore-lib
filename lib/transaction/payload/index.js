var Payload = require('./payload');

Payload.ProUpRegTxPayload = require('./proupregtxpayload');
Payload.ProUpRevTxPayload = require('./prouprevtxpayload');
Payload.SubTxCloseAccountPayload = require('./subtxcloseaccountpayload');
Payload.SubTxRegisterPayload = require('./subtxregisterpayload');
Payload.SubTxResetKeyPayload = require('./subtxresetkeypayload');
Payload.SubTxTopupPayload = require('./subtxtopuppayload');
Payload.SubTxTransitionPayload = require('./subtxtransitionpayload');
Payload.CoinbasePayload = require('./coinbasepayload');
Payload.ProRegTxPayload = require('./proregtxpayload');
Payload.ProTxUpServPayload = require('./proupservtxpayload');
Payload.CommitmentTxPayload = require('./commitmenttxpayload')

Payload.constants = require('./constants');

module.exports = Payload;