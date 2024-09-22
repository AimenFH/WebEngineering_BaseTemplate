// functionality for showing/hiding the comments section
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.addEventListener('click', () => {
    const showHideText = showHideBtn.textContent;
    showHideBtn.textContent = showHideText === 'Show comments' ? 'Hide comments' : 'Show comments';
    commentWrapper.style.display = showHideText === 'Show comments' ? 'none' : 'block';
});

// functionality for adding a new comment via the comments form
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const listItem = document.createElement('li');
    const namePara = document.createElement('p');
    const commentPara = document.createElement('p');

    const nameValue = nameField.value.trim();
    const commentValue = commentField.value.trim();

    if (nameValue && commentValue) {
        namePara.textContent = nameValue;
        commentPara.textContent = commentValue;
        listItem.append(namePara, commentPara);
        list.appendChild(listItem);
        nameField.value = '';
        commentField.value = '';
    } else {
        alert('Please fill out both name and comment fields.');
    }
});

// Function to fetch the image URLs based on the file names
const baseUrl = "https://en.wikipedia.org/w/api.php";
const title = "List_of_ursids";

const params = {
    action: "parse",
    page: title,
    prop: "wikitext",
    section: 3,
    format: "json",
    origin: "*"
};

// Fetch image URLs with error handling and placeholder
const fetchImageUrl = async (fileName) => {
    const imageParams = {
        action: "query",
        titles: `File:${fileName}`,
        prop: "imageinfo",
        iiprop: "url",
        format: "json",
        origin: "*"
    };

    const url = `${baseUrl}?${new URLSearchParams(imageParams).toString()}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        const pages = data.query.pages;
        const imageUrl = Object.values(pages)[0]?.imageinfo[0]?.url;

        return imageUrl || 'placeholder-image-url.jpg'; // Return placeholder if no URL
    } catch (error) {
        console.error('Failed to fetch image URL:', error);
        return 'placeholder-image-url.jpg'; // Return placeholder on error
    }
};

// Function to extract bear data from the wikitext with range parsing
const extractBears = async (wikitext) => {
    const speciesTables = wikitext.split('{{Species table/end}}');
    const bears = [];

    for (const table of speciesTables) {
        const rows = table.split('{{Species table/row');
        for (const row of rows) {
            const nameMatch = row.match(/\|name=\[\[(.*?)\]\]/);
            const binomialMatch = row.match(/\|binomial=(.*?)\n/);
            const imageMatch = row.match(/\|image=(.*?)\n/);
            const rangeMatch = row.match(/\|range=(.*?)\n/); // Extracting range

            if (nameMatch && binomialMatch && imageMatch) {
                const fileName = imageMatch[1].trim().replace('File:', '');
                const imageUrl = await fetchImageUrl(fileName);

                const bear = {
                    name: nameMatch[1],
                    binomial: binomialMatch[1],
                    image: imageUrl,
                    range: rangeMatch ? rangeMatch[1] : 'Range data not available'
                };
                bears.push(bear);
            }
        }
    }

    // Update UI with bear data
    const moreBearsSection = document.querySelector('.more_bears');
    bears.forEach(bear => {
        moreBearsSection.innerHTML += `
            <div>
                <h3>${bear.name} (${bear.binomial})</h3>
                <img src="${bear.image}" alt="${bear.name}" style="width:200px; height:auto;">
                <p><strong>Range:</strong> ${bear.range}</p>
            </div>
        `;
    });
};

// Function to get bear data with error handling
const getBearData = async () => {
    const url = `${baseUrl}?${new URLSearchParams(params).toString()}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        const wikitext = data.parse.wikitext['*'];
        await extractBears(wikitext);
    } catch (error) {
        console.error('Failed to fetch bear data:', error);
        alert('Failed to load bear data. Please try again later.');
    }
};

// Fetch and display the bear data
getBearData();
