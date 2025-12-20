function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5iqWI8SsPQZ":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var answer = player.GetVar("SubjectLine");
var answer = answer.toLowerCase();
if (answer.indexOf("[encrypt]") >-1)
{
player.SetVar("Encrypted", "yes");
} else {
player.SetVar("Encrypted", "no");
}
}

