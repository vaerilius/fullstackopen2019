import React from 'react'
import Header from "./header/header";
import Component from "./Content/content";

const Course = ({course}) => {

    return(
        <div>
            <Header header={course.name} />
            <Component parts={course.parts}/>

        </div>
    )
}
export default Course
