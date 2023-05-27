async function getData() {
    const response = await fetch('https://blabla.ngrok.io/followers');
    const { followers } = await response.json();
    return followers;
  }
  
  async function main() {
    try {
      const followers = await getData();
      render(followers);
    } catch (error) {
      console.log(error);
    }
  }
  
  main();
  
  function render(followers) {
    const mainEl = document.querySelector('main');

    for (let i = 0; i < followers.length; i += 1) {
    const mediaEl = document.createElement('div');
    mediaEl.className = 'media';

    const nameEl = document.createElement('div');
    nameEl.className = 'media-name';
    nameEl.textContent = followers[i].media;
    mediaEl.append(nameEl);

    const followerEl = document.createElement('h2');
    followerEl.className = 'media-followers';
    followerEl.textContent = formatNumber(followers[i].count);
    mediaEl.append(followerEl);

    const labelEl = document.createElement('span');
    labelEl.className = 'media-label';
    labelEl.textContent = 'followers';
    mediaEl.append(labelEl);

    mainEl.append(mediaEl);
    }
  }
  function formatNumber(num) {
    const formatter = new Intl.NumberFormat('id-ID');
    return formatter.format(num);
  }