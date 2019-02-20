
// api key
const APIKEY = 'tofb2KC3K9WNkY2-A_VISLJVjWMQh5Df';
const APISERET = 'xMmnpBZx-r-3xNFAZJUGKXLnLAEFG4Ls';

//////////////////

//界面跳转
function navigateTo(page) {
    window.location.href = page + '.html';
}

// device info
function isMobile() {
    const userAgentInfo = navigator.userAgent;
    const mobileAgents = ['Android', 'iPhone', 'Windows Phone', 'iPod', 'iPad']; 
    let mobile_flag = false;

    for (let v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            mobile_flag = true;
            break;
        }
    }

    const screen_width = window.screen.width;
    const screen_height = window.screen.height;

    if (screen_width < 500 && screen_height < 800) {
        mobile_flag = true;
    }
    return mobile_flag;
}

//resets display
function resetContainer() {
    const screenH = document.documentElement.clientHeight || document.body.clientHeight;
    const screenW = document.documentElement.clientWidth || document.body.clientWidth;

    const container = document.getElementsByClassName('container')[0];

    const isMb = isMobile();

    // boolean
    console.log(`On Mobile Device:` + isMb);

    if (isMb == false) {// pc or ipad
        container.style.width = "375px";
        container.style.height = '667px';
        container.style.top = ((screenH - 667) / 2) +  "px";
        console.log(container.style.top);
        container.backgroundColor = 'red';
    }
}