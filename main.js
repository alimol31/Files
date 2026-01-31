// حالة اللعبة
const gameState = {
    currentPage: 'main',
    solvedPuzzles: [false, false, false, false, false],
    language: 'en',
    puzzleAnswers: {
        1: '09/11/2017',
        2: 'strangel',
        3: '237',
        4: 'Alexander Smirnov'
    },
    puzzle5Endings: {
        'anna': 'exposure',
        'journalist': 'winning',
        'destroy': 'exposure',
        'police': 'exposure'
    },
    progress: {
        puzzle1: false,
        puzzle2: false,
        puzzle3: false,
        puzzle4: false,
        puzzle5: false
    }
};

// تهيئة اللعبة
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    loadContent('main'); 
});

// تهيئة شريط التنقل
function initNavigation() {
    const nav = document.getElementById('mainNav');
    const navItems = [
        { id: 'main', text: 'Main Story', icon: 'fas fa-book' },
        { id: 'puzzle1', text: '1', icon: 'fas fa-clock' },
        { id: 'puzzle2', text: '2', icon: 'fas fa-volume-up' },
        { id: 'puzzle3', text: '3', icon: 'fas fa-map-marked-alt' },
        { id: 'puzzle4', text: '4', icon: 'fas fa-user-secret' },
        { id: 'puzzle5', text: '5', icon: 'fas fa-handshake' }
    ];

    const ul = document.createElement('ul');
    
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'nav-link';
        a.dataset.page = item.id;
        
        const icon = document.createElement('i');
        icon.className = item.icon;
        
        const text = document.createTextNode(` ${item.text}`);
        
        a.appendChild(icon);
        a.appendChild(text);
        a.addEventListener('click', function(e) {
            e.preventDefault();
            loadContent(item.id);
            updateActiveNav(item.id);
        });
        
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    nav.appendChild(ul);
}

// تحديث رابط التنقل النشط
function updateActiveNav(pageId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.dataset.page === pageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// تحميل المحتوى
function loadContent(pageId) {
    gameState.currentPage = pageId;
    const contentDiv = document.getElementById('content');
    
    // إضافة تأثير التلاشي
    contentDiv.style.opacity = '0';
    
    setTimeout(() => {
        let contentHTML = '';
        
        switch(pageId) {
            case 'main':
                contentHTML = getMainContent();
                break;
            case 'puzzle1':
                contentHTML = getPuzzle1Content();
                break;
            case 'puzzle2':
                contentHTML = getPuzzle2Content();
                break;
            case 'puzzle3':
                contentHTML = getPuzzle3Content();
                break;
            case 'puzzle4':
                contentHTML = getPuzzle4Content();
                break;
            case 'puzzle5':
                contentHTML = getPuzzle5Content();
                break;
            default:
                contentHTML = getMainContent();
        }
        
        contentDiv.innerHTML = contentHTML;
        contentDiv.style.opacity = '1';
        
        // إضافة أحداث بعد تحميل المحتوى
        attachPageEvents(pageId);
        
        // التمرير للأعلى
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
}

// المحتوى الرئيسي
function getMainContent() {
    return `
        <div class="main-content">
            <h1 class="chapter-title typewriter">Chapter 1: An Ordinary Day... Too Ordinary</h1>
            <div class="story-text">
                <p>John was an ordinary young man in every sense of the word.</p>
                <p>He woke up every morning at seven, black coffee without sugar, the same route to his job at a small shipping company on the outskirts of the city.</p>
                <p>He wasn't looking for trouble, and he didn't believe in conspiracies... until that day.</p>
                <p>On his way home from work, while taking a shortcut through a semi-deserted industrial street, he noticed something strange.</p>
                <p>An old black car, a classic model, stopped suddenly. Three men in very elegant clothes got out, classic suits from decades past, as if they had stepped out of an old photograph.</p>
                <p>One of them opened the trunk.</p>
                <p>He saw a body.</p>
                <p>It wasn't well wrapped, just covered in dark cloth.</p>
                <p>John froze in place.</p>
                <p>He didn't scream. He didn't move. He just watched.</p>
                <p>They closed the trunk quickly, got in the car and drove away.</p>
                <p>Something inside him told him: <span class="highlight">"Forget about it and go home."</span></p>
                <p>But something else... stronger... said: <span class="highlight">"If you leave this, your life will remain ordinary forever."</span></p>
                <p>So he decided to follow them.</p>
            </div>
            
            <div class="puzzle-section">
                <h2 class="chapter-title">Chapter 2: The Factory</h2>
                <div class="story-text">
                    <p>They drove a long distance until they reached a huge abandoned factory at the edge of the city.</p>
                    <p>Rusty fences, broken windows, and a half-open gate that creaked with the wind.</p>
                    <p>John hid behind an abandoned truck and waited.</p>
                    <p>After a few minutes, the men came out, closed the gate, and left.</p>
                    <p>He waited longer... ten minutes... twenty...</p>
                    <p>Then he went in.</p>
                    <p>The inside was worse than he imagined.</p>
                    <p>The smell of oil, old blood, and the sound of dripping water echoing like footsteps.</p>
                    <p>Among the broken desks, he found an iron cabinet that wasn't locked properly.</p>
                    <p>Inside:</p>
                    
                    <div class="secret-file">
                        <p>📁 <strong>A red file written in Russian</strong></p>
                        <p>He didn't understand the language, but some words were clear even to him:</p>
                        <p><span class="highlight">Dark Web</span></p>
                        <p><span class="highlight">Agreement</span></p>
                        <p><span class="highlight">Shipment</span></p>
                        <p><span class="highlight">Five Keys</span></p>
                        <p>And on the last page, a strange symbol, and a stamp resembling a double-headed eagle.</p>
                    </div>
                    
                    <p>He took the file.</p>
                    <p>And here... his real story began.</p>
                </div>
            </div>
            
            <div class="puzzle-section">
                <h2 class="chapter-title">Chapter 3: The Agreement</h2>
                <div class="story-text">
                    <p>In his apartment, he used a translator.</p>
                    <p>What he read made him nauseous.</p>
                    <p>The file talks about a secret agreement on the Dark Web between unknown parties,</p>
                    <p>concerning the transfer of people, experiments, and money,</p>
                    <p>and the main files cannot be opened until 5 puzzles are solved, each puzzle leads to a digital key.</p>
                    <p>And at the bottom of the last page:</p>
                    <p><span class="highlight">"Whoever reaches the truth... either owns it, or is buried with it."</span></p>
                    <p>At that moment, John understood one thing:</p>
                    <p>This is not just a file...</p>
                    <p>This is a door.</p>
                </div>

            </div>
            
            <div class="navigation-buttons">
                <button class="btn btn-secondary" id="prevBtn" disabled>
                    <i class="fas fa-arrow-right"></i> Previous
                </button>
                <button class="btn" id="startPuzzle1">
                    Start Puzzle 1 <i class="fas fa-arrow-left"></i>
                </button>
            </div>
        </div>
    `;
}

// محتوى اللغز 1
function getPuzzle1Content() {
    return `
        <div class="main-content">
            <h1 class="chapter-title">Puzzle 1: Time Puzzle</h1>
            
            <div class="story-text">
                
                <div class="image-container">
                    <img src="/images/puzzle1/20250818_203709.jpg" alt="Old Photo with Hidden Date" class="puzzle-image">
                    <div class="image-overlay">
                        <div class="secret-file">
                            <p>Hidden under UV light: IX-XI-MMXVII</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="puzzle-interface">
                <h3 class="puzzle-title"><i class="fas fa-clock"></i> Solve the Puzzle</h3>
                
                
                <div class="input-group">
                    <label for="puzzle1Answer">Enter the date:</label>
                    <input type="text" id="puzzle1Answer" placeholder="Example: 15/08/1975">
                </div>
                
                <button class="btn" id="submitPuzzle1">
                    <i class="fas fa-check"></i> Check Answer
                </button>
                
                <div class="result-message" id="puzzle1Result"></div>
            </div>
            
            <div class="navigation-buttons">
                <button class="btn btn-secondary" id="backToMain">
                    <i class="fas fa-arrow-right"></i> Back to Story
                </button>
                <button class="btn" id="toPuzzle2" ${gameState.progress.puzzle1 ? '' : 'disabled'}>
                    Go to Puzzle 2 <i class="fas fa-arrow-left"></i>
                </button>
            </div>
        </div>
    `;
}

// محتوى اللغز 2
function getPuzzle2Content() {
    return `
        <div class="main-content">
            <h1 class="chapter-title">Puzzle 2: Sound Puzzle</h1>
            
            <div class="story-text">
                
                <div class="audio-player">
                    <p>Encoded Audio Recording:</p>
                    <audio id="encodedAudio" controls>
                        <source src="/sounds/puzzle2/Mix__Help Me_ Sound Effect(MP3_160K)_1.mp3" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                    <div class="audio-controls">
                        <label for="frequencySlider">Frequency: </label>
                        <input type="range" id="frequencySlider" min="100" max="1000" value="432" class="frequency-slider">
                        <span id="frequencyValue" class="frequency-value">432 Hz</span>
                    </div>
                </div>
            </div>
            
            <div class="puzzle-interface">
                <h3 class="puzzle-title"><i class="fas fa-volume-up"></i> Solve the Puzzle</h3>
                
                <div class="input-group">
                    <label for="puzzle2Answer">Enter the word (in English):</label>
                    <input type="text" id="puzzle2Answer" placeholder="Enter the word here">
                </div>
                
                <button class="btn" id="submitPuzzle2">
                    <i class="fas fa-check"></i> Check Answer
                </button>
                
                <div class="result-message" id="puzzle2Result"></div>
            </div>
            
            <div class="navigation-buttons">
                <button class="btn btn-secondary" id="backToPuzzle1">
                    <i class="fas fa-arrow-right"></i> Back to Puzzle 1
                </button>
                <button class="btn" id="toPuzzle3" ${gameState.progress.puzzle2 ? '' : 'disabled'}>
                    Go to Puzzle 3 <i class="fas fa-arrow-left"></i>
                </button>
            </div>
        </div>
    `;
}

// محتوى اللغز 3
function getPuzzle3Content() {
    return `
        <div class="main-content">
            <h1 class="chapter-title">Puzzle 3: Location Puzzle</h1>
            
            <div class="story-text">
                
                <div class="map-container">
                    <div class="map-coordinates">
                    
                    </div>
                    <img src="images/puzzle3/map_coordinates.jpg" alt="Map with Coordinates" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
            
            <div class="puzzle-interface">
                <h3 class="puzzle-title"><i class="fas fa-map-marked-alt"></i> Solve the Puzzle</h3>
                
                <div class="input-group">
                    <label for="puzzle3Answer">Enter the result:</label>
                    <input type="number" id="puzzle3Answer" placeholder="Enter the number here">
                </div>
                
                <button class="btn" id="submitPuzzle3">
                    <i class="fas fa-check"></i> Check Answer
                </button>
                
                <div class="result-message" id="puzzle3Result"></div>
            </div>
            
            <div class="navigation-buttons">
                <button class="btn btn-secondary" id="backToPuzzle2">
                    <i class="fas fa-arrow-right"></i> Back to Puzzle 2
                </button>
                <button class="btn" id="toPuzzle4" ${gameState.progress.puzzle3 ? '' : 'disabled'}>
                    Go to Puzzle 4 <i class="fas fa-arrow-left"></i>
                </button>
            </div>
        </div>
    `;
}

// محتوى اللغز 4
function getPuzzle4Content() {
    return `
        <div class="main-content">
            <h1 class="chapter-title">Puzzle 4: Name Puzzle</h1>
            
            <div class="story-text">
               
                
                <div class="image-container">
                    <img src="images/puzzle4/death_certificate.jpg" alt="Death Certificate with Hidden Name" class="puzzle-image">
                    <div class="image-overlay">
                        <div class="secret-file">
                            <p>Under blue light: Александр Смирнов</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="puzzle-interface">
                <h3 class="puzzle-title"><i class="fas fa-user-secret"></i> Solve the Puzzle</h3>
               
                <div class="input-group">
                    <label for="puzzle4Answer">Enter the name (in English):</label>
                    <input type="text" id="puzzle4Answer" placeholder="Enter the name here">
                </div>
                
                <button class="btn" id="submitPuzzle4">
                    <i class="fas fa-check"></i> Check Answer
                </button>
                
                <div class="result-message" id="puzzle4Result"></div>
            </div>
            
            <div class="navigation-buttons">
                <button class="btn btn-secondary" id="backToPuzzle3">
                    <i class="fas fa-arrow-right"></i> Back to Puzzle 3
                </button>
                <button class="btn" id="toPuzzle5" ${gameState.progress.puzzle4 ? '' : 'disabled'}>
                    Go to Puzzle 5 <i class="fas fa-arrow-left"></i>
                </button>
            </div>
        </div>
    `;
}

// محتوى اللغز 5
function getPuzzle5Content() {
    return `
        <div class="main-content">
            <h1 class="chapter-title">Puzzle 5: Trust Puzzle</h1>
            
            <div class="story-text">
                <p>Now you have 4 keys, only the last key remains.</p>
                <p>But this puzzle is different. It's not a traditional puzzle.</p>
                <p>A file that only opens if you choose someone you trusts... or no one.</p>
                <p>The options:</p>
                <ol>
                    <li>Send the files to Anna.</li>
                    <li>Send the files to a well-known investigative journalist.</li>
                    <li>Destroy the files and withdraw.</li>
                    <li>Go to the police.</li>
                </ol>
                <p>Each choice will lead to a different outcome.</p>
            </div>
            
            <div class="puzzle-interface">
                <h3 class="puzzle-title"><i class="fas fa-handshake"></i> Solve the Puzzle</h3>
                <p>Choose who you trust:</p>
                
                 <div class="input-group">
                    <label for="puzzle4Answer">Enter the name (in English):</label>
                    <input type="text" id="puzzle5Answer" placeholder="Enter the name here">
                </div>
                
                
                <button class="btn" id="submitPuzzle5">
                    <i class="fas fa-check"></i> Submit Your Choice
                </button>
                
                <div class="result-message" id="puzzle5Result"></div>
            </div>
            
            <div class="navigation-buttons">
                <button class="btn btn-secondary" id="backToPuzzle4">
                    <i class="fas fa-arrow-right"></i> Back to Puzzle 4
                </button>
                <button class="btn" id="showEndings" disabled>
                    Discover the Ending <i class="fas fa-arrow-left"></i>
                </button>
            </div>
        </div>
    `;
}

// إضافة الأحداث للصفحات
function attachPageEvents(pageId) {
    switch(pageId) {
        case 'main':
            attachMainEvents();
            break;
        case 'puzzle1':
            attachPuzzle1Events();
            break;
        case 'puzzle2':
            attachPuzzle2Events();
            break;
        case 'puzzle3':
            attachPuzzle3Events();
            break;
        case 'puzzle4':
            attachPuzzle4Events();
            break;
        case 'puzzle5':
            attachPuzzle5Events();
            break;
    }
}

// أحداث الصفحة الرئيسية
function attachMainEvents() {
    document.getElementById('startPuzzle1').addEventListener('click', function() {
        loadContent('puzzle1');
        updateActiveNav('puzzle1');
    });
}

// أحداث اللغز 1
function attachPuzzle1Events() {
    // زر العودة
    document.getElementById('backToMain').addEventListener('click', function() {
        loadContent('main');
        updateActiveNav('main');
    });
    
    // التحقق من الإجابة
    const submitBtn = document.getElementById('submitPuzzle1');
    const answerInput = document.getElementById('puzzle1Answer');
    const resultDiv = document.getElementById('puzzle1Result');
    const nextBtn = document.getElementById('toPuzzle2');
    
    submitBtn.addEventListener('click', function() {
        const userAnswer = answerInput.value.trim();
        const correctAnswer = gameState.puzzleAnswers[1];
        
        if (userAnswer === correctAnswer) {
            resultDiv.textContent = '✓ Correct! You have obtained the first key.';
            resultDiv.className = 'result-message success';
            resultDiv.style.display = 'block';
            gameState.progress.puzzle1 = true;
            nextBtn.disabled = false;
            gameState.solvedPuzzles[0] = true;
        } else {
            resultDiv.textContent = '✗ Incorrect. Try again.';
            resultDiv.className = 'result-message error';
            resultDiv.style.display = 'block';
        }
    });
    
    answerInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (gameState.progress.puzzle1) {
            loadContent('puzzle2');
            updateActiveNav('puzzle2');
        }
    });
}

// أحداث اللغز 2
function attachPuzzle2Events() {
    // زر العودة
    document.getElementById('backToPuzzle1').addEventListener('click', function() {
        loadContent('puzzle1');
        updateActiveNav('puzzle1');
    });
    
    // التحقق من الإجابة
    const submitBtn = document.getElementById('submitPuzzle2');
    const answerInput = document.getElementById('puzzle2Answer');
    const resultDiv = document.getElementById('puzzle2Result');
    const nextBtn = document.getElementById('toPuzzle3');
    
    submitBtn.addEventListener('click', function() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = gameState.puzzleAnswers[2].toLowerCase();
        
        if (userAnswer === correctAnswer) {
            resultDiv.textContent = '✓ Correct! The word "strangel" is the second key.';
            resultDiv.className = 'result-message success';
            resultDiv.style.display = 'block';
            gameState.progress.puzzle2 = true;
            nextBtn.disabled = false;
            gameState.solvedPuzzles[1] = true;
        } else {
            resultDiv.textContent = '✗ Incorrect. Try again.';
            resultDiv.className = 'result-message error';
            resultDiv.style.display = 'block';
        }
    });
    
    answerInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (gameState.progress.puzzle2) {
            loadContent('puzzle3');
            updateActiveNav('puzzle3');
        }
    });
    
    // التحكم في مشغل الصوت
    const audio = document.getElementById('encodedAudio');
    const frequencySlider = document.getElementById('frequencySlider');
    const frequencyValue = document.getElementById('frequencyValue');
    
    if (frequencySlider && frequencyValue) {
        frequencySlider.addEventListener('input', function() {
            const value = this.value;
            frequencyValue.textContent = `${value} Hz`;
            // في تطبيق حقيقي، هنا سيتم تطبيق مرشح التردد على الصوت
        });
    }
}

// أحداث اللغز 3
function attachPuzzle3Events() {
    // زر العودة
    document.getElementById('backToPuzzle2').addEventListener('click', function() {
        loadContent('puzzle2');
        updateActiveNav('puzzle2');
    });
    
    // التحقق من الإجابة
    const submitBtn = document.getElementById('submitPuzzle3');
    const answerInput = document.getElementById('puzzle3Answer');
    const resultDiv = document.getElementById('puzzle3Result');
    const nextBtn = document.getElementById('toPuzzle4');
    
    submitBtn.addEventListener('click', function() {
        const userAnswer = parseInt(answerInput.value.trim());
        const correctAnswer = parseInt(gameState.puzzleAnswers[3]);
        
        if (userAnswer === correctAnswer) {
            resultDiv.textContent = `✓ Correct! ${correctAnswer} is the third key.`;
            resultDiv.className = 'result-message success';
            resultDiv.style.display = 'block';
            gameState.progress.puzzle3 = true;
            nextBtn.disabled = false;
            gameState.solvedPuzzles[2] = true;
        } else {
            resultDiv.textContent = '✗ Incorrect. Try again.';
            resultDiv.className = 'result-message error';
            resultDiv.style.display = 'block';
        }
    });
    
    answerInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (gameState.progress.puzzle3) {
            loadContent('puzzle4');
            updateActiveNav('puzzle4');
        }
    });
}

// أحداث اللغز 4
function attachPuzzle4Events() {
    // زر العودة
    document.getElementById('backToPuzzle3').addEventListener('click', function() {
        loadContent('puzzle3');
        updateActiveNav('puzzle3');
    });
    
    // التحقق من الإجابة
    const submitBtn = document.getElementById('submitPuzzle4');
    const answerInput = document.getElementById('puzzle4Answer');
    const resultDiv = document.getElementById('puzzle4Result');
    const nextBtn = document.getElementById('toPuzzle5');
    
    submitBtn.addEventListener('click', function() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = gameState.puzzleAnswers[4].toLowerCase();
        
        if (userAnswer === correctAnswer) {
            resultDiv.textContent = '✓ Correct! Alexander Smirnov is the fourth key.';
            resultDiv.className = 'result-message success';
            resultDiv.style.display = 'block';
            gameState.progress.puzzle4 = true;
            nextBtn.disabled = false;
            gameState.solvedPuzzles[3] = true;
        } else {
            resultDiv.textContent = '✗ Incorrect. Try again.';
            resultDiv.className = 'result-message error';
            resultDiv.style.display = 'block';
        }
    });
    
    answerInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (gameState.progress.puzzle4) {
            loadContent('puzzle5');
            updateActiveNav('puzzle5');
        }
    });
}

// أحداث اللغز 5
function attachPuzzle5Events() {
    // زر العودة
    document.getElementById('backToPuzzle4').addEventListener('click', function() {
        loadContent('puzzle4');
        updateActiveNav('puzzle4');
    });
    
    // التحقق من الإجابة
    const submitBtn = document.getElementById('submitPuzzle5');
    const answerSelect = document.getElementById('puzzle5Answer');
    const resultDiv = document.getElementById('puzzle5Result');
    const showEndingsBtn = document.getElementById('showEndings');
    
    submitBtn.addEventListener('click', function() {
        const userChoice = answerSelect.value;
        if(!navigator.userAgent.includes('Tor')) {
    
window.close();
}
        if (!userChoice) {
            resultDiv.textContent = '✗ You must choose an option first.';
            resultDiv.className = 'result-message error';
            resultDiv.style.display = 'block';
            return;
        }
        
        gameState.progress.puzzle5 = true;
        gameState.puzzle5Choice = userChoice;
        gameState.solvedPuzzles[4] = true;
        
        resultDiv.textContent = '✓ You have made your decision. This decision will determine John\'s fate.';
        resultDiv.className = 'result-message success';
        resultDiv.style.display = 'block';
        showEndingsBtn.disabled = false;
    });
    
    showEndingsBtn.addEventListener('click', function() {
        if (gameState.progress.puzzle5) {
            showEnding();
        }
    });
}

// عرض النهاية
function showEnding() {
    const choice = gameState.puzzle5Choice;
    const endingType = gameState.puzzle5Endings[choice];
    
    let endingContent = '';
    if(!navigator.userAgent.includes('Tor')) {
    
window.close();
}
    if (endingType === 'winning') {
        endingContent = `
            <div class="main-content">
                <div class="ending-section">
                    <h2 class="ending-title">🔓 Ending One: Victory</h2>
                    <div class="story-text">
                        <p>John succeeds in solving the five puzzles.</p>
                        <p>He opens the final folder.</p>
                        <p>A huge archive appears:</p>
                        <p>Names, accounts, shipments, photos, and videos...</p>
                        <p>Everything proves the existence of an international Russian mafia network.</p>
                        <p>But he notices something terrifying:</p>
                        <p>The last file...</p>
                        <p>Bears his name.</p>
                        <p class="highlight">John – Status: Active</p>
                        <p>After opening the files, he realizes that the truth does not set free... it watches.</p>
                    </div>
                    
                    <h3 class="puzzle-title"><i class="fas fa-share-alt"></i> Next Chapter (Shared):</h3>
                    <div class="story-text">
                        <p>The files are now in his hands, but also in the hands of others.</p>
                        <p>John is no longer an ordinary person.</p>
                        <p>He has become part of the game... whether he wants to or not.</p>
                    </div>
                </div>
                
                <div class="navigation-buttons">
                    <button class="btn btn-secondary" id="backFromEnding">
                        <i class="fas fa-arrow-right"></i> Back to Puzzle 5
                    </button>
                    <button class="btn" id="restartFromEnding">
                        Restart Game <i class="fas fa-redo"></i>
                    </button>
                </div>
            </div>
        `;
        if(!navigator.userAgent.includes('Tor')) {
    
window.close();
} else {
    

        setTimeout(() => {
      window.location.href = "secret_files/classified_documents.html";
    }, 2000);
    }
    } else {
        endingContent = `
            <div class="main-content">
                <div class="ending-section">
                    <h2 class="ending-title">🔥 Ending Two: Exposure</h2>
                    <div class="story-text">
                        <p>Before he could complete the fifth puzzle, a notification arrives on his computer:</p>
                        <p class="highlight">"We know who you are, John."</p>
                        <p>The lights go out.</p>
                        <p>The sound of a car is heard outside...</p>
                        <p>The same sound.</p>
                        <p>The same classic model.</p>
                        <p>The Russian mafia has discovered his identity.</p>
                    </div>
                    
                    <h3 class="puzzle-title"><i class="fas fa-share-alt"></i> Next Chapter (Shared):</h3>
                    <div class="story-text">
                        <p>Escape is no longer an option... and the confrontation has begun.</p>
                        <p>But John is not alone now.</p>
                        <p>The person he chose to trust... may be the real key to survival.</p>
                    </div>
                </div>
                
                <div class="navigation-buttons">
                    <button class="btn btn-secondary" id="backFromEnding">
                        <i class="fas fa-arrow-right"></i> Back to Puzzle 5
                    </button>
                    <button class="btn" id="restartFromEnding">
                        Restart Game <i class="fas fa-redo"></i>
                    </button>
                </div>
            </div>
        `;
    }
    
    document.getElementById('content').innerHTML = endingContent;
    
    // إضافة أحداث للأزرار في صفحة النهاية
    document.getElementById('backFromEnding').addEventListener('click', function() {
        loadContent('puzzle5');
        updateActiveNav('puzzle5');
    });
    
    document.getElementById('restartFromEnding').addEventListener('click', restartGame);
}


// إعادة تشغيل اللعبة
function restartGame() {
    gameState.currentPage = 'main';
    gameState.solvedPuzzles = [false, false, false, false, false];
    gameState.progress = {
        puzzle1: false,
        puzzle2: false,
        puzzle3: false,
        puzzle4: false,
        puzzle5: false
    };
    gameState.puzzle5Choice = null;
    
    loadContent('main');
    updateActiveNav('main');
    
    // إعادة تعيين اللغة إلى الإنجليزية
    if (gameState.language === 'ar') {
        document.getElementById('langToggle').click();
    }
}