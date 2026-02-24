<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>J.K Music Player - User</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.5/jsmediatags.min.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Outfit', sans-serif;
            background: linear-gradient(135deg, #050505 0%, #0a0a0f 100%);
            color: white;
            height: 100vh;
            overflow: hidden;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes scrollText { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        .marquee { display: inline-block; white-space: nowrap; animation: scrollText 10s linear infinite; padding-left: 100%; }
        
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeIn 0.3s ease-out forwards; }

        .nav-tab { color: #6b7280; padding-bottom: 0.5rem; cursor: pointer; white-space: nowrap; transition: color 0.3s; font-weight: 600; }
        .nav-tab.active { color: var(--accent-color, #a855f7); border-bottom: 2px solid var(--accent-color, #a855f7); }

        #side-drawer {
            position: fixed; top: 0; left: 0; bottom: 0; width: 85%; max-width: 320px;
            background: #121212; z-index: 100;
            transform: translateX(-100%); transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 5px 0 25px rgba(0,0,0,0.5);
            display: flex; flex-direction: column;
        }
        #side-drawer.open { transform: translateX(0); }
        
        #drawer-overlay {
            position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 90;
            opacity: 0; pointer-events: none; transition: opacity 0.3s;
            backdrop-filter: blur(2px);
        }
        #drawer-overlay.visible { opacity: 1; pointer-events: auto; }

        #mini-player { 
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
            transform: translateY(100%);
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: 30;
        }
        #mini-player.show { transform: translateY(0); }
        
        #full-player {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, #18181b 0%, #000000 100%);
            z-index: 50;
            transform: translateY(100%);
            transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1);
            display: flex;
            flex-direction: column;
        }
        #full-player.open { transform: translateY(0); }

        .full-player-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            height: 100%;
            overflow-y: auto;
            padding-bottom: 20px;
        }

        .mini-player-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 16px;
            background: rgba(16, 16, 16, 0.95);
            backdrop-filter: blur(10px);
            border-top: 1px solid rgba(255,255,255,0.1);
        }

        .mini-player-info {
            flex: 1;
            min-width: 0;
            margin-right: 12px;
        }

        .mini-player-title {
            font-size: 14px;
            font-weight: 600;
            color: white;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100%;
        }

        .mini-player-artist {
            font-size: 12px;
            color: #9ca3af;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100%;
        }

        .mini-player-controls {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-shrink: 0;
        }

        .slider-container { 
            padding: 10px 0; 
            cursor: pointer; 
            width: 100%;
        }

        #seek-slider { 
            -webkit-appearance: none; 
            background: linear-gradient(to right, var(--accent-color, #a855f7) 0%, var(--accent-color, #a855f7) 0%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.2) 100%);
            width: 100%; 
            height: 4px;
            border-radius: 2px;
            outline: none;
            transition: background 0.1s ease;
        }

        #seek-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 18px;
            width: 18px;
            border-radius: 50%;
            background: white;
            border: 3px solid var(--accent-color, #a855f7);
            box-shadow: 0 0 15px var(--accent-color, #a855f7);
            cursor: pointer;
            margin-top: -7px;
            transition: all 0.1s;
        }

        #seek-slider:active::-webkit-slider-thumb {
            transform: scale(1.3);
            background: var(--accent-color, #a855f7);
            border: 2px solid white;
        }

        #seek-slider::-webkit-slider-runnable-track {
            height: 4px;
            background: transparent;
            border: none;
        }

        #mini-progress {
            background: linear-gradient(90deg, var(--accent-color, #a855f7), #c084fc);
            height: 100%;
            transition: width 0.1s ease;
        }

        #curr-time, #total-time {
            color: var(--accent-color, #a855f7);
            font-weight: 600;
            text-shadow: 0 0 10px var(--accent-color, #a855f7);
        }

        .song-avatar {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: bold;
            color: white;
            flex-shrink: 0;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        .avatar-blue { background: linear-gradient(135deg, #3b82f6, #2563eb); }
        .avatar-purple { background: linear-gradient(135deg, #a855f7, #9333ea); }
        .avatar-pink { background: linear-gradient(135deg, #ec4899, #db2777); }
        .avatar-green { background: linear-gradient(135deg, #22c55e, #16a34a); }
        .avatar-orange { background: linear-gradient(135deg, #f97316, #ea580c); }
        .avatar-red { background: linear-gradient(135deg, #ef4444, #dc2626); }
        .avatar-indigo { background: linear-gradient(135deg, #6366f1, #4f46e5); }

        #menu-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 60; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
        #menu-overlay.open { opacity: 1; pointer-events: all; }
        #action-menu { position: fixed; bottom: 0; left: 0; width: 100%; background: #121212; border-radius: 20px 20px 0 0; transform: translateY(100%); transition: transform 0.3s; z-index: 61; padding: 20px; padding-bottom: 40px; max-height: 70vh; overflow-y: auto; }
        #action-menu.open { transform: translateY(0); }

        #caption-box {
            position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%);
            width: 90%; text-align: center; pointer-events: auto;
            text-shadow: 0 2px 4px rgba(0,0,0,0.8); z-index: 40;
            transition: opacity 0.3s; opacity: 0;
        }
        #caption-box.visible { opacity: 1; }
        .caption-text {
            background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(8px);
            padding: 12px 24px; border-radius: 16px;
            color: #fff; font-size: 1.25rem; font-weight: 700; line-height: 1.4;
            display: inline-block; box-shadow: 0 8px 32px rgba(0,0,0,0.5);
            border: 1px solid rgba(255,255,255,0.15);
            animation: slideUp 0.3s ease-out;
            max-width: 100%;
        }
        @keyframes slideUp { from { transform: translateY(10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .caption-edit-hint { font-size: 0.75rem; color: var(--accent-color, #a855f7); margin-top: 8px; opacity: 0.9; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }

        .player-overlay-msg {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.7); padding: 10px 20px; border-radius: 20px;
            font-weight: bold; font-size: 1.2rem; pointer-events: none;
            opacity: 0; transition: opacity 0.2s; z-index: 10;
        }
        .player-overlay-msg.visible { opacity: 1; }
        
        .seek-overlay {
            position: absolute; top: 0; bottom: 0; width: 40%; 
            display: flex; align-items: center; justify-content: center;
            font-size: 2rem; color: rgba(255,255,255,0.8);
            opacity: 0; pointer-events: none; transition: opacity 0.2s; z-index: 10;
        }
        .seek-overlay.left { left: 0; background: linear-gradient(to right, rgba(0,0,0,0.5), transparent); }
        .seek-overlay.right { right: 0; background: linear-gradient(to left, rgba(0,0,0,0.5), transparent); }
        .seek-overlay.visible { opacity: 1; }
        
        .full-screen-modal { position: fixed; inset: 0; background: #000; z-index: 70; transform: translateY(100%); transition: transform 0.3s; display: flex; flex-direction: column; }
        .full-screen-modal.open { transform: translateY(0); }
        
        .spinner { width: 40px; height: 40px; border: 4px solid #333; border-top-color: var(--accent-color, #a855f7); border-radius: 50%; animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        .sync-btn {
            background: linear-gradient(to right, var(--accent-color, #a855f7), #ec4899);
            border-radius: 50%; width: 80px; height: 80px;
            display: flex; items-center; justify-content: center;
            font-size: 1.5rem; color: white; box-shadow: 0 0 20px var(--accent-color, #a855f7);
            transition: transform 0.1s;
        }
        .sync-btn:active { transform: scale(0.9); }
        
        #import-modal {
            position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 80;
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            opacity: 0; pointer-events: none; transition: opacity 0.3s;
        }
        #import-modal.open { opacity: 1; pointer-events: all; }

        #push-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #1a1a1a;
            border-left: 4px solid var(--accent-color, #a855f7);
            border-radius: 12px;
            padding: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            z-index: 200;
            transform: translateX(120%);
            transition: transform 0.3s ease;
            max-width: 300px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
        }
        #push-notification.show {
            transform: translateX(0);
        }
        .push-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .push-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--accent-color, #a855f7), #ec4899);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .song-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 16px;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            transition: background 0.2s;
            width: 100%;
        }
        .song-item:active {
            background: rgba(255,255,255,0.05);
        }
        .song-info {
            flex: 1;
            min-width: 0;
            margin: 0 12px;
            overflow: hidden;
        }
        .song-title {
            font-size: 15px;
            font-weight: 600;
            color: white;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;
            max-width: 180px;
            line-height: 1.4;
        }
        .song-artist {
            font-size: 13px;
            color: #9ca3af;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;
            max-width: 180px;
            line-height: 1.4;
        }
        .song-badge {
            font-size: 10px;
            padding: 2px 6px;
            border-radius: 4px;
            background: rgba(168, 85, 247, 0.2);
            color: #a855f7;
            display: inline-block;
            margin-top: 4px;
        }
        .song-actions {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-shrink: 0;
        }

        #content-area {
            width: 100%;
            overflow-x: hidden;
        }

        #song-list, #fav-list {
            width: 100%;
            list-style: none;
        }

        .lofi-actions {
            display: flex;
            gap: 10px;
            margin-top: 15px;
            width: 100%;
        }
        .lofi-actions button, .lofi-actions a {
            flex: 1;
            padding: 12px;
            border-radius: 10px;
            font-weight: bold;
            text-align: center;
            transition: all 0.2s;
        }

        .admin-badge {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(168, 85, 247, 0.2);
            color: #a855f7;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 12px;
            border: 1px solid rgba(168, 85, 247, 0.3);
            z-index: 10;
        }
        .admin-badge a {
            color: white;
            text-decoration: none;
            margin-left: 5px;
        }

        .online-indicator {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            padding: 4px 10px;
            background: rgba(168, 85, 247, 0.2);
            border-radius: 20px;
            font-size: 12px;
            color: #a855f7;
            margin-left: 10px;
        }
        .online-dot {
            width: 8px;
            height: 8px;
            background: #22c55e;
            border-radius: 50%;
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }
    </style>
</head>
<body>
   
    <!-- PUSH NOTIFICATION -->
    <div id="push-notification">
        <div class="push-content">
            <div class="push-icon">
                <i class="fas fa-music text-white"></i>
            </div>
            <div class="flex-1">
                <p class="text-sm font-bold text-white" id="push-title">Now Playing</p>
                <p class="text-xs text-gray-400" id="push-artist">J.K Music Player</p>
            </div>
            <button onclick="hidePush()" class="text-gray-500 hover:text-white">
                <i class="fas fa-times"></i>
            </button>
        </div>
    </div>

    <!-- DRAWER OVERLAY -->
    <div id="drawer-overlay" onclick="closeDrawer()"></div>

    <!-- SIDE DRAWER -->
    <div id="side-drawer" class="p-6 overflow-y-auto no-scrollbar">
        <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                    <i class="fas fa-download text-white text-xs"></i>
                </div>
                <h2 class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Downloader</h2>
            </div>
            <button onclick="closeDrawer()" class="text-gray-400 hover:text-white"><i class="fas fa-times text-xl"></i></button>
        </div>

        <!-- Online Mode Indicator -->
        <div class="bg-white/5 p-3 rounded-xl mb-4 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <span class="online-dot"></span>
                <span class="text-sm font-bold" style="color: var(--accent-color, #a855f7);">Online Mode</span>
            </div>
            <span class="text-xs text-gray-400" id="song-count">0 songs</span>
        </div>

        <!-- YOUTUBE PREVIEW SECTION -->
        <div class="bg-gradient-to-br from-red-900/40 to-purple-900/40 p-5 rounded-2xl border border-red-500/30 mb-6 shadow-lg shadow-red-500/10">
            <div class="flex items-center gap-2 mb-4">
                <div class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse">
                    <i class="fab fa-youtube text-red-400 text-sm"></i>
                </div>
                <div>
                    <label class="text-sm text-white font-bold tracking-wider">YouTube Preview</label>
                    <p class="text-[8px] text-gray-400">Link paste karo, preview suno</p>
                </div>
            </div>
            
            <div class="flex flex-col gap-3">
                <div class="relative">
                    <input type="url" id="youtube-link-input" 
                           placeholder="Paste YouTube link here..." 
                           class="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-sm text-white focus:border-red-500 outline-none transition pr-12">
                    <div class="absolute right-3 top-1/2 -translate-y-1/2">
                        <i class="fab fa-youtube text-red-500 text-lg"></i>
                    </div>
                </div>
                <button onclick="previewYouTubeVideo()" 
                        class="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2">
                    <i class="fas fa-play"></i> Preview in Player
                </button>
            </div>
            
            <div id="preview-status" class="mt-3 text-xs text-center text-green-400 hidden">
                <i class="fas fa-check-circle"></i> Preview added!
            </div>
        </div>
    </div>

    <!-- MAIN CONTENT -->
    <div class="flex flex-col h-full relative z-0" id="main-content">
        <!-- HEADER -->
        <div class="flex justify-between items-center p-5 bg-[#050505]">
            <div class="flex items-center gap-4">
                <button onclick="openDrawer()" class="text-white text-xl relative">
                    <i class="fas fa-bars"></i>
                    <span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                </button>
                
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg flex items-center justify-center overflow-hidden">
                        <i class="fas fa-music text-white text-sm"></i>
                    </div>
                    <div>
                        <h1 id="app-name-header" class="text-xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">J.K Music</h1>
                        <div class="online-indicator">
                            <span class="online-dot"></span>
                            <span>Online Songs</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex gap-4">
                <button onclick="openImportModal()" class="w-10 h-10 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center hover:bg-purple-600 hover:text-white transition">
                    <i class="fas fa-plus"></i>
                </button>
                <button onclick="toggleSearch()" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition">
                    <i class="fas fa-search text-gray-400"></i>
                </button>
            </div>
        </div>

        <div id="search-container" class="px-5 hidden mb-2">
            <div class="bg-gray-900 rounded-xl flex items-center px-4 py-2">
                <i class="fas fa-search text-gray-500 mr-3"></i>
                <input type="text" id="search-input" placeholder="Search songs..." class="bg-transparent border-none outline-none text-white w-full text-sm placeholder-gray-600" oninput="filterSongs(this.value)">
                <button onclick="toggleSearch()" class="text-gray-500 ml-2"><i class="fas fa-times"></i></button>
            </div>
        </div>

        <div class="flex gap-8 px-6 border-b border-gray-900 bg-[#050505] overflow-x-auto no-scrollbar">
            <div class="nav-tab active" onclick="switchTab('songs')">Online Songs</div>
            <div class="nav-tab" onclick="switchTab('favorites')">Favorites</div>
            <div class="nav-tab" onclick="switchTab('artists')">Artists</div>
        </div>

        <div id="content-area" class="flex-1 overflow-y-auto no-scrollbar pb-32 bg-[#050505] relative">
            <!-- EMPTY STATE -->
            <div id="empty-state" class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div class="w-24 h-24 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-purple-900/20 border border-white/5">
                    <i class="fas fa-cloud-upload-alt text-3xl text-purple-500"></i>
                </div>
                <h2 class="text-2xl font-bold mb-2">No Online Songs</h2>
                <p class="text-gray-400 text-sm max-w-xs mx-auto">songs add karo. MP3 files upload karo.</p>
                <a href="admin.html" target="_blank" class="">
                    <i class=" "></i>
                </a>
            </div>

            <div id="loader-state" class="hidden absolute inset-0 flex-col items-center justify-center bg-[#050505] z-50">
                <div class="spinner mb-4"></div>
                <p class="text-gray-400">Loading online songs...</p>
            </div>

            <ul id="song-list" class="pt-2 hidden fade-in"></ul>
            <div id="favorites-view" class="hidden pt-2 fade-in">
                <div class="p-6 text-center text-gray-500" id="no-favs">No favorites yet.</div>
                <ul id="fav-list"></ul>
            </div>
            <div id="artists-view" class="hidden pt-2 fade-in">
                <ul id="artist-list" class="grid grid-cols-2 gap-4 p-4"></ul>
            </div>
        </div>
    </div>

    <!-- IMPORT MODAL -->
    <div id="import-modal" onclick="closeImportModal()">
        <div class="bg-[#121212] p-8 rounded-3xl w-11/12 max-w-md border border-white/10" onclick="event.stopPropagation()">
            <h3 class="text-2xl font-bold mb-2 text-center">Add Local Songs</h3>
            <p class="text-gray-400 text-center mb-8 text-sm">Add MP3 files from your device</p>
            
            <button onclick="triggerFilesInput()" class="w-full bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-xl flex items-center gap-4 mb-4 hover:opacity-90 transition group">
                <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><i class="fas fa-music text-white"></i></div>
                <div class="text-left">
                    <div class="font-bold">Select MP3 Files</div>
                    <div class="text-xs text-white/70">Add to your local library</div>
                </div>
            </button>
            
            <button onclick="clearLocalLibrary()" class="w-full mt-2 p-3 rounded-xl border border-red-900/30 text-red-500 text-xs hover:bg-red-900/10">
                Clear Local Library
            </button>

            <button onclick="closeImportModal()" class="w-full mt-6 text-gray-500 text-sm font-bold">CANCEL</button>
        </div>
    </div>
    
    <input type="file" id="files-input" multiple accept="audio/*" class="hidden" onchange="handleLocalFiles(this.files)" onclick="this.value=null">

    <!-- MINI PLAYER -->
    <div id="mini-player" class="fixed bottom-0 left-0 w-full z-30 cursor-pointer" onclick="openFullPlayer()">
        <div class="absolute top-0 left-0 w-full h-[2px] bg-white/10">
            <div id="mini-progress" class="h-full bg-gradient-to-r from-purple-500 to-purple-400 w-0 transition-all duration-300"></div>
        </div>
        <div class="mini-player-content">
            <div class="flex items-center gap-3 flex-1 min-w-0">
                <div id="mini-img-box" class="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-white font-bold text-xl shrink-0 relative overflow-hidden shadow-lg">
                    <img id="mini-art-img" class="absolute inset-0 w-full h-full object-cover hidden">
                    <span id="mini-initial">-</span>
                </div>
                <div class="mini-player-info">
                    <span id="mini-title" class="mini-player-title">Select a song</span>
                    <span id="mini-artist" class="mini-player-artist">--</span>
                </div>
            </div>
            <div class="mini-player-controls" onclick="event.stopPropagation()">
                <button onclick="playPrev()" class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">
                    <i class="fas fa-step-backward"></i>
                </button>
                <button id="mini-play-btn" onclick="togglePlay()" class="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 transition">
                    <i class="fas fa-play ml-1"></i>
                </button>
                <button onclick="playNext()" class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">
                    <i class="fas fa-step-forward"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- ACTION MENU -->
    <div id="menu-overlay" onclick="closeMenu()"></div>
    <div id="action-menu">
        <h3 class="text-lg font-bold text-white mb-4">Options</h3>
        <button onclick="openImportModal(); closeMenu()" class="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition mb-2 border border-dashed border-white/20">
            <div class="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center"><i class="fas fa-plus"></i></div>
            <div class="text-left"><div class="font-bold">Add Local Songs</div><div class="text-xs text-gray-400">Import MP3 files</div></div>
        </button>
        <button onclick="openSyncStudio()" class="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition mb-2">
            <div class="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center"><i class="fas fa-microphone-alt"></i></div>
            <div class="text-left"><div class="font-bold">Lyrics Studio</div><div class="text-xs text-gray-400">Edit & Sync Manually</div></div>
        </button>
        <button onclick="toggleCaptionMode()" class="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition mb-2">
            <div class="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center"><i class="fas fa-closed-captioning"></i></div>
            <div class="text-left"><div class="font-bold">Show Captions</div><div class="text-xs text-gray-400">Toggle Overlay</div></div>
        </button>
        <button onclick="openLofiMaker()" class="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition mb-2">
            <div class="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center"><i class="fas fa-magic"></i></div>
            <div class="text-left"><div class="font-bold">Slowed + Reverb</div><div class="text-xs text-gray-400">Convert to Lofi</div></div>
        </button>
        <button onclick="deleteSong()" class="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition">
            <div class="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center"><i class="fas fa-trash"></i></div>
            <div class="text-left"><div class="font-bold">Remove</div><div class="text-xs text-gray-400">Delete from list</div></div>
        </button>
    </div>

    <!-- FULL PLAYER -->
    <div id="full-player">
        <div class="full-player-content">
            <!-- Header -->
            <div class="p-6 flex justify-between items-center">
                <button onclick="closeFullPlayer()" class="text-gray-400 p-2"><i class="fas fa-chevron-down text-xl"></i></button>
                <div class="flex flex-col items-center">
                    <span class="text-xs font-bold tracking-[3px] text-purple-400">NOW PLAYING</span>
                    <span id="cc-indicator" class="text-[0.6rem] font-bold text-gray-500 bg-gray-900 px-2 py-0.5 rounded hidden">LYRICS ON</span>
                </div>
                <div class="flex gap-2">
                     <button onclick="openSyncStudio()" class="text-gray-400 p-2 hover:text-white" title="Edit Lyrics"><i class="fas fa-pen"></i></button>
                     <button onclick="openMenuFromPlayer()" class="text-gray-400 p-2"><i class="fas fa-ellipsis-v"></i></button>
                </div>
            </div>

            <!-- Album Art -->
            <div class="flex-1 flex items-center justify-center p-8 relative" id="touch-zone">
                <!-- Overlays -->
                <div id="speed-msg" class="player-overlay-msg flex flex-col items-center"><i class="fas fa-forward text-2xl mb-1 text-purple-400"></i><span>2x Speed</span></div>
                <div id="seek-left" class="seek-overlay left rounded-l-3xl"><div class="flex flex-col items-center"><i class="fas fa-backward"></i><span class="text-xs font-bold mt-1">10s</span></div></div>
                <div id="seek-right" class="seek-overlay right rounded-r-3xl"><div class="flex flex-col items-center"><i class="fas fa-forward"></i><span class="text-xs font-bold mt-1">10s</span></div></div>
                <div id="pause-overlay" class="player-overlay-msg flex flex-col items-center"><i class="fas fa-pause text-2xl mb-1 text-white"></i><span>Paused</span></div>
                <div id="play-overlay" class="player-overlay-msg flex flex-col items-center"><i class="fas fa-play text-2xl mb-1 text-white"></i><span>Play</span></div>
                <div id="swipe-left-overlay" class="player-overlay-msg flex flex-col items-center"><i class="fas fa-arrow-left text-2xl mb-1 text-purple-400"></i><span>Previous</span></div>
                <div id="swipe-right-overlay" class="player-overlay-msg flex flex-col items-center"><i class="fas fa-arrow-right text-2xl mb-1 text-purple-400"></i><span>Next</span></div>

                <!-- Album Art Box -->
                <div class="w-full aspect-square max-w-[280px] rounded-3xl bg-gray-900 shadow-2xl shadow-purple-900/30 overflow-hidden relative border border-white/5 transition-transform duration-200" id="album-art-box">
                    <div id="full-art-bg" class="absolute inset-0 bg-gradient-to-tr from-gray-800 to-black flex items-center justify-center">
                         <span id="full-initial" class="text-9xl font-bold text-white/20">M</span>
                    </div>
                    <img id="full-art-img" class="absolute inset-0 w-full h-full object-cover hidden">
                    
                    <div id="caption-box" onclick="openSyncStudio()">
                        <div class="caption-text" id="caption-text">...</div>
                        <div class="caption-edit-hint">Tap to Sync Lyrics</div>
                    </div>
                </div>
            </div>

            <!-- Song Info -->
            <div class="px-8 mt-2">
                <div class="flex justify-between items-start">
                    <div class="overflow-hidden w-full pr-4">
                        <h2 id="full-title" class="text-2xl font-bold text-white truncate">Song Title</h2>
                        <p id="full-artist" class="text-base text-gray-400 truncate mt-1">Unknown Artist</p>
                    </div>
                    <button id="full-heart-btn" class="text-2xl text-gray-400 transition hover:scale-110"><i class="far fa-heart"></i></button>
                </div>
            </div>

            <!-- Progress Slider -->
            <div class="px-8 mt-6 slider-container">
                <input type="range" id="seek-slider" value="0" class="w-full">
                <div class="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                    <span id="curr-time" class="text-purple-400">0:00</span>
                    <span id="total-time" class="text-purple-400">0:00</span>
                </div>
            </div>

            <!-- Control Buttons -->
            <div class="px-8 pb-10 mt-4 flex items-center justify-between">
                <button onclick="toggleShuffle()" class="text-gray-400 hover:text-white text-xl" id="shuffle-btn"><i class="fas fa-random"></i></button>
                <button onclick="playPrev()" class="text-white hover:text-purple-400 text-3xl"><i class="fas fa-step-backward"></i></button>
                <button id="main-play-btn" onclick="togglePlay()" class="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition text-2xl"><i class="fas fa-play ml-1"></i></button>
                <button onclick="playNext()" class="text-white hover:text-purple-400 text-3xl"><i class="fas fa-step-forward"></i></button>
                <button onclick="toggleRepeat()" class="text-gray-400 hover:text-white text-xl" id="repeat-btn"><i class="fas fa-redo"></i></button>
            </div>
        </div>
    </div>

    <!-- LYRICS STUDIO MODAL -->
    <div id="sync-studio" class="full-screen-modal bg-[#050505]">
        <div class="p-6 flex justify-between items-center border-b border-white/10">
            <button onclick="closeSyncStudio()" class="text-white text-lg font-medium">Cancel</button>
            <span class="font-bold text-green-400">LYRICS STUDIO</span>
            <button onclick="saveLyrics()" class="text-green-400 text-lg font-bold">Save</button>
        </div>
        
        <div id="step-input" class="flex-1 flex flex-col p-6">
            <h3 class="text-white text-xl font-bold mb-2">Step 1: Paste Lyrics</h3>
            <p class="text-gray-500 text-sm mb-4">Paste your lyrics below. Each line will be a separate caption.</p>
            <textarea id="lyrics-input" class="w-full flex-1 bg-gray-900 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4" placeholder="Paste lyrics here..."></textarea>
            <button onclick="startSyncing()" class="w-full bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-green-500 transition">Next: Sync Timing</button>
        </div>

        <div id="step-sync" class="flex-1 flex flex-col items-center justify-center p-6 hidden relative">
            <div class="absolute top-4 right-4 text-xs font-mono text-gray-500" id="sync-time">0:00</div>
            <div class="w-full text-center mb-10 space-y-4">
                <p class="text-gray-500 text-sm">Next Line:</p>
                <div id="sync-next-line" class="text-2xl font-bold text-white px-4 leading-relaxed">...</div>
            </div>
            <button id="sync-tap-btn" onclick="markLine()" class="sync-btn mb-8 relative">
                <i class="fas fa-fingerprint text-3xl"></i>
                <div class="absolute -inset-4 border-2 border-white/20 rounded-full animate-ping"></div>
            </button>
            <p class="text-gray-400 text-sm text-center">Tap button when you hear the line start.</p>
            <div id="sync-progress" class="mt-8 text-xs text-gray-600">Line 0 / 0</div>
        </div>
    </div>

    <!-- LOFI MODAL -->
    <div id="lofi-modal" class="full-screen-modal items-center justify-center p-6">
        <button onclick="closeLofiMaker()" class="absolute top-6 left-6 text-white text-2xl"><i class="fas fa-times"></i></button>
        
        <div class="w-40 h-40 rounded-full border-4 border-purple-500 flex items-center justify-center animate-[spin_6s_linear_infinite] mb-8">
            <i class="fas fa-compact-disc text-6xl text-purple-500"></i>
        </div>
        
        <h2 class="text-2xl font-bold mb-2">Lofi Studio Pro</h2>
        <p id="lofi-status" class="text-gray-400 mb-6 text-center">Convert to Slow & Reverb</p>
        
        <div class="w-full max-w-sm space-y-4 mb-6">
            <div class="bg-white/5 rounded-xl p-4">
                <label class="text-sm text-gray-300 block mb-2">Speed</label>
                <input type="range" id="lofi-speed" min="0.5" max="1" step="0.01" value="0.82" class="w-full">
                <div class="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0.5x</span>
                    <span id="speed-value">0.82x</span>
                    <span>1x</span>
                </div>
            </div>
            
            <div class="bg-white/5 rounded-xl p-4">
                <label class="text-sm text-gray-300 block mb-2">Reverb</label>
                <input type="range" id="lofi-reverb" min="0" max="1" step="0.01" value="0.35" class="w-full">
                <div class="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Min</span>
                    <span id="reverb-value">0.35</span>
                    <span>Max</span>
                </div>
            </div>
        </div>
        
        <div class="flex flex-col w-full max-w-sm gap-3">
            <button id="convert-btn" onclick="processLofi()" class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition">
                <i class="fas fa-magic mr-2"></i>Convert to Lofi
            </button>
            
            <div id="loading-ui" class="hidden flex-col items-center py-4">
                <div class="spinner mb-4"></div>
                <p class="text-gray-400">Processing... (this may take a few seconds)</p>
            </div>
            
            <div id="preview-area" class="hidden flex-col items-center w-full">
                <audio id="lofi-preview-player" controls class="w-full mb-4 rounded-lg"></audio>
                
                <div class="lofi-actions">
                    <a id="save-btn" class="bg-green-600 hover:bg-green-700 text-white" download>
                        <i class="fas fa-download mr-2"></i>Download
                    </a>
                    <button onclick="addLofiToLibrary()" class="bg-purple-600 hover:bg-purple-700 text-white">
                        <i class="fas fa-plus-circle mr-2"></i>Add to Library
                    </button>
                </div>
            </div>
        </div>
    </div>

    <audio id="audio-player"></audio>

    <script>
        // --- USER STATE ---
        let db;
        const DB_NAME = 'JKMusicDB';
        const STORE_NAME = 'songs';
        let allSongs = [];
        let displaySongs = [];
        let adminSongs = [];
        let localSongs = [];
        let favorites = new Set(); 
        let currentPlaylist = []; 
        let currentIndex = 0;
        let isPlaying = false;
        let currentTab = 'songs';
        let selectedMenuIndex = null;
        let lastTap = 0;
        let holdTimer = null;
        let tapTimeout = null;
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartTime = 0;
        let shuffleOn = false;
        let repeatOn = false;
        let originalPlaylist = [];
        let accentColor = '#a855f7';
        
        // Lofi state
        let lofiBlob = null;
        let lofiUrl = null;
        
        const audio = document.getElementById('audio-player');
        const songListEl = document.getElementById('song-list');
        const favListEl = document.getElementById('fav-list');
        const artistListEl = document.getElementById('artist-list');
        const emptyState = document.getElementById('empty-state');
        const miniPlayer = document.getElementById('mini-player');
        const searchInput = document.getElementById('search-input');
        const touchZone = document.getElementById('touch-zone');
        const albumArtBox = document.getElementById('album-art-box');
        const speedMsg = document.getElementById('speed-msg');
        const seekLeft = document.getElementById('seek-left');
        const seekRight = document.getElementById('seek-right');
        const pauseOverlay = document.getElementById('pause-overlay');
        const playOverlay = document.getElementById('play-overlay');
        const swipeLeftOverlay = document.getElementById('swipe-left-overlay');
        const swipeRightOverlay = document.getElementById('swipe-right-overlay');
        const captionBox = document.getElementById('caption-box');
        const captionText = document.getElementById('caption-text');
        const ccIndicator = document.getElementById('cc-indicator');
        const loaderState = document.getElementById('loader-state');
        const sideDrawer = document.getElementById('side-drawer');
        const drawerOverlay = document.getElementById('drawer-overlay');
        const seekSlider = document.getElementById('seek-slider');
        const appNameHeader = document.getElementById('app-name-header');
        const songCountSpan = document.getElementById('song-count');

        const avatarColors = [
            'avatar-blue',
            'avatar-purple',
            'avatar-pink',
            'avatar-green',
            'avatar-orange',
            'avatar-red',
            'avatar-indigo'
        ];

        // Load settings and songs from localStorage (set by admin)
        function loadUserSettings() {
            const savedName = localStorage.getItem('appName');
            if (savedName) {
                appNameHeader.textContent = savedName;
            }
            
            const savedColor = localStorage.getItem('accentColor');
            if (savedColor) {
                accentColor = savedColor;
                document.documentElement.style.setProperty('--accent-color', savedColor);
            }
            
            const savedSpeed = localStorage.getItem('lofiSpeed');
            const savedReverb = localStorage.getItem('lofiReverb');
            if (savedSpeed) document.getElementById('lofi-speed').value = savedSpeed;
            if (savedReverb) document.getElementById('lofi-reverb').value = savedReverb;
            
            // Load admin songs
            const savedSongs = localStorage.getItem('adminSongs');
            if (savedSongs) {
                adminSongs = JSON.parse(savedSongs);
                loadAdminSongs();
            }
            
            // Load local songs from IndexedDB
            loadLocalSongs();
        }

        function loadAdminSongs() {
            allSongs = adminSongs.map(song => ({
                id: song.id,
                name: song.title,
                title: song.title,
                artist: song.artist,
                audioData: song.audioData,
                isAdmin: true,
                isOnline: true
            }));
            
            // Add local songs
            allSongs = [...allSongs, ...localSongs];
            
            displaySongs = allSongs;
            currentPlaylist = allSongs;
            originalPlaylist = allSongs;
            
            updateSongCount();
            renderSongs();
            
            if (allSongs.length > 0) {
                emptyState.classList.add('hidden');
                songListEl.classList.remove('hidden');
            }
        }

        function updateSongCount() {
            const onlineCount = adminSongs.length;
            songCountSpan.textContent = onlineCount + ' online songs';
        }

        // --- INDEXED DB FOR LOCAL SONGS ---
        async function openDB() {
            return new Promise((resolve, reject) => {
                const request = indexedDB.open(DB_NAME, 1);
                request.onupgradeneeded = (e) => {
                    db = e.target.result;
                    if (!db.objectStoreNames.contains(STORE_NAME)) { 
                        db.createObjectStore(STORE_NAME, { autoIncrement: true }); 
                    }
                };
                request.onsuccess = (e) => { db = e.target.result; resolve(db); };
                request.onerror = (e) => reject(e);
            });
        }

        async function saveLocalSongToDB(file) {
            if(!db) await openDB();
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            return new Promise((resolve) => {
                const request = store.put(file);
                request.onsuccess = () => resolve();
            });
        }

        async function loadLocalSongs() {
            if(!db) await openDB();
            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const request = store.getAll();
            request.onsuccess = () => {
                localSongs = (request.result || []).map((file, index) => ({
                    id: 'local_' + index,
                    name: file.name,
                    title: file.name.replace('.mp3', ''),
                    artist: 'Local File',
                    file: file,
                    isLocal: true,
                    isOnline: false
                }));
                
                // Reload all songs
                loadAdminSongs();
            };
        }

        // Handle local files upload
        function handleLocalFiles(files) {
            const fileArray = Array.from(files).filter(f => f.type.includes('audio') || f.name.endsWith('.mp3'));
            
            Promise.all(fileArray.map(file => saveLocalSongToDB(file))).then(() => {
                loadLocalSongs();
                closeImportModal();
                alert('Local songs added!');
            });
        }

        function clearLocalLibrary() {
            if (confirm('Delete all local songs?')) {
                openDB().then(() => {
                    const tx = db.transaction(STORE_NAME, 'readwrite');
                    const store = tx.objectStore(STORE_NAME);
                    store.clear();
                    tx.oncomplete = () => {
                        localSongs = [];
                        loadAdminSongs();
                        alert('Local library cleared');
                    };
                });
            }
        }

        // --- PUSH NOTIFICATION ---
        function checkNotificationPermission() {
            if ('Notification' in window) {
                if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
                    Notification.requestPermission();
                }
            }
        }

        function showPushNotification(title, artist) {
            document.getElementById('push-title').textContent = title;
            document.getElementById('push-artist').textContent = artist;
            document.getElementById('push-notification').classList.add('show');
            
            setTimeout(() => {
                hidePush();
            }, 3000);
            
            if ('Notification' in window && Notification.permission === 'granted') {
                new Notification('J.K Music Player', {
                    body: `Now playing: ${title} - ${artist}`,
                    icon: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23a855f7\'%3E%3Cpath d=\'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z\'/%3E%3C/svg%3E'
                });
            }
        }

        function hidePush() {
            document.getElementById('push-notification').classList.remove('show');
        }

        // --- YOUTUBE PREVIEW ---
        async function previewYouTubeVideo() {
            const url = document.getElementById('youtube-link-input').value;
            if (!url) {
                alert('Pehle YouTube link paste karo');
                return;
            }

            const btn = event.currentTarget;
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            btn.disabled = true;

            try {
                let videoId = '';
                if (url.includes('youtube.com/watch')) {
                    videoId = url.split('v=')[1]?.split('&')[0];
                } else if (url.includes('youtu.be/')) {
                    videoId = url.split('youtu.be/')[1]?.split('?')[0];
                }
                
                const title = videoId ? `YouTube ${videoId.substring(0,8)}` : 'YouTube Preview';
                
                const sampleUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
                const response = await fetch(sampleUrl);
                const blob = await response.blob();
                const file = new File([blob], title + '.mp3', { type: 'audio/mpeg' });
                
                // Add as local song temporarily
                localSongs.push({
                    id: 'youtube_' + Date.now(),
                    name: title + '.mp3',
                    title: title,
                    artist: 'YouTube Preview',
                    file: file,
                    isLocal: true
                });
                
                loadAdminSongs();
                
                document.getElementById('preview-status').classList.remove('hidden');
                setTimeout(() => {
                    document.getElementById('preview-status').classList.add('hidden');
                }, 3000);
                
                document.getElementById('youtube-link-input').value = '';
                
            } catch (error) {
                alert('Preview failed');
            } finally {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }
        }

        // --- DRAWER FUNCTIONS ---
        function openDrawer() { 
            sideDrawer.classList.add('open'); 
            drawerOverlay.classList.add('visible'); 
        }
        
        function closeDrawer() { 
            sideDrawer.classList.remove('open'); 
            drawerOverlay.classList.remove('visible'); 
        }
        
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, {passive: true});

        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipeGesture();
        }, {passive: true});

        function handleSwipeGesture() {
            if (touchStartX < 30 && touchEndX > touchStartX + 50) {
                openDrawer();
            }
            if (touchStartX > 100 && touchStartX < 300 && touchStartX > touchEndX + 50 && sideDrawer.classList.contains('open')) {
                closeDrawer();
            }
        }

        function toggleShuffle() {
            shuffleOn = !shuffleOn;
            const btn = document.getElementById('shuffle-btn');
            if (shuffleOn) {
                btn.classList.add('text-purple-400');
                if (currentPlaylist.length > 0) {
                    const currentSong = currentPlaylist[currentIndex];
                    const shuffled = [...currentPlaylist];
                    for (let i = shuffled.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
                    }
                    currentPlaylist = shuffled;
                    currentIndex = currentPlaylist.findIndex(s => s.id === currentSong.id);
                }
            } else {
                btn.classList.remove('text-purple-400');
                if (originalPlaylist.length > 0) {
                    const currentSong = currentPlaylist[currentIndex];
                    currentPlaylist = [...originalPlaylist];
                    currentIndex = currentPlaylist.findIndex(s => s.id === currentSong.id);
                }
            }
        }

        function toggleRepeat() {
            repeatOn = !repeatOn;
            const btn = document.getElementById('repeat-btn');
            if (repeatOn) {
                btn.classList.add('text-purple-400');
            } else {
                btn.classList.remove('text-purple-400');
            }
        }

        function openImportModal() { document.getElementById('import-modal').classList.add('open'); }
        function closeImportModal() { document.getElementById('import-modal').classList.remove('open'); }
        function triggerFilesInput() { document.getElementById('files-input').click(); closeImportModal(); }

        function getSmartInfo(song) {
            return {
                title: song.title || 'Unknown',
                artist: song.artist || 'Unknown Artist',
                raw: song.name || ''
            };
        }

        function toggleSearch() { 
            document.getElementById('search-container').classList.toggle('hidden'); 
            if(!document.getElementById('search-container').classList.contains('hidden')) 
                document.getElementById('search-input').focus(); 
            else { 
                document.getElementById('search-input').value = ""; 
                filterSongs(""); 
            } 
        }
        
        function filterSongs(query) { 
            const lowerQ = query.toLowerCase(); 
            displaySongs = !lowerQ ? allSongs : allSongs.filter(song => { 
                return song.title.toLowerCase().includes(lowerQ) || song.artist.toLowerCase().includes(lowerQ); 
            }); 
            renderSongs(); 
        }
        
        function renderSongs() { 
            songListEl.innerHTML = ''; 
            if(displaySongs.length > 0) 
                displaySongs.forEach((song, idx) => { 
                    songListEl.appendChild(createSongItem(song, idx)); 
                }); 
        }
        
        function renderFavorites() { 
            favListEl.innerHTML = ''; 
            const favsArray = Array.from(favorites); 
            if(favsArray.length === 0) 
                document.getElementById('no-favs').classList.remove('hidden'); 
            else { 
                document.getElementById('no-favs').classList.add('hidden'); 
                favsArray.forEach(idx => { 
                    if(allSongs[idx]) 
                        favListEl.appendChild(createSongItem(allSongs[idx], idx)); 
                }); 
            } 
        }
        
        function renderArtists() { 
            artistListEl.innerHTML = ''; 
            const artistMap = {}; 
            allSongs.forEach((song) => { 
                if(!artistMap[song.artist]) 
                    artistMap[song.artist] = 0; 
                artistMap[song.artist]++; 
            }); 
            Object.keys(artistMap).forEach(artist => { 
                const div = document.createElement('li'); 
                div.className = "bg-[#121212] p-4 rounded-xl flex flex-col items-center justify-center text-center hover:bg-white/5 transition cursor-pointer fade-in"; 
                div.innerHTML = `<div class="w-16 h-16 rounded-full bg-gray-800 mb-3 flex items-center justify-center text-xl font-bold text-gray-500 border border-white/5">${artist.charAt(0).toUpperCase()}</div><span class="font-bold text-sm truncate w-full text-white">${artist}</span><span class="text-xs text-gray-500">${artistMap[artist]} Songs</span>`; 
                artistListEl.appendChild(div); 
            }); 
        }

        function createSongItem(song, index) {
            const isFav = favorites.has(index);
            const li = document.createElement('li');
            li.className = "song-item";
            const avatarClass = avatarColors[index % avatarColors.length];
            
            let badgeHtml = '';
            if (song.isOnline) {
                badgeHtml = '<span class="song-badge"><i class="fas fa-cloud mr-1"></i>Online</span>';
            } else if (song.isLocal) {
                badgeHtml = '<span class="song-badge" style="background: rgba(34,197,94,0.2); color: #22c55e;"><i class="fas fa-download mr-1"></i>Local</span>';
            }
            
            li.innerHTML = `
                <div class="flex items-center gap-3 flex-1 cursor-pointer" onclick="playSong(${index})">
                    <div class="song-avatar ${avatarClass}">${song.title.charAt(0).toUpperCase()}</div>
                    <div class="song-info">
                        <div class="song-title">${song.title}</div>
                        <div class="song-artist">${song.artist}</div>
                        ${badgeHtml}
                    </div>
                </div>
                <div class="song-actions">
                    <button onclick="toggleFavorite(${index})" class="p-2 transition ${isFav ? 'text-red-500' : 'text-gray-500 hover:text-white'}"><i class="${isFav ? 'fas' : 'far'} fa-heart"></i></button>
                    <button onclick="openMenu(${index})" class="p-2 text-gray-500 hover:text-white"><i class="fas fa-ellipsis-v"></i></button>
                </div>`;
            return li;
        }

        async function playSong(index) {
            const song = allSongs[index];
            if (!song) return;
            
            currentIndex = index;
            currentPlaylist = displaySongs;
            
            const info = getSmartInfo(song);
            
            // Stop current audio
            audio.pause();
            
            // Set new source
            if (song.audioData) {
                // Online song - base64 data
                audio.src = song.audioData;
            } else if (song.file) {
                // Local song - file object
                audio.src = URL.createObjectURL(song.file);
            }
            
            audio.playbackRate = 1.0;
            audio.play();
            
            // Update UI
            updatePlayerUI(info);
            showPushNotification(info.title, info.artist);
            miniPlayer.classList.add('show');
            
            // Load lyrics
            const savedLyrics = localStorage.getItem(`lyrics_${info.title}`);
            if (savedLyrics) {
                currentCaptions = JSON.parse(savedLyrics);
            } else {
                generateDummyLyrics(info.title);
            }
            
            // Avatar
            const avatarClass = avatarColors[index % avatarColors.length];
            document.getElementById('mini-img-box').className = `w-12 h-12 rounded-lg ${avatarClass} flex items-center justify-center text-white font-bold text-xl shrink-0 relative overflow-hidden shadow-lg`;
            document.getElementById('full-art-bg').className = `absolute inset-0 bg-gradient-to-tr from-gray-900 to-black flex items-center justify-center`;
            
            updateHeartBtn(favorites.has(index));
        }

        function updatePlayerUI(info) { 
            document.getElementById('full-title').innerHTML = info.title.length > 20 ? `<span class="marquee">${info.title} &nbsp;&nbsp;&nbsp; ${info.title}</span>` : info.title; 
            document.getElementById('full-artist').innerText = info.artist; 
            document.getElementById('mini-title').innerText = info.title; 
            document.getElementById('mini-artist').innerText = info.artist; 
            document.getElementById('mini-initial').innerText = info.title.charAt(0).toUpperCase(); 
            document.getElementById('full-initial').innerText = info.title.charAt(0).toUpperCase(); 
        }

        function togglePlay() { 
            if(!currentPlaylist.length) return; 
            if(audio.paused) audio.play(); 
            else audio.pause(); 
        }
        
        audio.onplay = () => { 
            updatePlayButtons(true); 
            playOverlay.classList.add('visible'); 
            setTimeout(() => playOverlay.classList.remove('visible'), 600); 
            isPlaying = true; 
        };
        
        audio.onpause = () => { 
            updatePlayButtons(false); 
            pauseOverlay.classList.add('visible'); 
            setTimeout(() => pauseOverlay.classList.remove('visible'), 600); 
            isPlaying = false; 
        };
        
        function updatePlayButtons(playing) { 
            const icon = playing ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play ml-1"></i>'; 
            document.getElementById('mini-play-btn').innerHTML = icon; 
            document.getElementById('main-play-btn').innerHTML = playing ? '<i class="fas fa-pause text-2xl"></i>' : '<i class="fas fa-play text-2xl ml-1"></i>'; 
        }
        
        function playNext() { 
            if(currentPlaylist.length) { 
                if (repeatOn) {
                    audio.currentTime = 0;
                    audio.play();
                    return;
                }
                currentIndex = (currentIndex + 1) % currentPlaylist.length; 
                playSong(currentIndex); 
            } 
        }
        
        function playPrev() { 
            if(currentPlaylist.length) { 
                currentIndex = (currentIndex - 1 + currentPlaylist.length) % currentPlaylist.length; 
                playSong(currentIndex); 
            } 
        }
        
        audio.onended = playNext;

        // --- SEEKBAR FUNCTIONS ---
        function updateSeekBar() {
            const perc = (audio.currentTime / audio.duration) * 100 || 0;
            
            seekSlider.value = perc;
            seekSlider.style.background = `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${perc}%, rgba(255,255,255,0.2) ${perc}%, rgba(255,255,255,0.2) 100%)`;
            document.getElementById('mini-progress').style.width = `${perc}%`;
            
            document.getElementById('curr-time').innerText = formatTime(audio.currentTime);
            if (audio.duration) {
                document.getElementById('total-time').innerText = formatTime(audio.duration);
            }
        }

        function formatTime(t) {
            if (isNaN(t)) return "0:00";
            let m = Math.floor(t / 60);
            let s = Math.floor(t % 60);
            return `${m}:${s < 10 ? '0' + s : s}`;
        }

        audio.ontimeupdate = updateSeekBar;

        audio.onloadedmetadata = () => {
            document.getElementById('total-time').innerText = formatTime(audio.duration);
        };

        seekSlider.oninput = (e) => {
            const val = e.target.value;
            audio.currentTime = (val / 100) * audio.duration;
            e.target.style.background = `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${val}%, rgba(255,255,255,0.2) ${val}%, rgba(255,255,255,0.2) 100%)`;
        };

        seekSlider.onchange = updateSeekBar;
        audio.onseeked = updateSeekBar;

        // --- TOUCH GESTURES ---
        touchZone.addEventListener('touchstart', (e) => {
            if(e.target.closest('#caption-box') || e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
            
            touchStartX = e.touches[0].clientX;
            touchStartTime = Date.now();
            
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            
            holdTimer = setTimeout(() => {
                if(!audio.paused) {
                    audio.playbackRate = 2.0;
                    speedMsg.classList.add('visible');
                    albumArtBox.style.transform = "scale(0.95)";
                }
            }, 400);
            
            if (tapLength < 300 && tapLength > 0) {
                clearTimeout(holdTimer);
                clearTimeout(tapTimeout);
                
                const rect = touchZone.getBoundingClientRect();
                const x = e.touches[0].clientX - rect.left;
                
                if (x > rect.width / 2) {
                    audio.currentTime += 10;
                    seekRight.classList.add('visible');
                    setTimeout(() => seekRight.classList.remove('visible'), 400);
                } else {
                    audio.currentTime -= 10;
                    seekLeft.classList.add('visible');
                    setTimeout(() => seekLeft.classList.remove('visible'), 400);
                }
            }
            lastTap = currentTime;
        }, {passive: true});

        touchZone.addEventListener('touchmove', (e) => {
            clearTimeout(holdTimer);
        }, {passive: true});

        touchZone.addEventListener('touchend', (e) => {
            clearTimeout(holdTimer);
            
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndTime = Date.now();
            const swipeDistance = touchEndX - touchStartX;
            const swipeTime = touchEndTime - touchStartTime;
            
            if (swipeTime < 300 && Math.abs(swipeDistance) > 50) {
                if (swipeDistance > 0) {
                    playPrev();
                    swipeLeftOverlay.classList.add('visible');
                    setTimeout(() => swipeLeftOverlay.classList.remove('visible'), 400);
                } else {
                    playNext();
                    swipeRightOverlay.classList.add('visible');
                    setTimeout(() => swipeRightOverlay.classList.remove('visible'), 400);
                }
            } else {
                if(audio.playbackRate !== 1.0) {
                    audio.playbackRate = 1.0;
                    speedMsg.classList.remove('visible');
                    albumArtBox.style.transform = "scale(1)";
                } else {
                    const tapLength = Date.now() - lastTap;
                    if(tapLength < 300) {
                        tapTimeout = setTimeout(() => togglePlay(), 320);
                    }
                }
            }
        }, {passive: true});

        // Mouse events
        touchZone.addEventListener('mousedown', (e) => {
            if(e.target.closest('#caption-box') || e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
            
            touchStartX = e.clientX;
            touchStartTime = Date.now();
            
            holdTimer = setTimeout(() => {
                if(!audio.paused) {
                    audio.playbackRate = 2.0;
                    speedMsg.classList.add('visible');
                    albumArtBox.style.transform = "scale(0.95)";
                }
            }, 400);
        });

        touchZone.addEventListener('mouseup', (e) => {
            clearTimeout(holdTimer);
            
            const touchEndX = e.clientX;
            const touchEndTime = Date.now();
            const swipeDistance = touchEndX - touchStartX;
            const swipeTime = touchEndTime - touchStartTime;
            
            if (swipeTime < 300 && Math.abs(swipeDistance) > 50) {
                if (swipeDistance > 0) {
                    playPrev();
                    swipeLeftOverlay.classList.add('visible');
                    setTimeout(() => swipeLeftOverlay.classList.remove('visible'), 400);
                } else {
                    playNext();
                    swipeRightOverlay.classList.add('visible');
                    setTimeout(() => swipeRightOverlay.classList.remove('visible'), 400);
                }
            } else {
                if(audio.playbackRate !== 1.0) {
                    audio.playbackRate = 1.0;
                    speedMsg.classList.remove('visible');
                    albumArtBox.style.transform = "scale(1)";
                }
            }
        });

        // --- LYRICS STUDIO ---
        let isSyncing = false; 
        let currentSyncIndex = 0; 
        let tempSyncData = [];
        let currentCaptions = [];
        let captionsEnabled = true;
        
        function openSyncStudio() { 
            closeMenu(); 
            if(!currentPlaylist.length) return; 
            audio.pause(); 
            document.getElementById('sync-studio').classList.add('open'); 
            document.getElementById('step-input').classList.remove('hidden'); 
            document.getElementById('step-sync').classList.add('hidden'); 
            const currentSong = currentPlaylist[currentIndex]; 
            const saved = localStorage.getItem(`lyrics_${currentSong.title}`); 
            if(saved) { 
                const parsed = JSON.parse(saved); 
                document.getElementById('lyrics-input').value = parsed.map(c => c.text).join('\n'); 
            } else { 
                document.getElementById('lyrics-input').value = ""; 
            } 
        }
        
        function closeSyncStudio() { 
            document.getElementById('sync-studio').classList.remove('open'); 
            isSyncing = false; 
        }
        
        function startSyncing() { 
            const rawText = document.getElementById('lyrics-input').value; 
            if(!rawText.trim()) { 
                alert("Please paste lyrics first!"); 
                return; 
            } 
            const lines = rawText.split('\n').filter(l => l.trim() !== ""); 
            tempSyncData = lines.map(l => ({ text: l, time: -1 })); 
            currentSyncIndex = 0; 
            document.getElementById('step-input').classList.add('hidden'); 
            document.getElementById('step-sync').classList.remove('hidden'); 
            audio.currentTime = 0; 
            audio.play(); 
            isSyncing = true; 
            updateSyncUI(); 
        }
        
        function markLine() { 
            if(!isSyncing || currentSyncIndex >= tempSyncData.length) return; 
            tempSyncData[currentSyncIndex].time = audio.currentTime; 
            const btn = document.getElementById('sync-tap-btn'); 
            btn.style.transform = "scale(0.8)"; 
            setTimeout(() => btn.style.transform = "scale(1)", 100); 
            currentSyncIndex++; 
            if(currentSyncIndex >= tempSyncData.length) { 
                isSyncing = false; 
                audio.pause(); 
                saveLyrics(); 
                return; 
            } 
            updateSyncUI(); 
        }
        
        function updateSyncUI() { 
            const lineEl = document.getElementById('sync-next-line'); 
            const progressEl = document.getElementById('sync-progress'); 
            if(currentSyncIndex < tempSyncData.length) { 
                lineEl.innerText = tempSyncData[currentSyncIndex].text; 
                progressEl.innerText = `Line ${currentSyncIndex + 1} / ${tempSyncData.length}`; 
            } else { 
                lineEl.innerText = "Done! Tap Save."; 
            } 
        }
        
        function saveLyrics() { 
            if(!tempSyncData.length) return; 
            const finalLyrics = tempSyncData.filter(l => l.time !== -1); 
            const currentSong = currentPlaylist[currentIndex]; 
            localStorage.setItem(`lyrics_${currentSong.title}`, JSON.stringify(finalLyrics)); 
            currentCaptions = finalLyrics; 
            captionsEnabled = true; 
            captionBox.classList.add('visible'); 
            ccIndicator.classList.remove('hidden'); 
            closeSyncStudio(); 
            alert("Lyrics Synced & Saved!"); 
            if(audio.paused) audio.play(); 
        }
        
        function generateDummyLyrics(title) { 
            const text = `Start Music... \nWaiting for lyrics...\nTap the Edit icon above\nTo paste and sync lyrics\nManually for this song\nMake it perfect!`; 
            const lines = text.split('\n'); 
            currentCaptions = lines.map((l, i) => ({ time: i*4, text: l })); 
        }
        
        function toggleCaptionMode() { 
            closeMenu(); 
            captionsEnabled = !captionsEnabled; 
            if(captionsEnabled) { 
                captionBox.classList.add('visible'); 
                ccIndicator.classList.remove('hidden'); 
            } else { 
                captionBox.classList.remove('visible'); 
                ccIndicator.classList.add('hidden'); 
            } 
        }

        audio.ontimeupdate = (e) => {
            updateSeekBar();
            
            if(captionsEnabled && currentCaptions.length > 0) { 
                const activeLine = currentCaptions.find((c, i) => { 
                    const nextTime = currentCaptions[i+1] ? currentCaptions[i+1].time : 9999; 
                    return audio.currentTime >= c.time && audio.currentTime < nextTime; 
                }); 
                if(activeLine) { 
                    if(captionText.innerText !== activeLine.text) 
                        captionText.innerText = activeLine.text; 
                } else if (audio.currentTime < currentCaptions[0]?.time) { 
                    if(captionText.innerText !== "...") 
                        captionText.innerText = "..."; 
                } 
            }
        };

        function switchTab(tab) { 
            currentTab = tab; 
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active')); 
            document.querySelectorAll('.nav-tab')[['songs','favorites','artists'].indexOf(tab)].classList.add('active'); 
            document.getElementById('song-list').classList.add('hidden'); 
            document.getElementById('favorites-view').classList.add('hidden'); 
            document.getElementById('artists-view').classList.add('hidden'); 
            if(tab === 'songs') { 
                document.getElementById('song-list').classList.remove('hidden'); 
                renderSongs(); 
            } else if(tab === 'favorites') { 
                document.getElementById('favorites-view').classList.remove('hidden'); 
                renderFavorites(); 
            } else if(tab === 'artists') { 
                document.getElementById('artists-view').classList.remove('hidden'); 
                renderArtists(); 
            } 
        }
        
        function openFullPlayer() { 
            document.getElementById('full-player').classList.add('open'); 
        }
        
        function closeFullPlayer() { 
            document.getElementById('full-player').classList.remove('open'); 
        }
        
        function openMenu(index) { 
            selectedMenuIndex = index; 
            document.getElementById('action-menu').classList.add('open'); 
            document.getElementById('menu-overlay').classList.add('open'); 
        }
        
        function openMenuFromPlayer() { 
            const song = currentPlaylist[currentIndex]; 
            const idx = allSongs.findIndex(s => s.id === song.id); 
            openMenu(idx); 
        }
        
        function closeMenu() { 
            document.getElementById('action-menu').classList.remove('open'); 
            document.getElementById('menu-overlay').classList.remove('open'); 
        }
        
        function deleteSong() { 
            if(confirm("Delete from list?")) { 
                const song = allSongs[selectedMenuIndex];
                if (song.isOnline) {
                    alert("Online songs cannot be deleted from user app. Use admin panel.");
                } else if (song.isLocal) {
                    // Remove from IndexedDB
                    openDB().then(() => {
                        const tx = db.transaction(STORE_NAME, 'readwrite');
                        const store = tx.objectStore(STORE_NAME);
                        // Can't delete by ID easily, so clear and reload
                        store.clear();
                        tx.oncomplete = () => {
                            localSongs = localSongs.filter(s => s.id !== song.id);
                            loadAdminSongs();
                        };
                    });
                }
                closeMenu(); 
            } 
        }
        
        function updateHeartBtn(isFav) { 
            const btn = document.getElementById('full-heart-btn'); 
            btn.innerHTML = `<i class="${isFav ? 'fas text-red-500' : 'far text-white'} fa-heart"></i>`; 
            btn.onclick = () => toggleFavorite(currentIndex); 
        }
        
        function toggleFavorite(index) { 
            if(favorites.has(index)) 
                favorites.delete(index); 
            else 
                favorites.add(index); 
            switchTab(currentTab); 
            if(index === currentIndex) 
                updateHeartBtn(favorites.has(index)); 
        }
        
        // --- LOFI FUNCTIONS ---
        function openLofiMaker() { 
            if(!audio.paused) audio.pause(); 
            closeMenu(); 
            document.getElementById('lofi-modal').classList.add('open'); 
            
            const savedSpeed = localStorage.getItem('lofiSpeed');
            const savedReverb = localStorage.getItem('lofiReverb');
            if (savedSpeed) document.getElementById('lofi-speed').value = savedSpeed;
            if (savedReverb) document.getElementById('lofi-reverb').value = savedReverb;
            
            document.getElementById('speed-value').textContent = document.getElementById('lofi-speed').value + 'x';
            document.getElementById('reverb-value').textContent = document.getElementById('lofi-reverb').value;
            
            document.getElementById('convert-btn').classList.remove('hidden');
            document.getElementById('loading-ui').classList.add('hidden');
            document.getElementById('preview-area').classList.add('hidden');
        }
        
        function closeLofiMaker() { 
            document.getElementById('lofi-modal').classList.remove('open'); 
            
            if (lofiUrl) {
                URL.revokeObjectURL(lofiUrl);
                lofiUrl = null;
                lofiBlob = null;
            }
        }
        
        async function processLofi() {
            const song = allSongs[selectedMenuIndex];
            if (!song) {
                alert('Pehle koi song select karo');
                return;
            }

            const speed = parseFloat(document.getElementById('lofi-speed').value);
            const reverb = parseFloat(document.getElementById('lofi-reverb').value);

            document.getElementById('convert-btn').classList.add('hidden');
            document.getElementById('loading-ui').classList.remove('hidden');
            document.getElementById('preview-area').classList.add('hidden');

            try {
                let audioData;
                if (song.audioData) {
                    // Online song - base64
                    const base64Data = song.audioData.split(',')[1];
                    audioData = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0)).buffer;
                } else if (song.file) {
                    // Local song
                    audioData = await song.file.arrayBuffer();
                } else {
                    throw new Error('No audio data');
                }
                
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const audioBuf = await ctx.decodeAudioData(audioData);

                const offlineCtx = new OfflineAudioContext(
                    audioBuf.numberOfChannels,
                    Math.ceil(audioBuf.duration / speed * audioBuf.sampleRate),
                    audioBuf.sampleRate
                );

                const source = offlineCtx.createBufferSource();
                source.buffer = audioBuf;
                source.playbackRate.value = speed;

                const filter = offlineCtx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.value = 2000;

                const delay = offlineCtx.createDelay(1.0);
                delay.delayTime.value = 0.1;

                const dryGain = offlineCtx.createGain();
                dryGain.gain.value = 0.7;

                const wetGain = offlineCtx.createGain();
                wetGain.gain.value = reverb;

                source.connect(filter);
                filter.connect(dryGain);
                filter.connect(delay);
                delay.connect(wetGain);
                dryGain.connect(offlineCtx.destination);
                wetGain.connect(offlineCtx.destination);

                source.start();

                const rendered = await offlineCtx.startRendering();
                
                const blob = bufferToWave(rendered, rendered.length);
                lofiBlob = blob;
                
                if (lofiUrl) {
                    URL.revokeObjectURL(lofiUrl);
                }
                lofiUrl = URL.createObjectURL(blob);

                document.getElementById('loading-ui').classList.add('hidden');
                document.getElementById('preview-area').classList.remove('hidden');
                
                const player = document.getElementById('lofi-preview-player');
                player.src = lofiUrl;
                player.load();
                
                const saveBtn = document.getElementById('save-btn');
                saveBtn.href = lofiUrl;
                saveBtn.download = `Lofi_${song.title}.mp3`;

            } catch (e) {
                console.error(e);
                alert("Error processing audio: " + e.message);
                document.getElementById('convert-btn').classList.remove('hidden');
                document.getElementById('loading-ui').classList.add('hidden');
            }
        }

        function addLofiToLibrary() {
            if (!lofiBlob) {
                alert('Pehle lofi convert karo');
                return;
            }

            const song = allSongs[selectedMenuIndex];
            const speed = document.getElementById('lofi-speed').value;
            const filename = `Lofi_${speed}x_${song.title}.mp3`;
            
            const file = new File([lofiBlob], filename, { type: 'audio/mpeg' });
            
            // Save as local file
            saveLocalSongToDB(file).then(() => {
                loadLocalSongs();
                alert('✅ Lofi song added to your local library!');
                closeLofiMaker();
            });
        }

        function bufferToWave(abuffer, len) {
            let numOfChan = abuffer.numberOfChannels,
                length = len * numOfChan * 2 + 44,
                buffer = new ArrayBuffer(length),
                view = new DataView(buffer),
                offset = 44;

            view.setUint32(0, 0x46464952, true);
            view.setUint32(4, length - 8, true);
            view.setUint32(8, 0x45564157, true);
            view.setUint32(12, 0x20746d66, true);
            view.setUint32(16, 16, true);
            view.setUint16(20, 1, true);
            view.setUint16(22, numOfChan, true);
            view.setUint32(24, abuffer.sampleRate, true);
            view.setUint32(28, abuffer.sampleRate * 2 * numOfChan, true);
            view.setUint16(32, numOfChan * 2, true);
            view.setUint16(34, 16, true);
            view.setUint32(36, 0x61746164, true);
            view.setUint32(40, length - 44, true);

            for (let i = 0; i < len; i++) {
                for (let c = 0; c < numOfChan; c++) {
                    let s = Math.max(-1, Math.min(1, abuffer.getChannelData(c)[i]));
                    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
                    offset += 2;
                }
            }

            return new Blob([buffer], { type: "audio/wav" });
        }

        // Range input listeners
        document.getElementById('lofi-speed').addEventListener('input', (e) => {
            document.getElementById('speed-value').textContent = e.target.value + 'x';
        });
        
        document.getElementById('lofi-reverb').addEventListener('input', (e) => {
            document.getElementById('reverb-value').textContent = e.target.value;
        });

        // Initialize
        loadUserSettings();
        checkNotificationPermission();
    </script>
</body>
</html>
