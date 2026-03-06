$htmlFiles = Get-ChildItem -Path "c:\JPS" -Filter "*.html" -File

$footerReplacement = @'
    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <a href="index.html" class="logo footer-logo">
                        <img src="assets/images/jps logo.png" alt="JPS Engineering Logo" style="height: 50px;">
                    </a>
                    <p class="footer-desc">
                        Your trusted partner for high-quality engineering materials and components.
                    </p>
                </div>
                <div>
                    <h4 class="footer-heading">Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="products.html">Products</a></li>
                        <li><a href="applications.html">Applications</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="footer-heading">Contact</h4>
                    <p class="footer-contact"><i class="fa-solid fa-location-dot"></i> 4/47, Ajanta Textile Compound Site -2, Industrial Area, Mohan Nagar Ghaziabad, UP-201007</p>
                    <p class="footer-contact"><i class="fa-solid fa-phone"></i> 0120-4818775, +91-9811131910 (Sales)</p>
                    <p class="footer-contact"><i class="fa-solid fa-envelope"></i> contact@jpsenggmaterials.com</p>
                    <h4 class="footer-heading" style="margin-top: 25px;">Follow Us</h4>
                    <div class="footer-social">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p><i class="fa-solid fa-file-invoice"></i> GST No: <strong>09AAGC1799L1ZU</strong></p>
                <p>&copy; 2025 JPS Engineering Material Pvt Ltd. All Rights Reserved.</p>
                <p>Designed and Developed by <a href="https://garvikadvertising.com" target="_blank">Garvik India</a></p>
            </div>
        </div>
    </footer>
'@

foreach ($file in $htmlFiles) {
    if ($file.Name -eq "thanks.html") { continue }
    
    $content = Get-Content -Path $file.FullName -Raw
    
    # Very manual extraction of existing footer bounds based on files
    # The CTA section buttons fix:
    $content = $content -replace 'class="btn" style="border: 2px solid white; background: transparent;"', 'class="btn btn-outline-white"'
    $content = $content -replace 'class="btn"(\s+)style="border: 2px solid white; background: transparent; margin-left:10px;"', 'class="btn btn-outline-white"$1style="margin-left:10px;"'
    
    if ($file.Name -eq "about.html") {
        # about.html has a broken footer
        # We find from '<div>\s*<a href="index.html" class="logo" style="margin-bottom: 20px; display: inline-block;">'
        # To '</footer>'
        $pattern = '(?s)<div>\s*<a href="index\.html" class="logo"[^<]*<img src="assets/images/jps logo\.png".*?</footer>'
        $content = [regex]::Replace($content, $pattern, $footerReplacement)
    } else {
        # Normal footer replacement
        $pattern = '(?s)<!-- Footer -->\s*<footer.*?>.*?</footer>'
        $content = [regex]::Replace($content, $pattern, $footerReplacement)
    }

    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
Write-Host "Updated all HTML files"
