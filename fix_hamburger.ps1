$htmlFiles = Get-ChildItem -Path "c:\JPS" -Filter "*.html" -File

foreach ($file in $htmlFiles) {
    if ($file.Name -eq "thanks.html") { continue }
    
    $content = Get-Content -Path $file.FullName -Raw
    
    # Remove the duplicate inline hamburger click listener
    $pattern = '(?s)\s*// Mobile Menu Toggle\s*const hamburger = document\.getElementById\(''hamburger''\);\s*const navMenu = document\.getElementById\(''navMenu''\);\s*if \(hamburger && navMenu\) \{\s*hamburger\.addEventListener\(''click'', \(\) => \{\s*navMenu\.classList\.toggle\(''active''\);\s*hamburger\.classList\.toggle\(''active''\);\s*\}\);\s*\}'
    $newContent = [regex]::Replace($content, $pattern, '')

    if ($content -ne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
    }
}
Write-Host "Removed redundant hamburger scripts from all HTML files."
