/**
 * YouTube Feedback Filter Engine
 * Developed by Farhan Muhammed (@byfarhan.io)
 */

 function extractId(url) {
            const match = url.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);
            return (match && match[7].length == 11) ? match[7] : false;
        }

        async function process() {
            const key = document.getElementById('apiKey').value;
            const url = document.getElementById('videoUrl').value;
            const resDiv = document.getElementById('results');
            const stat = document.getElementById('status');
            const vId = extractId(url);

            if (!key || !vId) return alert("Check your API Key and Video Link!");
            
            stat.innerText = "Processing...";
            resDiv.innerHTML = "";

            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${vId}&maxResults=50&key=${key}`);
                const data = await response.json();
                if (data.error) throw new Error(data.error.message);

                let count = 0;
                data.items.forEach(item => {
                    const comment = item.snippet.topLevelComment.snippet.textDisplay;
                    const author = item.snippet.topLevelComment.snippet.authorDisplayName;
                    // Filter: Min 15 chars, no emoji-only, no long repeats
                    if (comment.length > 15 && !/(.)\1{4,}/.test(comment)) {
                        count++;
                        resDiv.innerHTML += `<div class="comment"><strong>@${author}</strong><br>${comment}</div>`;
                    }
                });
                stat.innerText = `Filtered ${count} genuine comments.`;
            } catch (e) { stat.innerText = "Error: " + e.message; }
        }