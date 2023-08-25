import { useState, useEffect } from 'react';

function TextHtml(props) {

    const [html, setHTML] = useState({ __html: "" });


    setHTML(props)

    return <div dangerouslySetInnerHTML={html} />;
}
export default TextHtml