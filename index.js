
fetch('http://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
.then(res => {
  return res.json();
})
.then(data => {
  console.log(data);
  let wrapper = document.querySelector('.playlist-wrapper');
  console.log(wrapper);
  data.forEach(ele => {
    let div = document.createElement('div');
    div.className = 'playlist-card';
    let img = document.createElement('img');
    img.id = ele.id;
    img.className = 'thumbnail';
    img.src = ele.thumbnail;
    let h3 = document.createElement('h3');
    h3.textContent = ele.title;
    div.appendChild(img);
    div.appendChild(h3);
    wrapper.appendChild(div);
  });
  fetch('http://5d76bf96515d1a0014085cf9.mockapi.io/video')
  .then(videos => {
    return videos.json();
  })
  .then(vids => {
    console.log(vids);
    vids.forEach(ele => {
      img = document.getElementById(ele.id);
      let iframe = document.querySelector('iframe');
      img.addEventListener('click', (e) => {
        iframe.src = `https://player.vimeo.com/video/${ele.vimeoId}`;
      });
    });
  });
});