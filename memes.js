// SUOLALA - Meme Wall
"use strict";

document.addEventListener('DOMContentLoaded', function() {
    // Navigation Elements
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuOverlay.style.display = 'block';
        setTimeout(() => {
            mobileMenuOverlay.style.opacity = '1';
            mobileMenuOverlay.querySelector('.mobile-menu-container').style.transform = 'translateY(0)';
        }, 10);
    });

    mobileMenuClose.addEventListener('click', closeMobileMenu);

    mobileMenuOverlay.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) {
            closeMobileMenu();
        }
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    function closeMobileMenu() {
        mobileMenuOverlay.style.opacity = '0';
        mobileMenuOverlay.querySelector('.mobile-menu-container').style.transform = 'translateY(100%)';
        setTimeout(() => {
            mobileMenuOverlay.style.display = 'none';
        }, 300);
    }

    // Smooth scrolling
    function setupSmoothScrolling() {
        const allLinks = [...navLinks, ...mobileNavLinks];
        
        allLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href.startsWith('#') && !href.includes('.html')) {
                    e.preventDefault();
                    
                    const targetSection = document.querySelector(href);
                    
                    if (targetSection) {
                        window.scrollTo({
                            top: targetSection.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    setupSmoothScrolling();

    // Translation System
    const translations = {
        en: {
            // Navigation
            'nav.title': 'SUOLALA',
            'nav.home': 'Home',
            'nav.token': 'Token',
            'nav.news': 'News',
            'nav.nfts': 'NFTs',
            'nav.roadmap': 'Roadmap',
            'nav.memes': 'Meme Wall',
            
            // Hero
            'hero.community': 'COMMUNITY',
            'hero.title': 'SUOLALA Meme Wall',
            'hero.subtitle': 'Community-created memes about the SUOLALA project',
            'hero.upload': 'Upload Meme',
            'hero.refresh': 'Refresh',
            
            // Stats
            'stats.total': 'Total Memes',
            'stats.today': 'Today',
            'stats.pending': 'Pending Review',
            
            // Rules
            'rules.title': 'Community Guidelines',
            'rules.1': 'No political, NSFW, or offensive content',
            'rules.2': 'Keep it fun and relevant to SUOLALA',
            'rules.3': 'Respect other community members',
            'rules.4': 'All memes require admin approval before appearing publicly',
            'rules.5': 'Upload JPG, PNG, or WebP images (max 5MB)',
            'rules.note': 'Memes are manually reviewed within 24 hours.',
            
            // Loading
            'loading': 'Loading community memes...',
            
            // Empty state
            'empty.title': 'No memes yet',
            'empty.subtitle': 'Be the first to upload a meme!',
            
            // Modal
            'modal.title': 'Upload Meme',
            'modal.subtitle': 'Share your creativity with the SUOLALA community',
            'modal.caption': 'Caption (optional)',
            'modal.name': 'Your Name (optional)',
            'modal.cancel': 'Cancel',
            'modal.submit': 'Submit for Review',
            
            // Upload
            'upload.drop': 'Drop your meme here',
            'upload.or': 'or',
            'upload.browse': 'Browse Files',
            'upload.hint': 'JPG, PNG, WebP up to 5MB',
            
            // Success
            'success.title': 'Thanks for Sharing!',
            'success.message': 'Your meme will appear after admin approval (usually within 24 hours).',
            'success.close': 'Got it!',
            
            // Footer
            'footer.disclaimer1': 'This meme wall is for entertainment only. All submissions are reviewed by moderators. SUOLALA reserves the right to remove any content.',
            'footer.disclaimer2': 'Built on Solana with ❤️'
        },
        zh: {
            // Navigation
            'nav.title': '索拉拉',
            'nav.home': '首页',
            'nav.token': '代币',
            'nav.news': '新闻',
            'nav.nfts': 'NFTs',
            'nav.roadmap': '路线图',
            'nav.memes': '表情包墙',
            
            // Hero
            'hero.community': '社区',
            'hero.title': '索拉拉表情包墙',
            'hero.subtitle': '社区创建的索拉拉项目表情包',
            'hero.upload': '上传表情包',
            'hero.refresh': '刷新',
            
            // Stats
            'stats.total': '总表情包',
            'stats.today': '今日',
            'stats.pending': '待审核',
            
            // Rules
            'rules.title': '社区准则',
            'rules.1': '禁止政治、NSFW或冒犯性内容',
            'rules.2': '保持有趣并与索拉拉相关',
            'rules.3': '尊重其他社区成员',
            'rules.4': '所有表情包需要管理员审核后才能公开显示',
            'rules.5': '上传JPG、PNG或WebP图片（最大5MB）',
            'rules.note': '表情包将在24小时内手动审核。',
            
            // Loading
            'loading': '加载社区表情包...',
            
            // Empty state
            'empty.title': '还没有表情包',
            'empty.subtitle': '成为第一个上传表情包的人！',
            
            // Modal
            'modal.title': '上传表情包',
            'modal.subtitle': '与索拉拉社区分享你的创意',
            'modal.caption': '标题（可选）',
            'modal.name': '你的名字（可选）',
            'modal.cancel': '取消',
            'modal.submit': '提交审核',
            
            // Upload
            'upload.drop': '将表情包拖放到这里',
            'upload.or': '或',
            'upload.browse': '浏览文件',
            'upload.hint': 'JPG、PNG、WebP 最大5MB',
            
            // Success
            'success.title': '感谢分享！',
            'success.message': '你的表情包将在管理员审核后显示（通常在24小时内）。',
            'success.close': '知道了！',
            
            // Footer
            'footer.disclaimer1': '此表情包墙仅供娱乐。所有提交内容均由版主审核。索拉拉保留删除任何内容的权利。',
            'footer.disclaimer2': '基于Solana构建 ❤️'
        }
    };

    let currentLanguage = 'en';

    // Translation function
    function translatePage(lang) {
        currentLanguage = lang;
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        if (lang === 'en') {
            document.getElementById('langEn').classList.add('active');
        } else {
            document.getElementById('langZh').classList.add('active');
        }
        
        // Save to localStorage
        localStorage.setItem('suolala-language', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }

    // Language toggle setup
    const langEnBtn = document.getElementById('langEn');
    const langZhBtn = document.getElementById('langZh');
    
    // Load saved language or default to English
    const savedLang = localStorage.getItem('suolala-language') || 'en';
    translatePage(savedLang);
    
    langEnBtn.addEventListener('click', () => translatePage('en'));
    langZhBtn.addEventListener('click', () => translatePage('zh'));

    // Meme Wall State
    const state = {
        approvedMemes: [],
        pendingMemes: [],
        totalMemes: 0,
        todayMemes: 0
    };

    // Elements
    const elements = {
        memesGrid: document.getElementById('memesGrid'),
        loadingState: document.getElementById('loadingState'),
        emptyState: document.getElementById('emptyState'),
        totalMemes: document.getElementById('totalMemes'),
        todayMemes: document.getElementById('todayMemes'),
        pendingMemes: document.getElementById('pendingMemes'),
        uploadMemeBtn: document.getElementById('uploadMemeBtn'),
        refreshMemesBtn: document.getElementById('refreshMemesBtn'),
        uploadModal: document.getElementById('uploadModal'),
        successModal: document.getElementById('successModal'),
        closeModalBtn: document.getElementById('closeModalBtn'),
        cancelBtn: document.getElementById('cancelBtn'),
        successCloseBtn: document.getElementById('successCloseBtn'),
        fileSelectBtn: document.getElementById('fileSelectBtn'),
        memeFile: document.getElementById('memeFile'),
        uploadArea: document.getElementById('uploadArea'),
        previewContainer: document.getElementById('previewContainer'),
        imagePreview: document.getElementById('imagePreview'),
        removeImageBtn: document.getElementById('removeImageBtn'),
        memeCaption: document.getElementById('memeCaption'),
        uploaderName: document.getElementById('uploaderName'),
        submitBtn: document.getElementById('submitBtn'),
        memeUploadForm: document.getElementById('memeUploadForm'),
        charCount: document.getElementById('charCount')
    };

    // Sample approved memes (in production, these would come from a backend)
    const sampleMemes = [
        {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=400&fit=crop',
            caption: 'When you buy SUOLALA at the right time 🚀',
            author: 'CryptoChad',
            date: '2 hours ago',
            likes: 42
        },
        {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1620336655055-bd87c5d1d73f?w-400&h=500&fit=crop',
            caption: 'SUOLALA to the moon! 🌕',
            author: 'MoonBoy',
            date: '5 hours ago',
            likes: 28
        },
        {
            id: 3,
            imageUrl: 'https://images.unsplash.com/photo-1620336655055-bd87c5d1d73f?w=400&h=400&fit=crop',
            caption: 'Me checking the chart every 5 minutes 📈',
            author: 'ChartAddict',
            date: '1 day ago',
            likes: 65
        },
        {
            id: 4,
            imageUrl: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=500&fit=crop',
            caption: 'SUOLALA community vibes 🔥',
            author: 'SolanaFan',
            date: '2 days ago',
            likes: 89
        },
        {
            id: 5,
            imageUrl: 'https://images.unsplash.com/photo-1620336655055-bd87c5d1d73f?w=400&h=400&fit=crop',
            caption: 'When someone says "memecoins have no utility" 🤡',
            author: 'UtilityMaxi',
            date: '3 days ago',
            likes: 112
        },
        {
            id: 6,
            imageUrl: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=400&fit=crop',
            caption: 'The SUOLALA dance 💃',
            author: 'DanceMaster',
            date: '4 days ago',
            likes: 74
        }
    ];

    // Sample pending memes
    const samplePending = [
        {
            id: 101,
            imageUrl: '',
            caption: 'SUOLALA vs other memecoins',
            author: 'Anonymous',
            date: 'Just now'
        },
        {
            id: 102,
            imageUrl: '',
            caption: 'When gas fees are low 😎',
            author: 'GasWatcher',
            date: '30 minutes ago'
        }
    ];

    // Initialize meme wall
    function init() {
        loadMemesFromStorage();
        setupEventListeners();
        createParticles();
        updateStats();
        setTimeout(() => {
            renderMemes();
        }, 1000);
    }

    // Create background particles
    function createParticles() {
        const particlesContainer = document.querySelector('.particles-container');
        if (!particlesContainer) return;
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (10 + Math.random() * 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // Load memes from localStorage or use samples
    function loadMemesFromStorage() {
        const savedApproved = localStorage.getItem('suolala-approved-memes');
        const savedPending = localStorage.getItem('suolala-pending-memes');
        
        if (savedApproved) {
            state.approvedMemes = JSON.parse(savedApproved);
        } else {
            state.approvedMemes = sampleMemes;
            localStorage.setItem('suolala-approved-memes', JSON.stringify(sampleMemes));
        }
        
        if (savedPending) {
            state.pendingMemes = JSON.parse(savedPending);
        } else {
            state.pendingMemes = samplePending;
            localStorage.setItem('suolala-pending-memes', JSON.stringify(samplePending));
        }
        
        // Calculate stats
        state.totalMemes = state.approvedMemes.length;
        state.todayMemes = Math.floor(Math.random() * 5) + 3; // Simulated
    }

    // Update statistics
    function updateStats() {
        elements.totalMemes.textContent = state.totalMemes;
        elements.todayMemes.textContent = state.todayMemes;
        elements.pendingMemes.textContent = state.pendingMemes.length;
    }

    // Render memes grid
    function renderMemes() {
        elements.loadingState.style.display = 'none';
        
        if (state.approvedMemes.length === 0) {
            elements.emptyState.style.display = 'block';
            return;
        }
        
        elements.emptyState.style.display = 'none';
        elements.memesGrid.innerHTML = '';
        
        // Shuffle memes for variety
        const shuffledMemes = [...state.approvedMemes].sort(() => Math.random() - 0.5);
        
        shuffledMemes.forEach(meme => {
            const memeCard = createMemeCard(meme);
            elements.memesGrid.appendChild(memeCard);
        });
    }

    // Create meme card HTML
    function createMemeCard(meme) {
        const card = document.createElement('div');
        card.className = 'meme-card';
        card.dataset.id = meme.id;
        
        const caption = meme.caption || 'SUOLALA meme';
        const author = meme.author || 'Anonymous';
        const date = meme.date || 'Recently';
        
        card.innerHTML = `
            <div class="meme-image-container">
                <img src="${meme.imageUrl}" alt="${caption}" class="meme-image" loading="lazy">
            </div>
            <div class="meme-info">
                <p class="meme-caption">${escapeHtml(caption)}</p>
                <div class="meme-meta">
                    <div class="meme-author">
                        <div class="author-avatar">${author.charAt(0).toUpperCase()}</div>
                        <span>${escapeHtml(author)}</span>
                    </div>
                    <div class="meme-date">${date}</div>
                </div>
            </div>
        `;
        
        return card;
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Open upload modal
    function openUploadModal() {
        resetUploadForm();
        elements.uploadModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close upload modal
    function closeUploadModal() {
        elements.uploadModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Open success modal
    function openSuccessModal() {
        closeUploadModal();
        elements.successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close success modal
    function closeSuccessModal() {
        elements.successModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Reset upload form
    function resetUploadForm() {
        elements.memeFile.value = '';
        elements.previewContainer.style.display = 'none';
        elements.imagePreview.src = '';
        elements.memeCaption.value = '';
        elements.uploaderName.value = '';
        elements.submitBtn.disabled = true;
        updateCharCount();
        elements.uploadArea.classList.remove('dragover');
    }

    // Update character count
    function updateCharCount() {
        const count = elements.memeCaption.value.length;
        elements.charCount.textContent = count;
        
        if (count > 200) {
            elements.charCount.style.color = 'var(--warning)';
        } else {
            elements.charCount.style.color = 'var(--text-muted)';
        }
    }

    // Handle file selection
    function handleFileSelect(file) {
        if (!file) return;
        
        // Check file type
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        if (!validTypes.includes(file.type)) {
            alert('Please upload a valid image file (JPG, PNG, or WebP)');
            return;
        }
        
        // Check file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
            alert('File size must be less than 5MB');
            return;
        }
        
        // Create preview
        const reader = new FileReader();
        reader.onload = function(e) {
            elements.imagePreview.src = e.target.result;
            elements.previewContainer.style.display = 'block';
            elements.submitBtn.disabled = false;
        };
        reader.readAsDataURL(file);
    }

    // Submit meme for review
    function submitMeme() {
        const caption = elements.memeCaption.value.trim();
        const author = elements.uploaderName.value.trim() || 'Anonymous';
        
        // Create new pending meme
        const newMeme = {
            id: Date.now(),
            imageUrl: elements.imagePreview.src || '',
            caption: caption || 'SUOLALA meme',
            author: author,
            date: 'Just now'
        };
        
        // Add to pending memes
        state.pendingMemes.push(newMeme);
        localStorage.setItem('suolala-pending-memes', JSON.stringify(state.pendingMemes));
        
        // Update stats
        updateStats();
        
        // Show success message
        openSuccessModal();
    }

    // Setup event listeners
    function setupEventListeners() {
        // Upload button
        elements.uploadMemeBtn.addEventListener('click', openUploadModal);
        
        // Refresh button
        elements.refreshMemesBtn.addEventListener('click', () => {
            elements.loadingState.style.display = 'block';
            elements.emptyState.style.display = 'none';
            setTimeout(() => {
                renderMemes();
            }, 800);
        });
        
        // Modal close buttons
        elements.closeModalBtn.addEventListener('click', closeUploadModal);
        elements.cancelBtn.addEventListener('click', closeUploadModal);
        elements.successCloseBtn.addEventListener('click', closeSuccessModal);
        
        // Close modals on overlay click
        elements.uploadModal.addEventListener('click', (e) => {
            if (e.target === elements.uploadModal) {
                closeUploadModal();
            }
        });
        
        elements.successModal.addEventListener('click', (e) => {
            if (e.target === elements.successModal) {
                closeSuccessModal();
            }
        });
        
        // File selection
        elements.fileSelectBtn.addEventListener('click', () => {
            elements.memeFile.click();
        });
        
        elements.memeFile.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFileSelect(e.target.files[0]);
            }
        });
        
        // Remove image
        elements.removeImageBtn.addEventListener('click', () => {
            elements.previewContainer.style.display = 'none';
            elements.memeFile.value = '';
            elements.submitBtn.disabled = true;
        });
        
        // Drag and drop
        elements.uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            elements.uploadArea.classList.add('dragover');
        });
        
        elements.uploadArea.addEventListener('dragleave', () => {
            elements.uploadArea.classList.remove('dragover');
        });
        
        elements.uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            elements.uploadArea.classList.remove('dragover');
            
            if (e.dataTransfer.files.length > 0) {
                handleFileSelect(e.dataTransfer.files[0]);
            }
        });
        
        // Character count
        elements.memeCaption.addEventListener('input', updateCharCount);
        
        // Form submission
        elements.memeUploadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            submitMeme();
        });
        
        // Escape key to close modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (elements.uploadModal.classList.contains('active')) {
                    closeUploadModal();
                }
                if (elements.successModal.classList.contains('active')) {
                    closeSuccessModal();
                }
            }
        });
    }

    // Initialize the app
    init();
});