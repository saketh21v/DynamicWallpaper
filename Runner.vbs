Set oShell = CreateObject ("Wscript.Shell") 
Dim strArgs
strArgs = "cmd /c node index"
oShell.Run strArgs, 0, false