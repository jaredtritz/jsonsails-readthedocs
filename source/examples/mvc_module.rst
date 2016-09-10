MVC Module
==========

This is an example of how to follow an MVC pattern of module development within
in the JSonSails framework.

CDN JSLib 
^^^^^^^^^^

Used to load jquery and prototype from CDN in this example

.. code-block:: javascript

  return function(cdns, callback){
      var done = 0;
      for(var i=0; i<cdns.length; i++){
          var script = document.createElement('script');
          script.src = cdns[i];
          console.log('loading', cdns[i])
          script.type = 'text/javascript';
          script.onload = function(name){
              done++;
              console.log(name + " is done loading!")
              if(done === cdns.length){
                  callback()
              }
          }.bind(this, script.src)
          document.getElementsByTagName('head')[0].appendChild(script);
      }
  }

Model-View JSLib 
^^^^^^^^^^^^^^^^^

Using prototype lib we define a couple of models and show how to load them from
a JSLib so that the CDN method will expose the classes to the init method.

.. code-block:: javascript

  return function(){
    var MyModel = Class.create();

    // MODEL CODE
    MyModel.prototype={
    
      initialize: function(param) // pass in nts model
      {
        this.param 
      },
    
      say_hello: function(name){
        alert('hi '+name) 
      } 
   
    }

    var MyView = Class.create();

    // VIEW CODE
    MyView.prototype={
    
      initialize: function(model) // pass in nts model
      {
        this.model = model 
      },
    
      show_hello: function(name){
        console.log('hi '+name) 
      } 
   
    }
    
    var objs = {}
    objs.Model = MyModel
    objs.View = MyQuestion
    return objs
  }

Module JS
^^^^^^^^^

This is the code in the Module JS tab, which ties it all together.

.. code-block:: javascript

  js.jslib.load_scripts([
      "https://code.jquery.com/jquery-2.2.4.js",
      "https://cdnjs.cloudflare.com/ajax/libs/prototype/1.7.3/prototype.js"
  ], scripts_loaded)

  var MyModel;
  var MyView;

  function scripts_loaded(){
      // yay! cdn libraries are there 
      console.log('jquery', $)
      console.log('prototype', Class)
      var data = {}
      var objs = js.jslib.objs
      MyModel = objs.MyModel(data)
      MyView = objs.MyView() 
      init_module([])

      // HTML binding    
      jQuery('#begin-btn').click(function(e){
          begin()
      })
  }

  // CONTROL CODE 

  function init_module(data){
    model = new MyModel(data);
    view = new MyView(model)
  }

  function begin(){
    console.log('beginning');
  }
