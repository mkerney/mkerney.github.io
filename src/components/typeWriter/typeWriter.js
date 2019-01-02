import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';

export default class TypeWriteEffect extends Component {
    render() {
        return(
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString('Mohan K')
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString('an UI Developer')
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString('also an UI Engineer')
                        .pauseFor(2500)
                        .deleteAll()
                        .callFunction(() => {
                            console.log('All strings were deleted');
                        })
                        .start();
                }}
            />
        )
    }
}