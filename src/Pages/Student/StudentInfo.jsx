import { Link, useParams } from "react-router-dom"
import React from "react";

export default function StudentInfo() {
    const { studentsId } = useParams();
    return (
        <div>
          <Link to="/allstudents">Back</Link>
          <h3>Name of this student:</h3>
          <p>{studentsId}</p>
        </div>
      );
    }