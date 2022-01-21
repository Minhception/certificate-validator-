import React from "react";

const Installation = () => {
    let deferredPrompt: any;

    const addBtn = document.querySelector(".add-button");

    if (addBtn !== null) {


        //addBtn.style.display = 'none';

        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('test')
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            // Stash the event so it can be triggered later.
            deferredPrompt = e;
            // Update UI to notify the user they can add to home screen
            //addBtn.style.display = 'block';

            addBtn.addEventListener('click', () => {
                console.log('test')
                // hide our user interface that shows our A2HS button
                //addBtn.style.display = 'none';
                // Show the prompt
                deferredPrompt.prompt();
                // Wait for the user to respond to the prompt
                deferredPrompt.userChoice.then((choiceResult: any) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the A2HS prompt');
                    } else {
                        console.log('User dismissed the A2HS prompt');
                    }
                    deferredPrompt = null;
                });
            });
        });
    }
    return (<button className="add-button">Add to home screen</button>)
}

export default Installation;