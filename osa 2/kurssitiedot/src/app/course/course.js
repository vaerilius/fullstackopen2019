import React from 'react'
import Header from "./header/header";
import Component from "./Content/content";
import Total from "./Content/total";

const Course = ({course}) => {

    return(
        <div>
            <Header header={course.name} />
            <Component parts={course.parts}/>
            <Total  total={course.parts}/>

        </div>
    )
}
export default Course
