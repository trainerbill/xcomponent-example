var buttonComponent = xcomponent.create({
    url: 'buttonIframe.html',
    tag: 'button-test',
    dimensions: {
        width: '315px',
        height: '100px'
    },
    props: {
        color: {
            type: 'string',
            required: false
        },
        bcolor: {
            type: 'string',
            required: false
        },
        onClick: {
            type: 'function',
            required: false
        },
        onContainerCreate: {
            type: 'function',
            required: false
        },
        hn: {
            type: 'string',
            required: false
        },
        partner_name: {
            type: 'string',
            required: false
        },
        bn_code: {
            type: 'string',
            required: false
        },
        env: {
            type: 'string',
            required: false
        }
    }
});