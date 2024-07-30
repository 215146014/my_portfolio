function displayCategory(category) {
  const videoContainer = document.getElementById('videoContainer');
  videoContainer.innerHTML = ''; // Clear previous videos

  fetchVideos(category)
    .then(videos => {
      videos.forEach(video => {
        const videoElement = document.createElement('video');
        videoElement.src = `static/videos/${category}/${video}`;
        videoElement.controls = true;
        videoElement.classList.add('video-item');
        videoContainer.appendChild(videoElement);
      });
    })
    .catch(error => {
      console.error('Error fetching videos:', error);
    });
}

function fetchVideos(category) {
  // Simulate fetching video files from the server (Replace with your actual logic)
  return new Promise((resolve, reject) => {
    // Simulated delay to mimic server fetch
    setTimeout(() => {
      // Replace with actual logic to fetch video files
      const videos = [
        'video1.mp4',
        'video2.mp4'
        // Add more videos as needed
      ];
      resolve(videos);
    }, 1000);
  });
}
