# network
A Promise-based interface into @tomas's `network` library

## install 

`bash
terminal > npm --save i @exponent/network
`

## Usage

### import it to your script
`js
  const NetworkAysnc = require("@exponent/network");
  `
  
### get Active Interface
  `js
    NetworkAysnc.activeInterfaceAsync()
      
      .then((interface) => console.log("Active Interface", interface))
      
      .catch((error) => console.log("error gettings interface", error))
  `
  
### get GateWay ip address
  `js
    NetworkAysnc.gatewayIpAsync()
      
      .then((gateway) => console.log("gateway: ", gateway))
      
      .catch((error) => console.log("error", error))
  `
  
  
  
### get list of Interfaces
  `js
    NetworkAysnc.interfacesListAsync()
    
      .then((interfaces) => console.log("InterFaces: ", interfaces))
      
      .catch((error) => console.log("error", error))
  `
  
  
### get local ip for current machine
  `js
    NetworkAysnc.privateIpAsync()
    
      .then((ip) => console.log("local ip: ", ip))
      
      .catch((error) => console.log("error", error))
  `
  
  
  
### get public ip
  `js
    NetworkAysnc.publicIpAsync()
    
      .then((ip) => console.log("public ip: ", ip))
      
      .catch((error) => console.log("error", error))
  `
