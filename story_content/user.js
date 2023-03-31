function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6kaIMYUauLM":
        Script1();
        break;
      case "6016ALEzqoh":
        Script2();
        break;
      case "5vNoM4qMTd3":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

function findLMSAPI(win) {
 if (win.hasOwnProperty("GetStudentID")) return win;
 else if (win.parent == win) return null;
 else return findLMSAPI(win.parent);
}

var lmsAPI = findLMSAPI(this);

lmsAPI.SetScore(player.GetVar("xGameScore_9447723"), 100, 0);

}

function Script2()
{
  SCORM_CallLMSSetValue("cmi.core.lesson_status", "failed");

}

function Script3()
{
  SCORM_CallLMSSetValue("cmi.core.lesson_status", "passed");
}

