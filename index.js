var instapromise = require('instapromise');
var network = require('network');

module.exports = {
  activeInterfaceAsync: function () { return network.promise.get_active_interface(); },
  gatewayIpAsync: function () { return network.promise.get_gateway_ip(); },
  interfacesListAsync: function () { return network.promise.get_interfaces_list(); },
  privateIp: function () { return network.promise.get_private_ip(); },
  publicIp: function () { return network.promise.get_public_ip(); },
};
