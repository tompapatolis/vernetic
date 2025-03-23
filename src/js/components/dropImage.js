/******************************************************************************
 * IMAGE DROP ZONE HANDLER
 *
 * Purpose:
 * - Enables drag-and-drop or manual file selection for image uploads
 *   inside elements with the `.drop-image` class.
 *
 * Behavior:
 * - Listens for file selection via `<input type="file" id="input-file">`
 * - Allows users to drag and drop images into the drop zone
 * - Calls `uploadImage()` with the parent `.drop-image` element
 *
 * Notes:
 * - Exits early if no `.drop-image` elements are found in the DOM
 * - Assumes each `.drop-image` contains `#input-file` and `.drop-image__view`
 *****************************************************************************/

export function dropImage() {
    const imageDrops = document.querySelectorAll('.drop-image');
    if (!imageDrops.length) return; // Exit early if no drop zones found

    imageDrops.forEach( imageDrop => {
        const inputFile = imageDrop.querySelector('#input-file');
        const imageView = imageDrop.querySelector('.drop-image__view');

        inputFile.addEventListener('change', e => {
            uploadImage(imageDrop);
        });

        imageDrop.addEventListener('dragover', e => {
            e.preventDefault();
        });

        imageDrop.addEventListener('drop', e => {
            e.preventDefault();
            inputFile.files = e.dataTransfer.files;
            uploadImage(imageDrop);
        });
    });
}

function uploadImage(imageDrop) {
    const inputFile  = imageDrop.querySelector('#input-file');
	const form       = inputFile.form;
	const action     = form.dataset.action;
    const share      = form.dataset.shareInput;
    const imageView  = imageDrop.querySelector('.drop-image__view');

    // Effects
    imageView.innerHTML = '&nbsp;';
    imageDrop.style.border = '3px solid #000';
    imageDrop.classList.add('drop-image--pulsate');

	fetch(action, {method: 'POST', body: new FormData(form), cache: 'no-cache'})
    	.then(res => res.json())
    	.then(response => {
            const imgLink = response.baseurl + "/images/" + response.filename + ".webp";
            imageView.style.backgroundImage = `url(${imgLink})`;
            imageDrop.classList.remove('drop-image--pulsate');
            imageDrop.style.border = 0;
            if ( share ) {
                const shareInput = document.querySelector(`input[name="${share}"]`);
                shareInput.value = response.filename;
            }
    	})
	    .catch(err => {console.log(err);});
}