var popupComponent = xcomponent.create({
    tag: 'popup-test',
    url: xcomponent.getCurrentScriptDir() + '/popup.html',

    // Allow the component to be rendered as a popup

    contexts: {
        popup: true
    },

    dimensions: {
        width: '400px',
        height: '600px'
    },
    props: {
        onClick: {
            type: 'function',
            required: false
        },
        onContainerCreate: {
            type: 'function',
            required: false
        }
    }
});