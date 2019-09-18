import React from 'react'
import Header from "./header/header";
import Component from "./Content/content";
import Total from "./Content/total";

const Course = (props) => {
console.log(props.parts)
    return(
        <div>
            <Header header={props.header} />
            <Component parts={props.parts}/>
            <Total  total={props.parts}/>

        </div>
    )
}
export default Course
