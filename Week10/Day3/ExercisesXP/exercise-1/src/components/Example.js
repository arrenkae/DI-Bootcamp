import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import "./Styles.css";

const Example = (props) => {
    const [divClass, setDivClass] = useState();

    const { theme } = useTheme();

    useEffect(() => {
        if (theme === 'light') {
            setDivClass('lightdiv');
        } else {
            setDivClass('darkdiv')
        }
    })

    return(
        <div className={divClass}>
            <h2>Example post</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales orci nec enim tristique, vel bibendum magna pulvinar. In hac habitasse platea dictumst. Nam in viverra libero, non vehicula nunc. Nulla urna enim, ornare in felis sed, tincidunt condimentum lacus. Cras ac libero facilisis, ullamcorper metus et, varius odio. Curabitur efficitur arcu eu ipsum tempus, nec interdum orci volutpat. Integer lorem est, venenatis fermentum est eu, finibus lacinia lectus. Morbi lacus risus, elementum sed consectetur sed, rutrum in magna. Ut at neque a dolor vestibulum vestibulum. </p>
        </div>
    )
}


export default Example;