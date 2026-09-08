(function(){
  var api=null, ready=false, finished=false;

  function find(win,depth){
    while(win && depth-->0){
      if(win.API) return win.API;
      if(win.parent===win) break;
      win=win.parent;
    }
    return null;
  }
  function locate(){
    var a=find(window,500);
    if(!a && window.opener) a=find(window.opener,500);
    return a;
  }
  function init(){
    api=locate();
    if(!api) return false;
    try{
      if(api.LMSInitialize("")!=="true") return false;
      ready=true;
      // "not attempted" es el estado por defecto y algunos LMS no lo mueven solos.
      // Marcarlo incomplete al entrar hace que el reporte distinga "entró" de "nunca abrió".
      var st=api.LMSGetValue("cmi.core.lesson_status");
      if(!st||st==="not attempted") api.LMSSetValue("cmi.core.lesson_status","incomplete");
      api.LMSCommit("");
      return true;
    }catch(e){ return false; }
  }
  function complete(){
    if(!ready||finished) return;
    try{
      api.LMSSetValue("cmi.core.lesson_status","completed");
      api.LMSCommit("");
    }catch(e){}
  }
  function finish(){
    if(!ready||finished) return;
    finished=true;
    try{ api.LMSCommit(""); api.LMSFinish(""); }catch(e){}
  }

  init();
  // pagehide cubre el caso móvil/bfcache donde unload no dispara.
  window.addEventListener("unload",finish);
  window.addEventListener("pagehide",finish);

  window.EwaffleSCORM={complete:complete,finish:finish,available:function(){return ready;}};
})();