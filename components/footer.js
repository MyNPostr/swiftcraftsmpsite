class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://cdn.tailwindcss.com');
                
                :host {
                    display: block;
                }
                
                .social-link {
                    transition: all 0.3s ease;
                }
                
                .social-link:hover {
                    transform: translateY(-3px);
                    color: #0ea5e9;
                }
                
                .footer-link {
                    position: relative;
                    transition: color 0.3s ease;
                }
                
                .footer-link::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: #d946ef;
                    transition: width 0.3s ease;
                }
                
                .footer-link:hover::after {
                    width: 100%;
                }
            </style>
            
            <footer class="bg-dark-900 border-t border-dark-700">
                <div class="container mx-auto px-4 py-12">
                    <div class="grid md:grid-cols-4 gap-8 mb-8">
                        <!-- Brand -->
                        <div class="md:col-span-2">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                                </div>
                                <span class="font-bold text-2xl bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                                    SWIFT CRAFT
                                </span>
                            </div>
                            <p class="text-gray-400 mb-6 max-w-md">
                                The ultimate Minecraft SMP experience featuring BLISS SMP game mode with 10 unique gems, custom artifacts, and a thriving community.
                            </p>
                            <div class="flex gap-4">
                                <a href="#" class="social-link w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                </a>
                                <a href="#" class="social-link w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </a>
                                <a href="#" class="social-link w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                                </a>
                                <a href="#" class="social-link w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                            </div>
                        </div>
                        
                        <!-- Quick Links -->
                        <div>
                            <h4 class="font-bold text-lg mb-4">Quick Links</h4>
                            <ul class="space-y-3">
                                <li><a href="#about" class="footer-link text-gray-400 hover:text-white">About Server</a></li>
                                <li><a href="#gems" class="footer-link text-gray-400 hover:text-white">BLISS SMP</a></li>
                                <li><a href="#artifacts" class="footer-link text-gray-400 hover:text-white">Artifacts</a></li>
                                <li><a href="#play" class="footer-link text-gray-400 hover:text-white">How to Join</a></li>
                                <li><a href="#donate" class="footer-link text-gray-400 hover:text-white">Support Us</a></li>
                            </ul>
                        </div>
                        
                        <!-- Server Info -->
                        <div>
                            <h4 class="font-bold text-lg mb-4">Server Info</h4>
                            <ul class="space-y-3 text-gray-400">
                                <li class="flex items-center gap-2">
                                    <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    Status: Online
                                </li>
                                <li>IP: play.swiftcraftsmp.net</li>
                                <li>Version: 1.20+</li>
                                <li>Players: 200+</li>
                                <li>Location: EU/US</li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Bottom Bar -->
                    <div class="pt-8 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p class="text-gray-500 text-sm">
                            © 2024 SwiftCraft SMP. Not affiliated with Mojang Studios.
                        </p>
                        <div class="flex gap-6 text-sm">
                            <a href="#" class="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
                            <a href="#" class="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
                            <a href="#" class="text-gray-500 hover:text-gray-300 transition-colors">Rules</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);