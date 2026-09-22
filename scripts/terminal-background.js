(function () {
  if (!document.querySelector('#homepage')) return;

  const main = document.querySelector('main');
  if (!main) return;

  const terminal = document.createElement('div');
  terminal.id = 'terminal-background';
  terminal.setAttribute('aria-hidden', 'true');
  main.appendChild(terminal);

  const bootLines = [
    'booting system...',
    'loading interfaces...',
    'initializing archive...',
    '      .-""-.',
    '     / .-. \\',
    '     | | | |',
    '     |  _  |',
    '      `-._.-\'',
    ' '
  ];

  const slugify = (value) => {
    const cleaned = value
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    return cleaned || 'untitled';
  };

  const fallbackFiles = [
    '~/work/illustration/moonlight-princess-2026.jpg',
    '~/work/painting-and-drawing/cable-unmanagement-1-2025.jpg',
    '~/work/illustration/crow-2025.jpg',
    '~/work/graphic-design/identity-system-2025.jpg',
    '~/work/video/untitled-project-2026.jpg',
    '~/work/painting-and-drawing/cloth-wire-2024.jpg',
    '~/projects/game-development/phantom-beat-breakers-2026.jpg',
    '~/projects/game-development/limbo-2026.jpg',
    '~/projects/branding/beetbox-studios-branding-assets.jpg',
    '~/projects/print-media/i-hope-that-you-love-it-2026.jpg'
  ];

  function shuffle(list) {
    const copy = [...list];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
    }
    return copy;
  }

  function collectDocumentTitles(doc, prefix, sectionSelector) {
    const titles = [];

    sectionSelector.forEach((selector) => {
      const section = doc.querySelector(selector);
      if (!section) return;

      const imageTitles = section.querySelectorAll('img[data-title]');
      imageTitles.forEach((img) => {
        const title = img.getAttribute('data-title');
        if (title) {
          titles.push(`${prefix}/${slugify(selector.replace('#', ''))}/${slugify(title)}.jpg`);
        }
      });

      const headingTitles = section.querySelectorAll('h3');
      headingTitles.forEach((heading) => {
        const title = heading.textContent.trim();
        if (title) {
          titles.push(`${prefix}/${slugify(selector.replace('#', ''))}/${slugify(title)}.jpg`);
        }
      });
    });

    return titles;
  }

  async function getAllTitles() {
    try {
      const [workResponse, projectResponse] = await Promise.all([
        fetch('/work/'),
        fetch('/projects/')
      ]);

      if (!workResponse.ok && !projectResponse.ok) throw new Error('title fetch failed');

      const [workHtml, projectHtml] = await Promise.all([
        workResponse.ok ? workResponse.text() : '',
        projectResponse.ok ? projectResponse.text() : ''
      ]);

      const parser = new DOMParser();
      const workDoc = workHtml ? parser.parseFromString(workHtml, 'text/html') : null;
      const projectDoc = projectHtml ? parser.parseFromString(projectHtml, 'text/html') : null;

      const titles = [];

      if (workDoc) {
        titles.push(...collectDocumentTitles(workDoc, '~/work', ['#painting-drawing', '#illustration', '#graphic-design', '#video']));
      }

      if (projectDoc) {
        titles.push(...collectDocumentTitles(projectDoc, '~/projects', ['#game-development', '#print-media', '#branding']));
      }

      return titles.length ? shuffle(titles) : fallbackFiles;
    } catch (error) {
      return fallbackFiles;
    }
  }

  function addLine(lineText, isBlank) {
    const row = document.createElement('div');
    row.className = 'terminal-line';

    const prompt = document.createElement('span');
    prompt.className = 'terminal-prompt';
    prompt.textContent = isBlank ? '' : 'user@jupiterb06:~$ ';

    const file = document.createElement('span');
    file.className = 'terminal-file';
    if (isBlank) {
      file.textContent = '';
    }

    row.appendChild(prompt);
    row.appendChild(file);
    terminal.appendChild(row);

    return { row, file, value: lineText || '' };
  }

  function createSequence() {
    return getAllTitles().then((fileNames) => {
      const titleLines = shuffle(fileNames).slice(0, 20);
      const sequence = [];

      bootLines.forEach((line) => {
        sequence.push({ text: line, isBlank: false });
        sequence.push({ text: '', isBlank: true });
      });

      titleLines.forEach((line) => {
        sequence.push({ text: line, isBlank: false });
        sequence.push({ text: '', isBlank: true });
      });

      return sequence;
    });
  }

  function startSequence() {
    terminal.innerHTML = '';

    createSequence().then((sequence) => {
      const lines = sequence.map((item) => addLine(item.text, item.isBlank));

      let index = 0;
      let charIndex = 0;

      function clearCursor() {
        lines.forEach(({ file }) => {
          file.classList.remove('active');
        });
      }

      function tick() {
        if (index >= lines.length) {
          setTimeout(startSequence, 60000);
          return;
        }

        const current = lines[index];
        const targetText = current.value;

        clearCursor();
        current.file.classList.add('active');

        if (targetText === '') {
          current.file.textContent = '';
          current.file.setAttribute('data-blank', 'true');
          index += 1;
          charIndex = 0;
          setTimeout(tick, 220);
          return;
        }

        const nextChar = targetText.charAt(charIndex);
        if (nextChar) {
          current.file.textContent = targetText.slice(0, charIndex + 1);
          charIndex += 1;
          setTimeout(tick, 45);
        } else {
          current.file.classList.remove('active');
          index += 1;
          charIndex = 0;
          setTimeout(tick, 220);
        }
      }

      tick();
    });
  }

  startSequence();
})();
