class CustomNavbar extends HTMLElement {
    constructor() {
        super();
        this.isScrolled = false;
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
        this.setupScrollListener();
    }

    setupScrollListener() {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY > 50;
            if (scrolled !== this.isScrolled) {
                this.isScrolled = scrolled;
                this.render();
            }
        });
    }

    toggleMobileMenu() {
        const menu = this.shadowRoot.getElementById('mobileMenu');
        menu.classList.toggle('hidden');
    }

    render() {
        const bgClass = this.isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent';
        
        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://cdn.tailwindcss.com');
                
                :host {
                    display: block;
                }
                
                nav {
                    transition: all 0.3s ease;
                }
                
                .nav-link {
                    position: relative;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #0ea5e9, #d946ef);
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .logo-glow {
                    animation: logo-pulse 2s ease-in-out infinite;
                }
                
                @keyframes logo-pulse {
                    0%, 100% { filter: drop-shadow(0 0 5px rgba(14, 165, 233, 0.5)); }
                    50% { filter: drop-shadow(0 0 15px rgba(217, 70, 239, 0.5)); }
                }
            </style>
            
            <nav class="fixed top-0 left-0 right-0 z-50 ${bgClass}">
                <div class="container mx-auto px-4">
                    <div class="flex items-center justify-between h-16 md:h-20">
                        <!-- Logo -->
                        <a href="#" class="flex items-center gap-3 logo-glow">
                            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                            </div>
                            <span class="font-bold text-xl hidden sm:block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                                SWIFT CRAFT
                            </span>
                        </a>
                        
                        <!-- Desktop Navigation -->
                        <div class="hidden md:flex items-center gap-8">
                            <a href="#about" class="nav-link text-gray-300 hover:text-white transition-colors text-sm font-medium">About</a>
                            <a href="#gems" class="nav-link text-gray-300 hover:text-white transition-colors text-sm font-medium">BLISS SMP</a>
                            <a href="#artifacts" class="nav-link text-gray-300 hover:text-white transition-colors text-sm font-medium">Artifacts</a>
                            <a href="#play" class="nav-link text-gray-300 hover:text-white transition-colors text-sm font-medium">How to Play</a>
                            <a href="#donate" class="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-secondary-500 hover:to-primary-500 transition-all text-sm font-semibold">
                                Support Us
                            </a>
                        </div>
                        
                        <!-- Mobile Menu Button -->
                        <button class="md:hidden p-2 rounded-lg hover:bg-dark-800 transition-colors" id="menuBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        </button>
                    </div>
                </div>
                
                <!-- Mobile Menu -->
                <div class="hidden md:hidden bg-dark-900/95 backdrop-blur-md border-t border-dark-700" id="mobileMenu">
                    <div class="container mx-auto px-4 py-4 space-y-3">
                        <a href="#about" class="block py-2 text-gray-300 hover:text-white transition-colors">About</a>
                        <a href="#gems" class="block py-2 text-gray-300 hover:text-white transition-colors">BLISS SMP</a>
                        <a href="#artifacts" class="block py-2 text-gray-300 hover:text-white transition-colors">Artifacts</a>
                        <a href="#play" class="block py-2 text-gray-300 hover:text-white transition-colors">How to Play</a>
                        <a href="#donate" class="block py-2 text-primary-400 font-semibold">Support Us</a>
                    </div>
                </div>
            </nav>
        `;

        // Add event listener for mobile menu
        const menuBtn = this.shadowRoot.getElementById('menuBtn');
        if (menuBtn) {
            menuBtn.addEventListener('click', () => this.toggleMobileMenu());
        }
    }
}

customElements.define('custom-navbar', CustomNavbar);