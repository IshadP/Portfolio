# Migrate old color tokens to new Tailwind 50-950 scale
# Old 10-100 scale → New 50-950 scale

$files = Get-ChildItem -Path "src" -Recurse -Include "*.tsx","*.ts"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $original = $content

    # Neutral scale migration (order matters — do longer patterns first)
    # neutral-100 (old darkest) → neutral-900
    $content = $content -replace '(?<![0-9])neutral-100(?![0-9])', 'neutral-900'
    # neutral-90 → neutral-800
    $content = $content -replace 'neutral-90(?![0-9])', 'neutral-800'
    # neutral-80 → neutral-600
    $content = $content -replace 'neutral-80(?![0-9])', 'neutral-600'
    # neutral-70 → neutral-600 (merge)
    $content = $content -replace 'neutral-70(?![0-9])', 'neutral-600'
    # neutral-60 → neutral-500
    $content = $content -replace 'neutral-60(?![0-9])', 'neutral-500'
    # neutral-50 → neutral-500 (merge)
    $content = $content -replace 'neutral-50(?![0-9])', 'neutral-500'
    # neutral-40 → neutral-400
    $content = $content -replace 'neutral-40(?![0-9])', 'neutral-400'
    # neutral-30 → neutral-300
    $content = $content -replace 'neutral-30(?![0-9])', 'neutral-300'
    # neutral-20 → neutral-200
    $content = $content -replace 'neutral-20(?![0-9])', 'neutral-200'
    # neutral-10 → neutral-100
    $content = $content -replace 'neutral-10(?![0-9])', 'neutral-100'

    if ($content -ne $original) {
        Set-Content $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.Name)"
    }
}

Write-Host "Done."
