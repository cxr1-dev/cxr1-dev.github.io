# git-push.ps1
Write-Host "请记得打开Watt Tookit/其他Github代理！"

# 检查是否有传入提交信息
if ($args.Count -eq 0) {
    Write-Host "错误：请提供提交信息。" -ForegroundColor Red
    Write-Host "用法示例：.\\git-push.ps1 '更新代码'" -ForegroundColor Yellow
    exit 1
}

# 获取用户输入的提交信息
$commitMessage = $args -join " "

# 执行 git 操作
Write-Host "执行 git add ." -ForegroundColor Green
git add .
Start-Sleep -Seconds 1

Write-Host "再次执行 git add ." -ForegroundColor Green
git add .
Start-Sleep -Seconds 1

Write-Host "执行 git commit -m '$commitMessage'" -ForegroundColor Green
git commit -m "$commitMessage"
if ($LASTEXITCODE -ne 0) {
    Write-Host "提交失败，请检查是否有更改需要提交。" -ForegroundColor Red
    exit 1
}

Write-Host "执行 git push" -ForegroundColor Green
git push
if ($LASTEXITCODE -ne 0) {
    Write-Host "推送失败，请检查网络或权限。" -ForegroundColor Red
    exit 1
}

Write-Host "推送完成！" -ForegroundColor Green