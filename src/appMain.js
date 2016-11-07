const React = require('react')
const ReactDOM = require('react-dom')
const div = React.DOM.div
var apptitle = require('./apptitle')

const appMain = (
    div(null,
        apptitle(null

        )  
    )
)

ReactDOM.render(appMain, document.getElementById('app'))
