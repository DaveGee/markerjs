var fs = require("fs");

var ViewEngineConf =  {
    tags: {
        render: "@Render",
        data: "@Data",
        vm: "@ViewModelFile"
    }
};

var ViewEngine = function() {
    this.viewPath = "./views/";
    this.defaultLayout = "./views/layout.html";
}

ViewEngine.prototype.doLayout = function(httpResponse, tagCallbacks) {
    
    var filename = this.defaultLayout;
    
    require("path").exists(this.defaultLayout, function(exists) {
      
        if(exists) {
            // render with layout
            
            fs.readFile(filename, "utf-8", function(error, contentOfLayout) {
                if(error) {
                    throw new Error("Could not layout file: " + filename);
                } else {
                    
                    var html = contentOfLayout;
                    
                    for(var tag in tagCallbacks) {
                        
                        html = html.replace(tag, tagCallbacks[tag]);
                    }
                    
                    require("../lib/utils").twohundred(httpResponse, html);
                }
            });
                        
        } else {
            // render without layout   
            require("../lib/utils").twohundred(httpResponse, tagCallbacks.render());
        } // end exists
    });
}

ViewEngine.prototype.render = function(ctrl, actionName, data, httpResponse) {
    
    var filepath = this.viewPath + ctrl.controllerName + "/" + actionName + ".html";
    
    var mapper = {};
    mapper[ViewEngineConf.tags.data] = function() { return JSON.stringify(data); };
    mapper[ViewEngineConf.tags.render] = function() { return fs.readFileSync(filepath, "utf-8"); };
    mapper[ViewEngineConf.tags.vm] = function() {
        if(ctrl.viewModel)
            return "<script src='/" + ctrl.viewModel + "'></script>";
        else
            return "";
    };
    
    // ViewModel should be only on the client, data retrieved by ajax or else
    //mapper[ViewEngineConf.tags.viewModel] = function() { if(ctrl.viewModel) return "<script src='viewmodels/"+ctrl.viewModel.file+"'></script>"; else return ""; }
    //mapper[ViewEngineConf.tags.viewModelName] = function() { if(ctrl.viewModel) return ctrl.viewModel.name; else return ""; }
    
    this.doLayout(httpResponse, mapper);
}

ViewEngine.prototype.renderJson = function(ctrl, actionName, data, httpResponse) {

    var filepath = this.viewPath + ctrl.controllerName + "/" + actionName + ".html";
    
    require("path").exists(filepath, function(exists) {
      
        if(exists) {
            // render with layout
            
            fs.readFile(filepath, "utf-8", function(error, contentOfView) {
                if(error) {
                    throw new Error("Could not read file: " + filepath);
                } else {
                    
                    var json = { "viewData": JSON.stringify(data),
                                "html": contentOfView };
                    
                    require("../lib/utils").twohundredJson(httpResponse, json);
                }
            });
                        
        } else {
            // render without layout   
            require("../lib/utils").twohundredJson(httpResponse, data);
        } // end exists
    });
}

exports.engine = new ViewEngine();
