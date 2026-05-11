[Reflection.Assembly]::LoadWithPartialName("System.Drawing")
$img = [System.Drawing.Image]::FromFile("public\images\project1-fametn.jpeg")
Write-Output "WIDTH: $($img.Width)"
Write-Output "HEIGHT: $($img.Height)"
$img.Dispose()
