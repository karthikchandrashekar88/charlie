var path = require('path');
module.exports = {
  name: 'field-pop',
  datalayer: {
    log_level: 'info|error|warning',
    persist:false
  },
  // Configuring the user defined modules to be part of the mesh node
  modules: {
    'fieldpop_user_mgr': {
      path: path.join(__dirname, 'node_modules', '@smc', 'fieldpop-user-mgr'),
	  constructor: {
        type: 'sync',
		parameters: []
      }
	},
    'salesforce_component': {
      path: path.join(__dirname, 'node_modules', '@smc', 'salesforce-component'),
      constructor: {
        type: 'sync',
        parameters: []
      }
    }
  },
  // Defining a component of the mesh
  components: {
    'salesforce_component': {
      moduleName: 'salesforce_component',
	  // start method is defined inside the module
      startMethod: 'start',
	  schema:{
		// Means we dont dynamically share anything else
	    'exclusive':false,
	    'methods':{
	    'start':{
	      type:'sync'
	    },
	    // fieldPopMethod is defined inside the fieldpop-user-mgr.js
	    'fieldPopMethod': {
		  type:'sync'
	    }
	   }
      },
      web: {
        routes: {
          //webapp is the exposed folder which contains the defined webpages
          static: 'webapp'
        }
      }
    }
  }
};
