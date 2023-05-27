export class FollowersCount extends HTMLElement {
    constructor() {
      super();
      this.data = [];
    }
  
    set socials(value) {
      this.data = value;
      this.render();
    }
  
    render() {
      this.innerHTML = `
                          <main>
                              ${this.data.map(function (social) {
                      return `
                                    <div class="media">
                                    <div class="media-name">${social.media}</div>
                                    <h2 class="media-followers">${social.count}</h2>
                                    <span class="media-label">followers</span>
                                    </div>
                                  `;
                    })}
                          </main>
                        `;
    }
  }
  
  customElements.define('followers-count', FollowersCount);