// Gem Data
const gems = [
    {
        id: 'ruby',
        name: 'Ruby of Vitality',
        color: '#ef4444',
        icon: 'heart',
        ability: 'Life Force',
        description: 'Grants regeneration and increased maximum health. Players with this gem heal nearby allies.',
        stats: ['+50% Health Regeneration', '+20 Max Hearts', 'Aura: Heal allies within 10 blocks'],
        rarity: 'Legendary'
    },
    {
        id: 'sapphire',
        name: 'Sapphire of Tides',
        color: '#3b82f6',
        icon: 'droplet',
        ability: 'Aquatic Mastery',
        description: 'Complete control over water. Breathe underwater, swim at incredible speeds, and summon tidal waves.',
        stats: ['Permanent Water Breathing', '+300% Swim Speed', 'Ability: Tidal Wave Attack'],
        rarity: 'Epic'
    },
    {
        id: 'emerald',
        name: 'Emerald of Fortune',
        color: '#22c55e',
        icon: 'dollar-sign',
        ability: 'Prosperity',
        description: 'The ultimate merchant\'s gem. Better trades, rare drops, and the ability to detect nearby ores.',
        stats: ['50% Better Villager Trades', 'Ore Detection Radar', 'Double Loot Drops'],
        rarity: 'Rare'
    },
    {
        id: 'amethyst',
        name: 'Amethyst of Void',
        color: '#a855f7',
        icon: 'moon',
        ability: 'Dimensional Shift',
        description: 'Phase through walls, teleport short distances, and resist void damage. Master of spatial manipulation.',
        stats: ['Wall Phasing (5s cooldown)', 'Teleport: 50 blocks', 'Void Immunity'],
        rarity: 'Legendary'
    },
    {
        id: 'topaz',
        name: 'Topaz of Storms',
        color: '#f59e0b',
        icon: 'zap',
        ability: 'Thunder Lord',
        description: 'Command the power of lightning. Strike enemies from afar and gain superhuman speed.',
        stats: ['Summon Lightning', '+100% Movement Speed', 'Electrified Weapon Attacks'],
        rarity: 'Epic'
    },
    {
        id: 'diamond',
        name: 'Diamond of Aegis',
        color: '#06b6d4',
        icon: 'shield',
        ability: 'Invincible Defense',
        description: 'Unbreakable defense. Create force fields, reflect projectiles, and gain massive damage reduction.',
        stats: ['50% Damage Reduction', 'Projectile Reflection', 'Ability: Dome Shield'],
        rarity: 'Legendary'
    },
    {
        id: 'opal',
        name: 'Opal of Illusion',
        color: '#f472b6',
        icon: 'eye-off',
        ability: 'Reality Warp',
        description: 'Deceive enemies with clones, become invisible, and create realistic holograms.',
        stats: ['Permanent Invisibility Option', 'Summon 3 Clones', 'Create Holographic Traps'],
        rarity: 'Epic'
    },
    {
        id: 'onyx',
        name: 'Onyx of Shadows',
        color: '#374151',
        icon: 'cloud',
        ability: 'Night Eternal',
        description: 'Embrace darkness. See perfectly in the dark, become stronger at night, and summon shadow minions.',
        stats: ['Permanent Night Vision', '+100% Damage at Night', 'Summon Shadow Warriors'],
        rarity: 'Rare'
    },
    {
        id: 'garnet',
        name: 'Garnet of Fury',
        color: '#dc2626',
        icon: 'flame',
        ability: 'Berserker Rage',
        description: 'Unleash devastating power. The lower your health, the stronger you become. Fire immunity included.',
        stats: ['Damage Scales with Missing HP', 'Fire Immunity', 'Explosive Finisher Attacks'],
        rarity: 'Epic'
    },
    {
        id: 'pearl',
        name: 'Pearl of Harmony',
        color: '#f8fafc',
        icon: 'sun',
        ability: 'Balance Keeper',
        description: 'The ultimate support gem. Buff allies, cleanse debuffs, and resurrect fallen companions once per day.',
        stats: ['Mass Buff: All Stats +30%', 'Cleanse All Debuffs', '1x Daily Resurrection'],
        rarity: 'Legendary'
    }
];

// Artifact Data
const artifacts = [
    {
        name: 'Celestial Compass',
        icon: 'compass',
        description: 'Points to the nearest active gem holder. Essential for PvP and treasure hunting.',
        obtain: 'Complete the "Star Navigator" quest line'
    },
    {
        name: 'Ender Satchel',
        icon: 'package',
        description: 'Portable ender chest with double capacity. Access your items anywhere, anytime.',
        obtain: 'Dropped by the Ender Dragon in BLISS SMP'
    },
    {
        name: 'Chronos Hourglass',
        icon: 'clock',
        description: 'Slow time for 5 seconds once per hour. Perfect for escaping danger or landing critical hits.',
        obtain: 'Found in Ancient City loot chests'
    },
    {
        name: 'Soul Anchor',
        icon: 'anchor',
        description: 'Set a respawn point anywhere in the world. Never lose your items again.',
        obtain: 'Crafted with 8 Netherite Ingots and 1 Echo Shard'
    },
    {
        name: 'Mystic Map',
        icon: 'map',
        description: 'Reveals all nearby structures, ores, and player bases within 500 blocks.',
        obtain: 'Reward for discovering all 10 gems'
    },
    {
        name: 'Inferno Pickaxe',
        icon: 'tool',
        description: 'Mines entire veins automatically. Smelts ores instantly. Unbreakable.',
        obtain: 'Blacksmith achievement: Mine 100,000 blocks'
    },
    {
        name: 'Wings of Icarus',
        icon: 'feather',
        description: 'True flight without elytra. Limited durability that regenerates over time.',
        obtain: 'Defeat the Warden in under 2 minutes'
    },
    {
        name: 'Tome of Knowledge',
        icon: 'book',
        description: 'Records all discovered recipes and grants experience for each new item crafted.',
        obtain: 'Given to players who reach level 100'
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderGems();
    renderArtifacts();
    createParticles();
    updatePlayerCount();
    setInterval(updatePlayerCount, 30000); // Update every 30 seconds
});

// Render Gems
function renderGems() {
    const grid = document.getElementById('gemsGrid');
    if (!grid) return;

    gems.forEach((gem, index) => {
        const card = document.createElement('div');
        card.className = 'gem-card p-6 rounded-2xl bg-dark-800/50 border border-dark-700 cursor-pointer group';
        card.style.animationDelay = `${index * 0.1}s`;
        card.onclick = () => openGemModal(gem);
        
        card.innerHTML = `
            <div class="text-center">
                <div class="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-all group-hover:scale-110" 
                     style="background: linear-gradient(135deg, ${gem.color}20, ${gem.color}40); box-shadow: 0 0 30px ${gem.color}30;">
                    <i data-feather="${gem.icon}" class="w-10 h-10" style="color: ${gem.color};"></i>
                </div>
                <h3 class="font-bold text-lg mb-1 group-hover:text-primary-400 transition-colors">${gem.name}</h3>
                <span class="text-xs uppercase tracking-wider" style="color: ${gem.color};">${gem.rarity}</span>
                <p class="text-gray-400 text-sm mt-3 line-clamp-2">${gem.description}</p>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    feather.replace();
}

// Render Artifacts
function renderArtifacts() {
    const grid = document.getElementById('artifactsGrid');
    if (!grid) return;

    artifacts.forEach((artifact, index) => {
        const card = document.createElement('div');
        card.className = 'artifact-glow p-6 rounded-2xl bg-dark-800/50 border border-dark-700 group';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="flex items-start gap-4">
                <div class="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center shrink-0 group-hover:bg-primary-500/30 transition-colors">
                    <i data-feather="${artifact.icon}" class="w-7 h-7 text-primary-400"></i>
                </div>
                <div>
                    <h3 class="font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors">${artifact.name}</h3>
                    <p class="text-gray-400 text-sm mb-3">${artifact.description}</p>
                    <div class="flex items-center gap-2 text-xs text-secondary-400">
                        <i data-feather="info" class="w-3 h-3"></i>
                        <span>${artifact.obtain}</span>
                    </div>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    feather.replace();
}

// Gem Modal
function openGemModal(gem) {
    const modal = document.getElementById('gemModal');
    const content = document.getElementById('gemModalContent');
    const body = document.getElementById('gemModalBody');
    
    body.innerHTML = `
        <div class="text-center mb-6">
            <div class="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center mb-4" 
                 style="background: linear-gradient(135deg, ${gem.color}20, ${gem.color}40); box-shadow: 0 0 40px ${gem.color}40;">
                <i data-feather="${gem.icon}" class="w-12 h-12" style="color: ${gem.color};"></i>
            </div>
            <h2 class="text-2xl font-bold mb-1">${gem.name}</h2>
            <span class="text-sm uppercase tracking-wider" style="color: ${gem.color};">${gem.rarity} Gem</span>
        </div>
        <div class="space-y-4">
            <div>
                <h4 class="text-sm uppercase tracking-wider text-gray-500 mb-2">Ability</h4>
                <p class="text-lg font-semibold text-primary-400">${gem.ability}</p>
            </div>
            <div>
                <h4 class="text-sm uppercase tracking-wider text-gray-500 mb-2">Description</h4>
                <p class="text-gray-300">${gem.description}</p>
            </div>
            <div>
                <h4 class="text-sm uppercase tracking-wider text-gray-500 mb-2">Stats</h4>
                <ul class="space-y-2">
                    ${gem.stats.map(stat => `
                        <li class="flex items-center gap-2 text-gray-300">
                            <i data-feather="check-circle" class="w-4 h-4 text-green-400"></i>
                            ${stat}
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);
    
    feather.replace();
}

function closeGemModal() {
    const modal = document.getElementById('gemModal');
    const content = document.getElementById('gemModalContent');
    
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300);
}

// Copy Server IP
function copyIp() {
    const ip = 'play.swiftcraftsmp.net';
    navigator.clipboard.writeText(ip).then(() => {
        const btn = document.querySelector('button[onclick="copyIp()"]');
        const original = btn.innerHTML;
        btn.innerHTML = '<i data-feather="check" class="w-5 h-5 text-green-400"></i>';
        feather.replace();
        setTimeout(() => {
            btn.innerHTML = original;
            feather.replace();
        }, 2000);
    });
}

// Create Floating Particles
function createParticles() {
    const container = document.querySelector('body');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 8}s`;
        particle.style.animationDuration = `${8 + Math.random() * 4}s`;
        container.appendChild(particle);
    }
}

// Simulate Player Count
function updatePlayerCount() {
    const element = document.getElementById('playerCount');
    if (!element) return;
    
    const baseCount = 200;
    const variance = Math.floor(Math.random() * 100);
    element.textContent = baseCount + variance;
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeGemModal();
    }
});