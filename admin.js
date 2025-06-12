document.addEventListener('DOMContentLoaded', function() {
  const banButton = document.getElementById('banButton');
  const usertokenButton = document.getElementById('usertokenButton');
  const userblookButton = document.getElementById('userblookButton');

  if (banButton) {
    banButton.addEventListener('click', function() {
      createModal('Search User to Ban', 'Username', 'Ban', (username, blookName) => {
        if (username) {
          console.log(`Banning user: ${username}`);
        } else {
          alert('Please Enter a Username.');
        }
      }, false, "Blook Name");
    });
  }

  if (usertokenButton) {
    usertokenButton.addEventListener('click', function() {
      createModal('Add tokens to user', 'Username', 'Add Tokens', (username, tokenAmount) => {
        if (username && tokenAmount) {
          console.log(`Adding ${tokenAmount} tokens to user: ${username}`);
        } else {
          alert('Please Enter a Username And Token Amount.');
        }
      }, true, "Token Amount");
    });
  }

  if (userblookButton) {
    userblookButton.addEventListener('click', function() {
      createModal('Add blooks to user', 'Username', 'Add Blooks', (username, blookName) => {
        if (username && blookName) {
          console.log(`Adding blook "${blookName}" to user: ${username}`);
        } else {
          alert('Please Enter a Username And Blook Name.');
        }
      }, true, "Blook Name");
    });
  }

  function createModal(title, inputLabel, confirmButtonText, confirmCallback, hasSecondInput = false, secondInputLabel = "Amount") {
    const modal = document.createElement('div');
    modal.className = 'arts__modal___VpEAD-camelCase';

    let secondInputHTML = '';
    if (hasSecondInput) {
      secondInputHTML = `
        <div class="styles__numRow___xh98F-camelCase">
          <div style="border: 0.156vw solid rgba(0, 0, 0, 0.17); border-radius: 0.313vw; width: 90%; height: 2.604vw; margin: 0.000vw; display: flex; flex-direction: row; align-items: center;">
            <input style="border: none; height: 2.083vw; line-height: 2.083vw; font-size: 1.458vw; text-align: center; font-weight: 700; font-family: Nunito, sans-serif; color: white; background-color: var(--secondary-color); outline: none; width: 100%;" placeholder="${secondInputLabel}" id="secondInput">
          </div>
        </div>
      `;
    }

    modal.innerHTML = `
      <form class="styles__container___1BPm9-camelCase">
        <div class="styles__text___KSL4--camelCase" style="color: white;">${title}</div>
        <div class="styles__holder___3CEfN-camelCase">
          <div class="styles__numRow___xh98F-camelCase">
            <div style="border: 0.156vw solid rgba(0, 0, 0, 0.17); border-radius: 0.313vw; width: 90%; height: 2.604vw; margin: 0.000vw; display: flex; flex-direction: row; align-items: center;">
              <input style="border: none; height: 2.083vw; line-height: 2.083vw; font-size: 1.458vw; text-align: center; font-weight: 700; font-family: Nunito, sans-serif; color: white; background-color: var(--secondary-color); outline: none; width: 100%;" placeholder="${inputLabel}" maxlength="16" value="" id="usernameInput">
            </div>
          </div>
          ${secondInputHTML}
          <div class="styles__buttonContainer___2EaVD-camelCase">
            <div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase confirm-button" role="button" tabindex="0">
              <div class="styles__shadow___3GMdH-camelCase"></div>
              <div class="styles__edge___3eWfq-camelCase" style="background-color: var(--accent);"></div>
              <div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: var(--accent); color: white;">${confirmButtonText}</div>
            </div>
            <div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase cancel-button" role="button" tabindex="0">
              <div class="styles__shadow___3GMdH-camelCase"></div>
              <div class="styles__edge___3eWfq-camelCase" style="background-color: var(--accent);"></div>
              <div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: var(--accent); color: white;">Cancel</div>
            </div>
          </div>
        </div>
        <input type="submit" style="opacity: 0; display: none;">
      </form>
    `;

    document.body.appendChild(modal);

    const usernameInput = modal.querySelector('#usernameInput');
    const secondInput = modal.querySelector('#secondInput');
    const confirmButton = modal.querySelector('.confirm-button');
    const cancelButton = modal.querySelector('.cancel-button');

    confirmButton.addEventListener('click', function() {
      const username = usernameInput.value;
      const secondInputValue = hasSecondInput ? secondInput.value : null;
      confirmCallback(username, secondInputValue);
      modal.remove();
    });

    cancelButton.addEventListener('click', function() {
      modal.remove();
    });
  }
});

async function changeBlookReq(action,blook="",newData={}){
  return await fetch("/api/admin/blooks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action,blook,newData})})
}
async function changeUsersReq(action,userId="",newData={}){
  const res = await fetch("/api/admin/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action,userId,newData})});
  const data = await res.json();
  return data;
}
async function getUsers(){
  return (await changeUsersReq("get")).users;
}
async function createBlook(blookData){
  return await changeBlookReq("create",null,blookData);
}
